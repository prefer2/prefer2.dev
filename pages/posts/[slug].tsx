import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import PostHeader from "@components/PostHeader";
import PostSEO from "@components/PostSEO";
import Tag from "@components/Tag";
import PostNavigator, { PostNavigatorProps } from "@components/PostNavigator";
import Comment from "@components/Comment";

import Post from "types/Post";
import { getAllPosts, getPostBySlug, getPrevNextPosts } from "api";

interface PostProps {
  post: Post;
  nav: PostNavigatorProps;
}

const Post = ({ post, nav }: PostProps) => {
  const { slug, title, date, description, content, tags } = post;

  return (
    <>
      <PostSEO title={title} description={description} slug={slug} />
      <article className="prose dark:prose-invert">
        <PostHeader title={title} date={date} />
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeHighlight, rehypeKatex]}
        >
          {content}
        </ReactMarkdown>
      </article>
      <div className="flex flex-row gap-2 my-10">
        tags: {tags && tags.map((tag) => <Tag key={tag} tag={tag} />)}
      </div>
      <PostNavigator prev={nav.prev} next={nav.next} />
      <Comment />
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
  const nav = getPrevNextPosts(params.slug);

  return {
    props: {
      post,
      nav,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

export default Post;
