import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrismPlus from "rehype-prism-plus";
import { getAllPosts, getPost, getRelatedPosts } from "@/lib/posts";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import AudioPlayer from "@/components/AudioPlayer";
import ZoomableImage from "@/components/ZoomableImage";

const SITE = "https://dav1lex.github.io";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.summary,
    keywords: post.meta.tags,
    openGraph: {
      title: post.meta.title,
      description: post.meta.summary,
      url: `${SITE}/blog/${slug}`,
      type: "article",
      publishedTime: post.meta.date,
      tags: post.meta.tags,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `${SITE}/blog/${slug}`,
    },
    twitter: {
      card: "summary",
      title: post.meta.title,
      description: post.meta.summary,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    components: { AudioPlayer, img: ZoomableImage, ZoomableImage },
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypePrismPlus],
      },
    },
  });

  const related = getRelatedPosts(slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.meta.title,
    description: post.meta.summary,
    datePublished: post.meta.date,
    author: {
      "@type": "Person",
      name: "Ömer Uğur",
      url: SITE,
    },
    publisher: {
      "@type": "Person",
      name: "Ömer Uğur",
    },
    url: `${SITE}/blog/${slug}`,
    keywords: post.meta.tags,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <header className="mb-8">
        <p className="font-mono text-xs text-muted mb-2 tracking-[0.5px]">
          [<span className="text-accent">{formatDate(post.meta.date)}</span>]
          {post.meta.tags.map((t) => (
            <span key={t}> [<span className="text-accent">{t}</span>]</span>
          ))}
          <span className="text-muted"> · {post.meta.readingTime} min read</span>
        </p>
        <h1 className="text-xl text-text">{post.meta.title}</h1>
      </header>
      <div className="prose-custom">{content}</div>

      {related.length > 0 && (
        <div className="border-t border-rule mt-10 pt-6">
          <p className="font-mono text-xs text-accent mb-3">related posts</p>
          <div className="space-y-1.5 font-mono text-xs">
            {related.map((r) => (
              <p key={r.slug}>
                <Link
                  href={`/blog/${r.slug}`}
                  className="text-link hover:text-link-hover no-underline"
                >
                  {r.title}
                </Link>
                <span className="text-muted"> · {formatDate(r.date)}</span>
              </p>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
