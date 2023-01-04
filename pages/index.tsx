import PostPreview from "@components/PostPreview";

import { getAllPosts } from "api";
import Post from "types/Post";

type HomeProps = {
  allPosts: Post[];
};

const Home = ({ allPosts }: HomeProps) => {
  if (!allPosts.length) return <div>no</div>;

  return (
    <ul className="flex flex-col gap-3">
      {allPosts.map((post) => (
        <PostPreview
          key={post.slug}
          slug={post.slug}
          title={post.title}
          date={post.date}
          description={post.description}
        />
      ))}
    </ul>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
};

export default Home;
