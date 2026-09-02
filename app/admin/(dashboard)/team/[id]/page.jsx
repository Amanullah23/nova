import { notFound } from "next/navigation";
import TeamMemberForm from "../_components/TeamMemberForm";
import { createClient } from "@/lib/supabase/server";

export default async function EditTeamMemberPage({ params }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: member } = await supabase
    .from("team_members")
    .select("*")
    .eq("id", id)
    .single();

  if (!member) notFound();

  return <TeamMemberForm mode="edit" initialData={member} />;
}
