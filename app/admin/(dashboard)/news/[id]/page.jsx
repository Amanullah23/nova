import { notFound } from "next/navigation";
import ArticleForm from "../_components/ArticleForm";
import { createClient } from "@/lib/supabase/server";

export default async function EditArticlePage({ params }) {
  const { id } = params;
  const supabase = await createClient();
  const { data: article } = await supabase
    .from("articles")
    .select("*")
    .eq("id", id)
    .single();

  if (!article) notFound();

  return <ArticleForm mode="edit" initialData={article} />;
}
