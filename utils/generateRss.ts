import fs from "fs";
import { Feed } from "feed";
import { getAllPosts } from "api";

export default async function generateRss() {
  const posts = getAllPosts();
  const siteURL = "https://prefer2-dev.vercel.app/";
  const date = new Date();
  const author = {
    name: "SunHo Park",
    email: "sunho6200@gmail.com",
  };

  const feed = new Feed({
    title: "Your Blog name",
    description: "Your Blog description",
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/favicon.ico`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, SunHo Park`,
    updated: date, // today's date
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`, // xml format
      json: `${siteURL}/rss/feed.json`, // json fromat
    },
    author,
  });

  posts.forEach((post) => {
    const url = `${siteURL}/blog/${post.slug}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description,
      content: post.content,
      author: [author],
      contributor: [author],
      date: new Date(post.date),
    });
  });

  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
}
