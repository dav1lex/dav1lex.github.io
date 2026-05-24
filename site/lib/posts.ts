import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "_posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  readingTime: number;
};

function stripMdx(file: string): string {
  return file.replace(/\.mdx$/, "");
}

/** ~200 words per minute, minimum 1 min. */
function calcReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}
function extractSummary(mdx: string): string {
  const lines = mdx.split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || trimmed.startsWith("---")) continue;
    // Skip import/export statements
    if (trimmed.startsWith("import ") || trimmed.startsWith("export ")) continue;
    return trimmed.slice(0, 160);
  }
  return "";
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR);
  const posts = files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, f), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug: stripMdx(f),
        title: data.title || stripMdx(f),
        date: data.date || "",
        tags: data.tags || [],
        summary: data.summary || extractSummary(content),
        readingTime: calcReadingTime(content),
      } satisfies PostMeta;
    })
    .sort((a, b) => b.date.localeCompare(a.date));

  return posts;
}

export const POSTS_PER_PAGE = 5;

export function getPaginatedPosts(page: number): {
  posts: PostMeta[];
  totalPages: number;
  currentPage: number;
} {
  const all = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(all.length / POSTS_PER_PAGE));
  const safePage = Math.max(1, Math.min(page, totalPages));
  const start = (safePage - 1) * POSTS_PER_PAGE;
  return {
    posts: all.slice(start, start + POSTS_PER_PAGE),
    totalPages,
    currentPage: safePage,
  };
}

export function getPost(slug: string): { meta: PostMeta; content: string } | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: {
      slug,
      title: data.title || slug,
      date: data.date || "",
      tags: data.tags || [],
      summary: data.summary || extractSummary(content),
      readingTime: calcReadingTime(content),
    },
    content,
  };
}

/** Get related posts by shared tags, excluding the current post. */
export function getRelatedPosts(slug: string, limit = 3): PostMeta[] {
  const post = getPost(slug);
  if (!post) return [];
  const all = getAllPosts().filter((p) => p.slug !== slug);
  const scored = all.map((p) => ({
    post: p,
    score: p.tags.filter((t) => post.meta.tags.includes(t)).length,
  }));
  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score || b.post.date.localeCompare(a.post.date))
    .slice(0, limit)
    .map((s) => s.post);
}
