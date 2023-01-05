import React from "react";

interface TagProps {
  tag: string;
}

const Tag = ({ tag }: TagProps) => {
  return (
    <div className="py-0.5 px-1 w-fit rounded-md bg-blue-100 text-black">{`${tag}`}</div>
  );
};

export default Tag;
