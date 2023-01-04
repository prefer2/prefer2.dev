import React from "react";

interface PostHeaderProps {
  title: string;
  date: string;
}

const PostHeader = ({ title, date }: PostHeaderProps) => {
  return (
    <>
      <h1 className="font-extrabold border-b mt-9 mb-2 pb-3">{title}</h1>
      <div className="font-light text-right text-gray-400 mb-4">{date}</div>
    </>
  );
};

export default PostHeader;
