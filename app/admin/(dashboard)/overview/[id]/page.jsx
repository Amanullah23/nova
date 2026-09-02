import { notFound } from "next/navigation";
import OverviewCardForm from "../_components/OverviewCardForm";
import { createClient } from "@/lib/supabase/server";

export default async function EditOverviewCardPage({ params }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: card } = await supabase
    .from("overview_cards")
    .select("*")
    .eq("id", id)
    .single();

  if (!card) notFound();

  return <OverviewCardForm mode="edit" initialData={card} />;
}
