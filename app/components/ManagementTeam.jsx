"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, User } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

const ManagementTeam = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const supabase = createClient();
      const { data } = await supabase
        .from("team_members")
        .select("*")
        .eq("status", "published")
        .order("sort_order", { ascending: true });
      setTeam(data ?? []);
      setLoading(false);
    };
    load();
  }, []);

  return (
    <section
      id="team"
      className="relative w-full py-32 px-6 md:px-12 bg-paper overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[180px] font-bold text-ink/[0.04] select-none pointer-events-none leading-none tracking-tighter whitespace-nowrap z-0">
        TEAM
      </div>

      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border-[40px] border-dashed border-brand/10 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full border-[50px] border-dashed border-ink/[0.04] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-ink" />
              </div>
              <span className="font-mono text-ink text-[12px] font-bold tracking-[0.25em] uppercase">
                Management Team
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight tracking-tight"
              >
                The People
                <br />
                <span className="text-brand-dark">Behind NOVA</span>
              </motion.h2>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <p className="text-steel text-lg leading-relaxed">
              Meet the experienced professionals leading our company toward
              growth and excellence in every construction project we deliver
              across Afghanistan.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold text-ink">
                  {team.length}
                </span>
                <span className="font-mono text-[11px] text-steel uppercase tracking-widest">
                  Leaders
                </span>
              </div>
              <div className="w-px h-12 bg-brand/40" />
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold text-ink">
                  10+
                </span>
                <span className="font-mono text-[11px] text-steel uppercase tracking-widest">
                  Avg. Experience
                </span>
              </div>
              <div className="w-px h-12 bg-brand/40" />
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold text-ink">
                  80+
                </span>
                <span className="font-mono text-[11px] text-steel uppercase tracking-widest">
                  Projects Led
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {loading ? (
          <p className="text-steel text-center py-16">Loading team...</p>
        ) : team.length === 0 ? (
          <p className="text-steel text-center py-16">
            Team information coming soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative bg-white border border-steel-light rounded-3xl overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10" />

                <div className="relative h-[260px] overflow-hidden bg-paper flex items-center justify-center">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <User className="w-14 h-14 text-steel/30" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-[5px] bg-white/80 backdrop-blur-sm text-steel font-mono text-[11px] font-bold tracking-widest rounded-full border border-steel-light">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-6 flex-1">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display text-ink font-bold text-[17px] tracking-tight leading-snug group-hover:text-brand-dark transition-colors duration-300">
                      {member.name}
                    </h3>
                    <span className="inline-flex items-center gap-2 w-fit font-mono text-[11px] font-bold text-brand-dark bg-brand/10 border border-brand/20 px-3 py-[4px] rounded-full">
                      <span className="w-1 h-1 rounded-full bg-brand-dark" />
                      {member.role}
                    </span>
                  </div>

                  <p className="text-steel text-[13px] leading-relaxed border-t border-steel-light pt-3">
                    {member.bio}
                  </p>

                  {(member.linkedin_url || member.twitter_url) && (
                    <div className="mt-auto pt-3 border-t border-steel-light flex items-center gap-2">
                      {member.linkedin_url && (
                        <a
                          href={member.linkedin_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-paper border border-steel-light flex items-center justify-center text-steel hover:text-brand-dark hover:border-brand/40 hover:bg-brand/10 transition-all duration-200"
                          aria-label={`${member.name} on LinkedIn`}
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.twitter_url && (
                        <a
                          href={member.twitter_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-paper border border-steel-light flex items-center justify-center text-steel hover:text-brand-dark hover:border-brand/40 hover:bg-brand/10 transition-all duration-200"
                          aria-label={`${member.name} on Twitter`}
                        >
                          <Twitter className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ManagementTeam;
