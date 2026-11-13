import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = "https://dav1lex.github.io";
const POSTS_DIR = path.join(__dirname, "..", "_posts");
const OUT = path.join(__dirname, "..", "public", "sitemap.xml");

// Last commit date of a source file; undefined outside a git checkout.
function gitDate(file: string): string | undefined {
  try {
    const d = execSync(`git log -1 --format=%cs -- "${file}"`, {
      cwd: path.join(__dirname, ".."),
      encoding: "utf-8",
    }).trim();
    return d || undefined;
  } catch {
    return undefined;
  }
}

function latest(...dates: (string | undefined)[]): string | undefined {
  return dates.filter((d): d is string => !!d).sort().pop();
}

// Add blog posts
const postDates: string[] = [];
const pages: { loc: string; priority: number; changefreq: string; lastmod?: string }[] = [];
if (fs.existsSync(POSTS_DIR)) {
  for (const f of fs.readdirSync(POSTS_DIR)) {
    if (!f.endsWith(".mdx")) continue;
    const raw = fs.readFileSync(path.join(POSTS_DIR, f), "utf-8");
    const { data } = matter(raw);
    const slug = f.replace(/\.mdx$/, "");
    if (data.date) postDates.push(String(data.date));
    pages.push({
      loc: `${SITE}/blog/${slug}`,
      priority: 0.8,
      changefreq: "weekly",
      lastmod: data.date,
    });
  }
}
const newestPost = latest(...postDates);

pages.unshift(
  { loc: SITE, priority: 1.0, changefreq: "daily", lastmod: latest(gitDate("app/page.tsx"), newestPost) ?? "2026-05-28" },
  { loc: `${SITE}/blog`, priority: 0.9, changefreq: "daily", lastmod: latest(gitDate("app/blog/page.tsx"), newestPost) ?? "2026-05-28" },
  { loc: `${SITE}/projects`, priority: 0.7, changefreq: "monthly", lastmod: gitDate("app/projects/page.tsx") ?? "2026-07-12" },
  { loc: `${SITE}/about`, priority: 0.5, changefreq: "monthly", lastmod: gitDate("app/about/page.tsx") ?? "2026-05-24" },
);

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
