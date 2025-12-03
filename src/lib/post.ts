// lib/post.ts (server-only)
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/posts");

export interface PostData {
  slug: string;
  title: string;
  description: string;
  date: string;
  contentHtml: string;
  keywords: string[];
}

/**
 * Get all slugs from the /posts directory
 * Markdown files must be in: /posts/*.md
 */
export function getAllPostSlugs(): { slug: string }[] {
  if (!fs.existsSync(postsDirectory)) {
    console.warn("Posts directory does not exist:", postsDirectory);
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((file) => file.endsWith(".md"))
    .map((fileName) => ({
      slug: fileName.replace(/\.md$/, ""),
    }));
}

/**
 * Read markdown → parse frontmatter → convert to HTML
 */
export async function getPostData(slug: string): Promise<PostData> {
  console.log("Reading slug:", slug);

  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

     return {
    slug,
    contentHtml,
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    date: data.date,
  };
  // } catch (error) {
  //   console.error("Error loading post:", slug, error);
  //   return null;
  // }
}
