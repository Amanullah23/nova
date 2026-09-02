import { notFound } from "next/navigation";
import JobForm from "../_components/JobForm";
import { createClient } from "@/lib/supabase/server";

export default async function EditJobPage({ params }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: job } = await supabase
    .from("jobs")
    .select("*")
    .eq("id", id)
    .single();

  if (!job) notFound();

  return <JobForm mode="edit" initialData={job} />;
}
