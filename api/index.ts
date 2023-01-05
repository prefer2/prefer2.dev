import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import Post from "types/Post";

const postsDirectory = join(process.cwd(), "_posts");

export const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostBySlug = (slug: string): Post => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const { date, title, description, tags } = data;

  return { slug: realSlug, content, date, title, description, tags };
};

export const getAllPosts = () => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort(
      (post1, post2) =>
        Number(new Date(post2.date)) - Number(new Date(post1.date))
    );

  return posts;
};
