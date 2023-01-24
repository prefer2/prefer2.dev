import Link from "next/link";
import React from "react";

interface TagProps {
  tag: string;
}

const Tag = ({ tag }: TagProps) => {
  return (
    <Link href={`/tags/${tag}`}>
      <div className="px-2 py-0.5 w-fit rounded-md bg-blue-100 text-black text-xs leading-5 md:text-sm">{`${tag}`}</div>
    </Link>
  );
};

export default Tag;
