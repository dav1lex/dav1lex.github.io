export default function Palette() {
  return (
    <>
      <h1 className="text-xl mb-2 text-text">design palette</h1>
      <p className="text-sm text-muted font-mono mb-12">dav1lex.github.io - every token, one page</p>

      {/* COLORS */}
      <Section title="colors" />
      <div className="grid grid-cols-2 gap-3 mb-10">
        <Swatch name="bg" hex="#0d0d0d" cls="bg-bg border border-rule" />
        <Swatch name="block" hex="#141414" cls="bg-block border border-rule" />
        <Swatch name="text" hex="#e0e0e0" cls="bg-text" dark />
        <Swatch name="muted" hex="#777777" cls="bg-muted" dark />
        <Swatch name="link" hex="#9ab87a" cls="bg-link" dark />
        <Swatch name="link-hover" hex="#b8d89a" cls="bg-link-hover" dark />
        <Swatch name="accent" hex="#5a7a3a" cls="bg-accent" dark />
        <Swatch name="rule" hex="#1e1e1e" cls="bg-rule" dark />
      </div>

      {/* TYPOGRAPHY */}
      <Section title="typography" />
      <div className="space-y-4 mb-10 font-mono text-sm text-muted">
        <p className="!font-serif text-xl text-text">This is a serif heading (Georgia)</p>
        <p className="!font-serif text-text">This is body text. Serif. Georgia. 16px. For blog posts and long reads.</p>
        <p className="!font-mono text-text">This is mono text. Courier New. For UI, nav, tags, metadata.</p>
        <p className="text-muted">This is muted text. For excerpts, dates, secondary info.</p>
      </div>

      {/* LINKS */}
      <Section title="links" />
      <div className="space-x-6 mb-10 font-mono text-sm">
        <a href="#" className="text-link hover:text-link-hover no-underline">internal link</a>
        <a href="#" className="text-muted hover:text-link-hover no-underline">nav link</a>
      </div>

      {/* TAGS */}
      <Section title="tags" />
      <div className="flex gap-2 mb-10 font-mono text-xs">
        <Tag>tts</Tag>
        <Tag>research</Tag>
        <Tag>benchmark</Tag>
        <Tag>scraping</Tag>
        <Tag>ai</Tag>
        <Tag>agents</Tag>
      </div>

      {/* DIVIDER */}
      <Section title="divider" />
      <p className="font-mono text-xs text-rule text-center mb-10 tracking-[3px] select-none">
        · · · <span className="text-accent">■</span> · · ·
      </p>

      {/* HEADER BOX */}
      <Section title="header box" />
      <header className="border border-rule bg-block p-5 mb-10">
        <pre className="font-mono text-[11px] text-accent leading-[1.3] mb-3.5">
          {"    ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄\n    █ █▀▀ █ █ █▀▀ █▀▀█     █\n    █ █▀▀ █ █ █▀▀ █▄▄▀     █\n    █ ▀▀▀ ▀▀▀ ▀▀▀ ▀ ▀     █\n    ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀"}
        </pre>
        <p className="font-mono text-[15px] text-text mb-1">dav1lex.github.io</p>
        <p className="font-mono text-xs text-muted mb-3.5">omer ugur - ai / tts / scraping / reversing</p>
        <nav className="flex gap-4 font-mono text-[13px]">
          <a href="#" className="text-muted hover:text-link-hover no-underline">home</a>
          <a href="#" className="text-muted hover:text-link-hover no-underline">blog</a>
          <a href="#" className="text-muted hover:text-link-hover no-underline">projects</a>
          <a href="#" className="text-muted hover:text-link-hover no-underline">about</a>
        </nav>
      </header>

      {/* SCENE BLOCKS (posts) */}
      <Section title="scene blocks (posts)" />
      <div className="space-y-5 mb-10">
        <SceneBlock
          date="2024-05-24"
          tags={["tts", "research", "benchmark"]}
          title="breathiness preservation benchmark"
          body="Does voice-cloning TTS preserve breathy voice quality from reference audio? We benchmarked Chatterbox, XTTS-v2, and Kokoro across 3 speaker pairs. XTTS-v2 wins (score 0.097). Kokoro baseline zero."
        />
        <SceneBlock
          date="2024-05-20"
          tags={["tts", "emotion"]}
          title="chatterbox emotion channel analysis"
          body="Replication of Zonos acoustic channel ablation on Chatterbox TTS. Scalar control collapses onto pauses. Vector control routes to timbre. Pauses channel accuracy: 0.457."
        />
        <SceneBlock
          date="2024-05-15"
          tags={["scraping", "olx", "puppeteer"]}
          title="scraping olx at scale"
          body="Production-grade OLX scraper: rate limit handling, district-level geocoding fallback, JSON-LD extraction."
        />
      </div>

      {/* FOOTER */}
      <Section title="footer" />
      <footer className="font-mono text-xs text-muted leading-[1.8]">
        <p className="mb-2">
          omer ugur <span className="text-accent">//</span> ai <span className="text-accent">//</span> tts <span className="text-accent">//</span> scraping <span className="text-accent">//</span> reversing
        </p>
        <p>
          <a href="#" className="text-muted hover:text-link-hover no-underline">github</a> ·
          <a href="#" className="text-muted hover:text-link-hover no-underline">linkedin</a> ·
          <a href="#" className="text-muted hover:text-link-hover no-underline">mail</a> ·
          <a href="#" className="text-muted hover:text-link-hover no-underline">rss</a>
        </p>
        <p className="mt-3 text-[#444] text-[11px]">
          no js required · no cookies · no trackers · no bullshit
        </p>
      </footer>
    </>
  );
}

/* ---- helpers ---- */

function Section({ title }: { title: string }) {
  return (
    <p className="font-mono text-[11px] text-accent uppercase tracking-[2px] mb-4 border-b border-rule pb-1.5">
      {title}
    </p>
  );
}

function Swatch({ name, hex, cls, dark }: { name: string; hex: string; cls: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 shrink-0 ${cls} flex items-center justify-center`}>
        {dark && <span className="text-[9px] font-mono text-[#0d0d0d]">Aa</span>}
        {!dark && <span className="text-[9px] font-mono text-text">Aa</span>}
      </div>
      <div className="font-mono text-xs leading-tight">
        <p className="text-text">{name}</p>
        <p className="text-muted">{hex}</p>
      </div>
    </div>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span className="text-accent">[{children}]</span>
  );
}

function SceneBlock({ date, tags, title, body }: {
  date: string;
  tags: string[];
  title: string;
  body: string;
}) {
  return (
    <div className="border border-rule bg-block p-4">
      <p className="font-mono text-xs text-muted mb-2.5 tracking-[0.5px]">
        [<span className="text-accent">{date}</span>]
        {tags.map((t) => (
          <span key={t}> [<span className="text-accent">{t}</span>]</span>
        ))}
      </p>
      <p className="font-serif text-[17px] text-link mb-1.5">{title}</p>
      <p className="text-[15px] text-muted leading-[1.6] mb-2">{body}</p>
      <a href="#" className="font-mono text-xs text-accent hover:text-link-hover no-underline">
        [ read more ]
      </a>
    </div>
  );
}
