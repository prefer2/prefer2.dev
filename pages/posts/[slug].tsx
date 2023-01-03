import rehypeHighlight from "rehype-highlight";
import ReactMarkdown from "react-markdown";

import PostHeader from "@components/PostHeader";

import Post from "types/Post";
import { getAllPosts, getPostBySlug } from "api";
import markdownStyle from "styles/markdown.module.css";

type PostProps = {
  post: Post;
};

const Post = ({ post }: PostProps) => {
  return (
    <article className="prose lg:prose-xl">
      <PostHeader title={post.title} date={post.date} />
      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
  ]);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Post;
