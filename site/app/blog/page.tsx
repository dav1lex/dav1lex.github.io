import type { Metadata } from "next";
import { getPaginatedPosts } from "@/lib/posts";
import SceneBlock from "@/components/SceneBlock";
import Paginator from "@/components/Paginator";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from building in public: independent benchmarks on TTS and LLMs — voice drift, identity collapse, prompt extraction, security. Plus AI agents in production, scraping systems, and what breaks at scale.",
  alternates: {
    canonical: "https://dav1lex.titancode.pl/blog",
  },
  openGraph: {
    title: "Blog | Ömer Uğur",
    description:
      "Benchmarks on TTS and LLMs, AI agents in production, scraping systems, reverse engineering. What breaks and why.",
    url: "https://dav1lex.titancode.pl/blog",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Ömer Uğur",
    description:
      "Benchmarks on TTS and LLMs, AI agents, scraping at scale, reverse engineering. Field notes from shipping.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Ömer Uğur's Blog",
  description:
    "Articles on AI agents, TTS research, voice cloning, web scraping, and reverse engineering.",
  url: "https://dav1lex.titancode.pl/blog",
  author: {
    "@type": "Person",
    name: "Ömer Uğur",
  },
};

export default function BlogPage() {
  const { posts, totalPages, currentPage } = getPaginatedPosts(1);

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
            readingTime={post.readingTime}
          />
        ))}
      </div>
      <Paginator currentPage={currentPage} totalPages={totalPages} />
    </section>
  );
}
