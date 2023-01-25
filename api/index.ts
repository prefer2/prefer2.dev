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

  return {
    slug: realSlug,
    content,
    date,
    title,
    description,
    tags,
  };
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

export const getPrevNextPosts = (slug: string) => {
  const slugs = getPostSlugs();

  let slugIndex = 0;
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort(
      (post1, post2) =>
        Number(new Date(post2.date)) - Number(new Date(post1.date))
    )
    .map((post, idx) => {
      if (post.slug === slug) slugIndex = idx;
      return { title: post.title, slug: post.slug };
    });

  if (slugIndex === 0) return { prev: posts[slugIndex + 1] };
  if (slugIndex === slugs.length - 1) return { next: posts[slugIndex - 1] };

  const nextPost = posts[slugIndex - 1];
  const prevPost = posts[slugIndex + 1];

  return { prev: prevPost, next: nextPost };
};
