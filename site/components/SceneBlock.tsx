import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default function SceneBlock({
  date,
  tags,
  title,
  body,
  slug,
  readingTime,
}: {
  date: string;
  tags: string[];
  title: string;
  body?: string;
  slug: string;
  readingTime?: number;
}) {
  return (
    <div className="border border-rule bg-block p-4">
      <p className="font-mono text-xs text-muted mb-2.5 tracking-[0.5px]">
        [<span className="text-accent">{formatDate(date)}</span>]
        {tags.map((t) => (
          <span key={t}> [<span className="text-accent">{t}</span>]</span>
        ))}
        {readingTime != null && (
          <span className="text-muted"> · {readingTime} min read</span>
        )}
      </p>
      <p className="font-serif text-[17px] text-link mb-1.5">
        <Link href={`/blog/${slug}`} className="text-link hover:text-link-hover no-underline">
          {title}
        </Link>
      </p>
      {body && (
        <p className="text-[15px] text-muted leading-[1.6] mb-2">{body}</p>
      )}
      <Link
        href={`/blog/${slug}`}
        className="font-mono text-xs text-accent hover:text-link-hover no-underline"
      >
        [ read more ]
      </Link>
    </div>
  );
}
