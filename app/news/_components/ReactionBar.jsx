"use client";
import { useEffect, useState } from "react";
import { ThumbsUp, Lightbulb, PartyPopper } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { getVisitorId } from "@/lib/utils/visitor";

const REACTIONS = [
  { type: "like", label: "Like", icon: ThumbsUp },
  { type: "insightful", label: "Insightful", icon: Lightbulb },
  { type: "celebrate", label: "Celebrate", icon: PartyPopper },
];

export default function ReactionBar({ articleId }) {
  const [counts, setCounts] = useState({
    like: 0,
    insightful: 0,
    celebrate: 0,
  });
  const [myReaction, setMyReaction] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const supabase = createClient();
      const { data } = await supabase
        .from("article_reactions")
        .select("reaction_type, visitor_id")
        .eq("article_id", articleId);

      const tally = { like: 0, insightful: 0, celebrate: 0 };
      const visitorId = getVisitorId();
      let mine = null;
      (data ?? []).forEach((r) => {
        if (tally[r.reaction_type] !== undefined) tally[r.reaction_type] += 1;
        if (r.visitor_id === visitorId) mine = r.reaction_type;
      });
      setCounts(tally);
      setMyReaction(mine);
      setLoading(false);
    };
    load();
  }, [articleId]);

  const handleReact = async (type) => {
    const visitorId = getVisitorId();
    const supabase = createClient();
    const nextType = myReaction === type ? null : type;

    setCounts((prev) => {
      const next = { ...prev };
      if (myReaction) next[myReaction] = Math.max(0, next[myReaction] - 1);
      if (nextType) next[nextType] = (next[nextType] ?? 0) + 1;
      return next;
    });
    setMyReaction(nextType);

    if (nextType === null) {
      await supabase
        .from("article_reactions")
        .delete()
        .eq("article_id", articleId)
        .eq("visitor_id", visitorId);
    } else {
      await supabase
        .from("article_reactions")
        .upsert(
          {
            article_id: articleId,
            visitor_id: visitorId,
            reaction_type: nextType,
          },
          { onConflict: "article_id,visitor_id" },
        );
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <p className="font-mono text-[11px] font-bold text-steel tracking-[0.15em] uppercase">
        Was this useful?
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {REACTIONS.map(({ type, label, icon: Icon }) => {
          const active = myReaction === type;
          return (
            <button
              key={type}
              type="button"
              disabled={loading}
              onClick={() => handleReact(type)}
              className={`flex items-center gap-2 px-4 py-[9px] rounded-full border text-[13px] font-semibold transition-all duration-200 ${
                active
                  ? "bg-brand border-brand text-ink"
                  : "bg-white border-steel-light text-steel hover:border-brand/40 hover:text-ink"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
              <span className="font-mono text-[11px] opacity-70">
                {counts[type]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
