import Link from "next/link";

import PageSEO from "@components/PageSEO";
import Tag from "@components/Tag";

import { getAllPosts } from "api";
import Post from "types/Post";

type postSortedByYear = { [key: number]: Post[] };

interface ArchivesProps {
  tags: string[];
  yearSortedPosts: postSortedByYear;
}

const Archives = ({ tags, yearSortedPosts }: ArchivesProps) => {
  if (!tags.length) return <div>no</div>;

  return (
    <>
      <PageSEO title="Archives" slug="archives" />
      <h1 className="font-bold text-5xl mt-10">Archives</h1>
      <div className="mt-3">모든 기록들 모아보기</div>
      <div>
        <h2 className="font-bold text-2xl mt-10 md:text-3xl">{`Tags (${tags.length})`}</h2>
        <ul className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </ul>
      </div>
      <hr className="border-gray-200 my-8" />
      <div>
        <h2 className="font-bold text-2xl md:text-3xl">Posts</h2>
        {Object.keys(yearSortedPosts)
          .map((key) => +key)
          .sort((a, b) => b - a)
          .map((year) => (
            <div key={year}>
              <h3 className="mt-3 font-bold text-lg">{`${year} (${yearSortedPosts[year].length})`}</h3>
              <ul>
                {yearSortedPosts[year].map((post) => (
                  <li key={post.slug} className="my-1">
                    <Link href={`posts/${post.slug}`}>{post.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts();
  const tags = getAllTags(allPosts);
  const yearSortedPosts = sortPostsByYear(allPosts);

  return {
    props: { tags, yearSortedPosts },
  };
};

const getAllTags = (posts: Post[]) => {
  const tag = new Set();
  posts.forEach((post) => {
    post.tags?.forEach((t) => tag.add(t));
  });

  return [...Array.from(tag)];
};

const sortPostsByYear = (posts: Post[]) => {
  const result: postSortedByYear = {};

  posts.forEach((post) => {
    const year = new Date(post.date).getFullYear();
    if (!result[year]) result[year] = [];
    result[year].push(post);
  });

  return result;
};

export default Archives;
