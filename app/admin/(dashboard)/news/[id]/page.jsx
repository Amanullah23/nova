import { notFound } from "next/navigation";
import ArticleForm from "../_components/ArticleForm";
import { mockArticles } from "../_data/mock-articles";

export default function EditArticlePage({ params }) {
  const article = mockArticles.find((a) => a.id === Number(params.id));

  if (!article) notFound();

  return <ArticleForm mode="edit" initialData={article} />;
}
