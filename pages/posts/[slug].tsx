import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import PostHeader from "@components/PostHeader";

import Post from "types/Post";
import { getAllPosts, getPostBySlug } from "api";

type PostProps = {
  post: Post;
};

const Post = ({ post }: PostProps) => {
  return (
    <article className="prose lg:prose-xl">
      <PostHeader title={post.title} date={post.date} />
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeHighlight, rehypeKatex]}
      >
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
  const post = getPostBySlug(params.slug);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

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
