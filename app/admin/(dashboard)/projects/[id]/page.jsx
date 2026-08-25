import { notFound } from "next/navigation";
import ProjectForm from "../_components/ProjectForm";
import { mockProjects } from "../_data/mock-projects";

export default function EditProjectPage({ params }) {
  const project = mockProjects.find((p) => p.id === Number(params.id));

  if (!project) notFound();

  return <ProjectForm mode="edit" initialData={project} />;
}
