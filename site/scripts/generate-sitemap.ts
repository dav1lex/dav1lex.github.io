import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = "https://dav1lex.github.io";
const POSTS_DIR = path.join(__dirname, "..", "_posts");
const OUT = path.join(__dirname, "..", "public", "sitemap.xml");

const pages: { loc: string; priority: number; changefreq: string; lastmod?: string }[] = [
  { loc: SITE, priority: 1.0, changefreq: "daily" },
  { loc: `${SITE}/blog`, priority: 0.9, changefreq: "daily" },
  { loc: `${SITE}/projects`, priority: 0.7, changefreq: "monthly" },
  { loc: `${SITE}/about`, priority: 0.5, changefreq: "monthly" },
];

// Add blog posts
if (fs.existsSync(POSTS_DIR)) {
  for (const f of fs.readdirSync(POSTS_DIR)) {
    if (!f.endsWith(".mdx")) continue;
    const raw = fs.readFileSync(path.join(POSTS_DIR, f), "utf-8");
    const { data } = matter(raw);
    const slug = f.replace(/\.mdx$/, "");
    pages.push({
      loc: `${SITE}/blog/${slug}`,
      priority: 0.8,
      changefreq: "weekly",
      lastmod: data.date,
    });
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${p.loc}</loc>
    ${p.lastmod ? `<lastmod>${p.lastmod}</lastmod>\n    ` : ""}<changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

fs.writeFileSync(OUT, xml);
console.log(`sitemap.xml generated - ${pages.length} URLs`);
