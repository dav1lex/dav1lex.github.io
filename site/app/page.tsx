export default function Home() {
  return (
    <>
      <p className="mb-4">
        i&apos;m omer. i build things — ai agents, tts research, web scrapers,
        reverse engineering. sometimes all three in one project.
      </p>
      <p className="text-muted">
        this is where i write about what i learn, break, and ship.
      </p>

      <div className="border-t border-rule my-8" />

      <div className="font-mono text-xs text-muted space-y-2">
        <p>
          <span className="text-accent">featured projects</span>
        </p>
        <p>
          <a href="/projects/tts-research" className="text-link hover:text-link-hover no-underline">
            tts-research
          </a>
          <span className="text-muted">
            {" — "}benchmarking emotion, breathiness & prosody in voice cloning
          </span>
        </p>
        <p>
          <a href="/projects/aire" className="text-link hover:text-link-hover no-underline">
            aire
          </a>
          <span className="text-muted">
            {" — "}agent platform with admin panel, olx scraper, live chat
          </span>
        </p>
        <p>
          <a href="/projects/excalibur" className="text-link hover:text-link-hover no-underline">
            excalibur
          </a>
          <span className="text-muted">
            {" — "}auction platform with php, proxy bids, email confirmations
          </span>
        </p>
      </div>
    </>
  );
}
