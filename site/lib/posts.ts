import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "_posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
};

function stripMdx(file: string): string {
  return file.replace(/\.mdx$/, "");
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR);
  const posts = files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, f), "utf-8");
      const { data } = matter(raw);
      return {
        slug: stripMdx(f),
        title: data.title || stripMdx(f),
        date: data.date || "",
        tags: data.tags || [],
      } satisfies PostMeta;
    })
    .sort((a, b) => b.date.localeCompare(a.date));

  return posts;
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
    },
    content,
  };
}
