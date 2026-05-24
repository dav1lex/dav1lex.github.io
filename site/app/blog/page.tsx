import { getPaginatedPosts } from "@/lib/posts";
import SceneBlock from "@/components/SceneBlock";
import Paginator from "@/components/Paginator";

export default function BlogPage() {
  const { posts, totalPages, currentPage } = getPaginatedPosts(1);

  return (
    <section>
      <h1 className="text-xl mb-8 text-text">blog</h1>
      <div className="space-y-5">
        {posts.length === 0 && (
          <p className="text-muted font-mono text-sm">no posts yet.</p>
        )}
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
