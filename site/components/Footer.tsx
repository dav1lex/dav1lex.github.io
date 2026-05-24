import Link from "next/link";

export default function Footer() {
  return (
    <footer className="font-mono text-xs text-muted leading-[1.8] mt-12">
      <p className="mb-2">
        ömer uğur{" "}
        <span className="text-accent">//</span> floppy disks to serverless
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
          href="mailto:info@titancode.pl"
          className="text-muted hover:text-link-hover no-underline"
        >
          mail
        </a>
        {" · "}
        <Link
          href="/rss.xml"
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
