import { notFound } from "next/navigation";
import ProjectForm from "../_components/ProjectForm";
import { createClient } from "@/lib/supabase/server";

export default async function EditProjectPage({ params }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: project } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (!project) notFound();

  return <ProjectForm mode="edit" initialData={project} />;
}
