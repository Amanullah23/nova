import { notFound } from "next/navigation";
import JobForm from "../_components/JobForm";
import { mockJobs } from "../_data/mock-jobs";

export default function EditJobPage({ params }) {
  const job = mockJobs.find((j) => j.id === Number(params.id));

  if (!job) notFound();

  return <JobForm mode="edit" initialData={job} />;
}
