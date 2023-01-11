import React from "react";

interface TagProps {
  tag: string;
}

const Tag = ({ tag }: TagProps) => {
  return (
    <div className="px-2 w-fit rounded-md bg-blue-100 text-black text-xs leading-5">{`${tag}`}</div>
  );
};

export default Tag;
