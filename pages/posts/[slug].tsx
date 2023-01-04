import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import PostHeader from "@components/PostHeader";
import PageSEO from "@components/PageSEO";

import Post from "types/Post";
import { getAllPosts, getPostBySlug } from "api";

type PostProps = {
  post: Post;
};

const Post = ({ post }: PostProps) => {
  const { slug, title, date, description, content } = post;
  return (
    <>
      <PageSEO title={title} description={description} slug={slug} />
      <article className="prose">
        <PostHeader title={title} date={date} />
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeHighlight, rehypeKatex]}
        >
          {content}
        </ReactMarkdown>
      </article>
    </>
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
