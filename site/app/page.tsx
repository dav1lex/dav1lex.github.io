import { getAllPosts } from "@/lib/posts";
import BlinkCursor from "@/components/BlinkCursor";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
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
                  {" · "}{p.date}
                </span>
              </p>
            ))}
          </div>
        </>
      )}
    </>
  );
}
