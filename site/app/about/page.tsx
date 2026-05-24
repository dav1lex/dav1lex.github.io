export default function AboutPage() {
  return (
    <section>
      <h1 className="text-xl mb-6 text-text">about</h1>

      <div className="space-y-4 text-[15px] leading-[1.7]">
        <p>
          i&apos;m omer. made in turkey, forged in poland.
        </p>

        <p>
          i build things that work. scrapers, agents, apis, frontends.
          whatever gets the job done. i don&apos;t chase the hype -
          i chase what ships.
        </p>

        <p>
          breaking things is how i learn. i break production, fix it,
          and remember forever. if i haven&apos;t crashed your stack
          on a friday night, i probably wasn&apos;t interested.
        </p>

        <p>
          corps want meetings about tickets about deadlines. i want a
          terminal and a problem. no bullshit, just ship.
        </p>
      </div>

      <div className="border-t border-rule mt-8 pt-6 font-mono text-xs text-muted space-y-2">
        <p>
          <span className="text-accent">contact</span>
        </p>
        <p>
          <a
            href="mailto:info@titancode.pl"
            className="text-link hover:text-link-hover no-underline"
          >
            info@titancode.pl
          </a>
        </p>
        <p>
          <a
            href="https://github.com/dav1lex"
            className="text-link hover:text-link-hover no-underline"
          >
            github.com/dav1lex
          </a>
        </p>
        <p>
          <a
            href="https://linkedin.com/in/omerugur"
            className="text-link hover:text-link-hover no-underline"
          >
            linkedin.com/in/omerugur
          </a>
        </p>
      </div>
    </section>
  );
}
