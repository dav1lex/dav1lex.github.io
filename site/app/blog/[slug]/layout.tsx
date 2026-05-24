import Link from "next/link";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article>
      <p className="font-mono text-xs text-muted mb-6">
        <Link
          href="/blog"
          className="text-muted hover:text-link-hover no-underline"
        >
          ← back to blog
        </Link>
      </p>
      {children}
    </article>
  );
}
