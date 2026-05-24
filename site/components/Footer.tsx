import Link from "next/link";
import { CONTACT } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="font-mono text-xs text-muted leading-[1.8] mt-12">
      <p className="mb-2">
        ömer uğur{" "}
        <span className="text-accent">//</span> floppy disks to serverless
      </p>
      <p>
        <a
          href={CONTACT.github}
          className="text-muted hover:text-link-hover no-underline"
        >
          github
        </a>
        {" · "}
        <a
          href="https://titancode.pl"
          className="text-muted hover:text-link-hover no-underline"
        >
          titancode
        </a>
        {" · "}
        <a
          href={CONTACT.linkedin}
          className="text-muted hover:text-link-hover no-underline"
        >
          linkedin
        </a>
        {" · "}
        <a
          href={`mailto:${CONTACT.email}`}
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
        no cookies · no trackers · no bullshit
      </p>
    </footer>
  );
}
