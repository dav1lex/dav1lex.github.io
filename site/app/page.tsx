import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { CONTACT } from "@/lib/contact";
import { formatDate } from "@/lib/utils";
import BlinkCursor from "@/components/BlinkCursor";

export const metadata: Metadata = {
  title: "Ömer Uğur — Full-Stack Developer & Tinkerer | Poland",
  description:
    "Ömer Uğur is a full-stack developer based in Poland. Building AI agents, benchmarking TTS models, scraping at scale. Personal blog about code, voice AI, and reverse engineering.",
  openGraph: {
    title: "Ömer Uğur — Full-Stack Developer & Tinkerer",
    description:
      "Full-stack developer based in Poland. AI agents, TTS research, scraping. Personal blog and project portfolio.",
    type: "profile",
    firstName: "Ömer",
    lastName: "Uğur",
    username: "dav1lex",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ömer Uğur",
  alternateName: "omer ugur",
  url: "https://dav1lex.titancode.pl",
  jobTitle: "Full-Stack Developer",
  description:
    "Full-stack developer and tinkerer. Building AI agents, benchmarking TTS models, scraping at scale.",
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
      <p className="mb-4">
        i&apos;m omer. i build things: ai agents, tts research, web scrapers,
        reverse engineering. sometimes all three in one project.
      </p>
      <p className="text-muted">
        this is where i write about what i learn, break, and ship.<BlinkCursor />
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
