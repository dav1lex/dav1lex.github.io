import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPaginatedPosts, POSTS_PER_PAGE } from "@/lib/posts";
import SceneBlock from "@/components/SceneBlock";
import Paginator from "@/components/Paginator";

export function generateStaticParams() {
  const total = Math.ceil(getAllPosts().length / POSTS_PER_PAGE);
  if (total <= 1) return [{ page: "2" }]; // dummy for static export compatibility
  return Array.from({ length: total - 1 }, (_, i) => ({ page: String(i + 2) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  const title = `Blog - Page ${page}`;
  const desc =
    "Articles on AI agents, TTS research, voice cloning, web scraping, and reverse engineering.";
  return {
    title,
    description: desc,
    alternates: {
      canonical: `https://dav1lex.github.io/blog/page/${page}`,
    },
    openGraph: {
      title: `${title} | Ömer Uğur`,
      description: desc,
      url: `https://dav1lex.github.io/blog/page/${page}`,
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary",
      title: `${title} | Ömer Uğur`,
      description: desc,
    },
    robots: page === "2" && getAllPosts().length <= POSTS_PER_PAGE ? { index: false } : undefined,
  };
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
            readingTime={post.readingTime}
          />
        ))}
      </div>
      <Paginator currentPage={currentPage} totalPages={totalPages} />
    </section>
  );
}
