import Link from "next/link";

const NAV = [
  { label: "home", href: "/" },
  { label: "blog", href: "/blog" },
  { label: "projects", href: "/projects" },
  { label: "about", href: "/about" },
  { label: "rss", href: "/rss" },
] as const;

export default function Header() {
  return (
    <header className="border border-rule bg-block p-5 mb-8">
      <pre className="font-mono text-[11px] text-accent leading-[1.3] mb-3.5">
        {"    ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄\n    █ █▀▀ █ █ █▀▀ █▀▀█     █\n    █ █▀▀ █ █ █▀▀ █▄▄▀     █\n    █ ▀▀▀ ▀▀▀ ▀▀▀ ▀ ▀     █\n    ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀"}
      </pre>
      <p className="font-mono text-[15px] text-text mb-1">
        dav1lex.github.io
      </p>
      <p className="font-mono text-xs text-muted mb-3.5">
        omer ugur - ai / tts / scraping / reversing
      </p>
      <nav className="flex gap-4 font-mono text-[13px]">
        {NAV.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="text-muted hover:text-link-hover no-underline"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
