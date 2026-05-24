import { notFound } from "next/navigation";
import { getAllPosts, getPaginatedPosts, POSTS_PER_PAGE } from "@/lib/posts";
import SceneBlock from "@/components/SceneBlock";
import Paginator from "@/components/Paginator";

export function generateStaticParams() {
  const total = Math.ceil(getAllPosts().length / POSTS_PER_PAGE);
  if (total <= 1) return [{ page: "2" }]; // dummy for static export compatibility
  return Array.from({ length: total - 1 }, (_, i) => ({ page: String(i + 2) }));
}

export default async function BlogPaged({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const pageNum = parseInt(page, 10);

  if (isNaN(pageNum) || pageNum < 2) notFound();

  const { posts, totalPages, currentPage } = getPaginatedPosts(pageNum);

  if (posts.length === 0) notFound();

  return (
    <section>
      <h1 className="text-xl mb-8 text-text">blog</h1>
      <div className="space-y-5">
        {posts.map((post) => (
          <SceneBlock
            key={post.slug}
            slug={post.slug}
            date={post.date}
            tags={post.tags}
            title={post.title}
            body={post.summary}
          />
        ))}
      </div>
      <Paginator currentPage={currentPage} totalPages={totalPages} />
    </section>
  );
}
