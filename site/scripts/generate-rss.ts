import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = "https://dav1lex.github.io";
const POSTS_DIR = path.join(__dirname, "..", "_posts");
const OUT = path.join(__dirname, "..", "public", "rss.xml");

const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

const items = files
  .map((f) => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, f), "utf-8");
    const { data } = matter(raw);
    const slug = f.replace(/\.mdx$/, "");
    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ömer uğur</title>
    <link>${SITE}</link>
    <description>the internet raised me</description>
    <language>en</language>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items
      .map(
        (p) => `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${SITE}/blog/${p.slug}</link>
      <guid>${SITE}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
    </item>`
      )
      .join("\n")}
  </channel>
</rss>`;

fs.writeFileSync(OUT, xml);
console.log(`rss.xml generated - ${items.length} posts`);

function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
