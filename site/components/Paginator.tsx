import Link from "next/link";

export default function Paginator({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const prevHref = currentPage === 2 ? "/blog" : `/blog/page/${currentPage - 1}`;
  const nextHref = `/blog/page/${currentPage + 1}`;

  return (
    <nav className="border-t border-rule mt-8 pt-4 font-mono text-xs flex justify-between">
      <span>
        {currentPage > 1 ? (
          <Link href={prevHref} className="text-muted hover:text-link-hover no-underline">
            ← older
          </Link>
        ) : (
          <span className="text-rule">← older</span>
        )}
      </span>
      <span className="text-muted">
        page {currentPage} of {totalPages}
      </span>
      <span>
        {currentPage < totalPages ? (
          <Link href={nextHref} className="text-muted hover:text-link-hover no-underline">
            newer →
          </Link>
        ) : (
          <span className="text-rule">newer →</span>
        )}
      </span>
    </nav>
  );
}
