import { motion } from "framer-motion";

import PageSEO from "@components/PageSEO";
import PostPreview from "@components/PostPreview";

import { getAllPosts } from "api";
import Post from "types/Post";
import { showUp } from "constants/animate";
import generateRss from "utils/generateRss";
import Link from "next/link";

type HomeProps = {
  allPosts: Post[];
};

const Home = ({ allPosts }: HomeProps) => {
  if (!allPosts.length) return <div>no</div>;

  return (
    <>
      <PageSEO title="Home" slug="/" />
      <div className="py-3 px-2 my-3 border rounded-sm">
        여러가지 공부 기록들을 모아놓은 곳입니다. 새로 올라오는 글을 받아보고
        싶으시다면{" "}
        <a
          href="https://prefer2-dev.vercel.app/rss/feed.xml"
          className="underline"
        >
          RSS
        </a>
        를 구독해주세요.
      </div>
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
  await generateRss();

  return {
    props: { allPosts },
  };
};

export default Home;
