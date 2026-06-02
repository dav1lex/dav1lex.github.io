import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { CONTACT } from "@/lib/contact";
import { formatDate } from "@/lib/utils";
import BlinkCursor from "@/components/BlinkCursor";

export const metadata: Metadata = {
  title: "Ömer Uğur - Full-Stack Developer & Tinkerer",
  description:
    "Independent benchmarks on TTS and LLMs measuring what vendors won't publish: voice drift over 5+ min, identity collapse, emotion control, prompt extraction, security. Plus AI agents, scraping systems, and what breaks when you ship them.",
  alternates: {
    canonical: "https://dav1lex.titancode.pl",
  },
  openGraph: {
    title: "Ömer Uğur - Full-Stack Developer & Tinkerer",
    description:
      "Independent benchmarks on TTS and LLMs: voice drift, identity collapse, prompt extraction, security. AI agents, scraping, what breaks at scale.",
    url: "https://dav1lex.titancode.pl",
    type: "profile",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    firstName: "Ömer",
    lastName: "Uğur",
    username: "dav1lex",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ömer Uğur - TTS & LLM Research, AI Agents, Scraping",
    description:
      "Independent benchmarks on TTS and LLMs: voice drift, identity collapse, prompt extraction, security. Plus AI agents, scraping, what breaks.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ömer Uğur",
  alternateName: "omer ugur",
  url: "https://dav1lex.titancode.pl",
  jobTitle: "Full-Stack Developer & AI Researcher",
  description:
    "Independent benchmarks on TTS and LLMs: voice drift, identity collapse, prompt extraction, security. Plus AI agents, scraping systems, what breaks at scale.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PL",
  },
  sameAs: [CONTACT.github, CONTACT.linkedin, `mailto:${CONTACT.email}`],
  knowsAbout: [
    "Next.js",
    "TypeScript",
    "AI Agents",
    "Text-to-Speech",
    "Web Scraping",
    "Reverse Engineering",
    "Cloudflare Workers",
  ],
};

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">
        Ömer Uğur — Full-Stack Developer &amp; Tinkerer
      </h1>
      <p className="mb-4">
        i&apos;m omer. i build web apps and dig into AI. not big on the
        industry around it  -  just the work.
      </p>
      <p className="text-muted">
        this is where i write about what i learn, break, and ship.<BlinkCursor />
      </p>
      <p className="text-[15px] text-muted leading-[1.7] mt-4">
        currently working on TTS benchmarks  -  emotion control, voice drift,
        punctuation sensitivity. also build AI agents, scraping systems, and
        browser extensions. the blog documents the experiments.
      </p>

      {posts.length > 0 && (
        <>
          <div className="border-t border-rule my-8" />
          <div className="font-mono text-xs text-muted space-y-2">
            <p className="text-accent">latest posts</p>
            {posts.map((p) => (
              <p key={p.slug}>
                <a
                  href={`/blog/${p.slug}`}
                  className="text-link hover:text-link-hover no-underline"
                >
                  {p.title}
                </a>
                <span className="text-muted">
                  {" · "}{formatDate(p.date)}
                </span>
              </p>
            ))}
          </div>
        </>
      )}
    </>
  );
}
