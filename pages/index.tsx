import { motion } from "framer-motion";

import PageSEO from "@components/PageSEO";
import PostPreview from "@components/PostPreview";

import { getAllPosts } from "api";
import Post from "types/Post";
import { showUp } from "constants/animate";

type HomeProps = {
  allPosts: Post[];
};

const Home = ({ allPosts }: HomeProps) => {
  if (!allPosts.length) return <div>no</div>;

  return (
    <>
      <PageSEO title="Home" slug="/" />
      <ul className="flex flex-col gap-3">
        {allPosts.map((post) => (
          <motion.div
            key={post.slug}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.6, once: true }}
            variants={showUp}
          >
            <PostPreview
              slug={post.slug}
              title={post.title}
              date={post.date}
              description={post.description}
              tags={post.tags}
            />
          </motion.div>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
};

export default Home;
