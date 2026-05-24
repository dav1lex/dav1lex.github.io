import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPost } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
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
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return (
    <article>
      <header className="mb-8">
        <p className="font-mono text-xs text-muted mb-2 tracking-[0.5px]">
          [<span className="text-accent">{post.meta.date}</span>]
          {post.meta.tags.map((t) => (
            <span key={t}> [<span className="text-accent">{t}</span>]</span>
          ))}
        </p>
        <h1 className="text-xl text-text">{post.meta.title}</h1>
      </header>
      <div className="prose-custom">{content}</div>
    </article>
  );
}
