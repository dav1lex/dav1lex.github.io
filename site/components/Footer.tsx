import Link from "next/link";

export default function Footer() {
  return (
    <footer className="font-mono text-xs text-muted leading-[1.8] mt-12">
      <p className="mb-2">
        omer ugur{" "}
        <span className="text-accent">//</span> ai{" "}
        <span className="text-accent">//</span> tts{" "}
        <span className="text-accent">//</span> scraping{" "}
        <span className="text-accent">//</span> reversing
      </p>
      <p>
        <a
          href="https://github.com/dav1lex"
          className="text-muted hover:text-link-hover no-underline"
        >
          github
        </a>
        {" · "}
        <a
          href="https://linkedin.com/in/omerugur"
          className="text-muted hover:text-link-hover no-underline"
        >
          linkedin
        </a>
        {" · "}
        <a
          href="mailto:omer@example.com"
          className="text-muted hover:text-link-hover no-underline"
        >
          mail
        </a>
        {" · "}
        <Link
          href="/rss"
          className="text-muted hover:text-link-hover no-underline"
        >
          rss
        </Link>
      </p>
      <p className="mt-3 text-[#444] text-[11px]">
        no js required · no cookies · no trackers · no bullshit
      </p>
    </footer>
  );
}
