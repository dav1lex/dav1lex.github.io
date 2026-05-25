import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ömer Uğur  -  full-stack developer based in Poland. Made in Turkey, forged in Poland. Building AI agents, TTS research, scraping at scale.",
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="text-xl mb-6 text-text">about</h1>

      <div className="space-y-4 text-[15px] leading-[1.7]">
        <p>
          i&apos;m omer. made in turkey, istanbul, forged in poland, warsaw for the past
          seven years. somewhere between the two  -  not quite either anymore.
        </p>

        <p>
          i do full-stack web development and AI research. cs grad, but the
          real education was the years online before that. i learned by
          breaking things and reading whatever explained why.
        </p>

        <p>
          the work right now is web apps and AI agents  -  building systems
          that actually do something. i write about what i&apos;m
          working on, what didn&apos;t work, and occasionally what i think.
        </p>

        <p>
          outside the terminal: i go to the gym, i go to raves, i listen to
          a lot of music that probably sounds aggressive to most people. i
          read about history more than i talk about it.
        </p>

        <p>
          the name is davilex. it&apos;s from the dutch studio behind those
          old knight rider games  -  played them as a kid, started using it
          as a handle everywhere. it stuck.
        </p>

        <p>
          and yeah dude, still learning...
        </p>
      </div>
    </section>
  );
}
