import PageSEO from "@components/PageSEO";
import PostPreview from "@components/PostPreview";

import { getAllPosts } from "api";
import Post from "types/Post";

interface TagsProps {
  tag: string;
  posts: Post[];
}

const Tags = ({ tag, posts }: TagsProps) => {
  return (
    <>
      <PageSEO title="Tags" slug="/tags" />
      <h1 className="font-bold text-4xl my-10">
        Tags - {tag} ({posts.length})
      </h1>
      <ul>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            slug={post.slug}
            description={post.description}
            date={post.date}
          />
        ))}
      </ul>
    </>
  );
};

type Params = {
  params: {
    tag: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const { tag } = params;
  const taggedPosts: Post[] = [];
  getAllPosts().forEach((post) => {
    if (post.tags?.includes(tag)) {
      taggedPosts.push(post);
    }
  });

  if (taggedPosts.length === 0) return { notFound: true };

  return { props: { tag, posts: taggedPosts } };
}

export async function getStaticPaths() {
  const tags = new Set();
  getAllPosts().forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag));
  });

  return {
    paths: [...Array.from(tags)].map((tag) => `/tags/${tag}`),
    fallback: false,
  };
}

export default Tags;
