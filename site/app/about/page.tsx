import { CONTACT } from "@/lib/contact";

export default function AboutPage() {
  return (
    <section>
      <h1 className="text-xl mb-6 text-text">about</h1>

      <div className="space-y-4 text-[15px] leading-[1.7]">
        <p>
          i&apos;m omer. made in turkey, forged in poland. full-stack
          by trade, tinkerer by nature. i build whatever gets the job done.
        </p>

        <p>
          this site is where i write about projects, experiments, and
          whatever i&apos;m currently breaking.
        </p>
      </div>

      <div className="border-t border-rule mt-8 pt-6 font-mono text-xs text-muted space-y-2">
        <p>
          <span className="text-accent">contact</span>
        </p>
        <p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-link hover:text-link-hover no-underline"
          >
            {CONTACT.email}
          </a>
        </p>
        <p>
          <a
            href={CONTACT.github}
            className="text-link hover:text-link-hover no-underline"
          >
            github.com/dav1lex
          </a>
        </p>
        <p>
          <a
            href={CONTACT.linkedin}
            className="text-link hover:text-link-hover no-underline"
          >
            linkedin.com/in/omerugur
          </a>
        </p>
      </div>
    </section>
  );
}
