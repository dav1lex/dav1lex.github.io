"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { label: "home", href: "/" },
  { label: "blog", href: "/blog" },
  { label: "projects", href: "/projects" },
  { label: "about", href: "/about" },
  { label: "rss", href: "/rss.xml" },
] as const;

export default function Header() {
  const pathname = usePathname();

  function isActive(href: string): boolean {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="border border-rule bg-block p-5 mb-8">
      <pre className="font-mono text-[6px] text-accent leading-[1.1] mb-3.5">
        {" ▄▄▄▄     ▄▄   ▄    ▄ ▄▄▄    ▄      ▄▄▄▄▄▄ ▄    ▄\n █   ▀▄   ██   ▀▄  ▄▀   █    █      █       █  █\n █    █  █  █   █  █    █    █      █▄▄▄▄▄   ██\n █    █  █▄▄█   ▀▄▄▀    █    █      █       ▄▀▀▄\n █▄▄▄▀  █    █   ██   ▄▄█▄▄  █▄▄▄▄▄ █▄▄▄▄▄ ▄▀  ▀▄"}
      </pre>
      <p className="text-[16px] text-muted mb-3.5" style={{ fontFamily: "'DOS VGA', monospace" }}>
        omer ugur - the internet raised me
      </p>
      <nav className="flex flex-wrap gap-4">
        {NAV.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={`no-underline text-[16px] ${
              isActive(href)
                ? "text-text"
                : "text-muted hover:text-link-hover"
            }`}
            style={{ fontFamily: "'DOS VGA', monospace" }}
          >
            {label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
