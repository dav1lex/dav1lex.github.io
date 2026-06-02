import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Production work: AI real estate platform with 8 agents scraping OLX at scale, voice reports for field workers, job-analysis Chrome extension, and the open AI benchmark suite for TTS and LLMs. Cloudflare-first stack.",
  alternates: {
    canonical: "https://dav1lex.titancode.pl/projects",
  },
  openGraph: {
    title: "Projects | Ömer Uğur",
    description:
      "AI real estate with 8 agents scraping OLX, voice reports for field workers, Chrome extension, open benchmarks for TTS and LLMs.",
    url: "https://dav1lex.titancode.pl/projects",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Ömer Uğur",
    description:
      "AI real estate with 8 agents, voice reports, Chrome extension, open benchmarks for TTS and LLMs. Cloudflare-first.",
    images: ["/og-image.png"],
  },
};

const PROJECTS = [
  {
    name: "airea.world",
    url: "https://airea.world",
    desc: "ai real estate platform - 8 agents, olx scraper, rag, live map",
    tech: ["next.js", "cf workers", "d1", "r2", "rag"],
  },
  {
    name: "entee.ai",
    url: "https://entee.ai",
    desc: "voice reports for field workers - whatsapp, stripe, ffmpeg",
    tech: ["node.js", "docker", "ffmpeg", "stripe"],
  },
  {
    name: "careerflex.app",
    url: "https://careerflex.app",
    desc: "chrome extension analyzing jobs on 7 platforms + ai cv check",
    tech: ["react", "supabase", "stripe", "chrome ext v3"],
  },
  {
    name: "wiredfor.co",
    url: "https://wiredfor.co",
    desc: "business growth platform based on human design",
    tech: ["next.js", "cf workers", "d1", "stripe"],
  },
  {
    name: "nanobid",
    url: "https://nanobid.alwaysdata.net",
    desc: "real-time auction platform with proxy bidding",
    tech: ["php", "mysql", "phpmailer"],
  },
  {
    name: "tts-research",
    url: "https://github.com/dav1lex/tts-research",
    desc: "independent tts benchmarks - emotion, breathiness, prosody",
    tech: ["python", "praat", "librosa"],
  },
];

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-xl mb-8 text-text">projects</h1>
      <div className="space-y-0 border-t border-rule">
        {PROJECTS.map((p) => (
          <div
            key={p.name}
            className="border-b border-rule py-4"
          >
            <div className="flex items-baseline gap-3 mb-1">
              <p className="font-mono text-sm text-link">
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-link-hover no-underline"
                  >
                    {p.name}
                  </a>
                ) : (
                  p.name
                )}
              </p>
            </div>
            <p className="text-[15px] text-muted mb-1.5">{p.desc}</p>
            <p className="font-mono text-xs text-accent">
              {p.tech.map((t, i) => (
                <span key={t}>
                  {i > 0 && <span className="text-rule mx-1">·</span>}
                  {t}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
