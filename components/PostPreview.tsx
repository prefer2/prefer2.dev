import Link from "next/link";

import Tag from "@components/Tag";

import Post from "types/Post";
import { formatDate } from "utils";

interface PostPreviewProps
  extends Pick<Post, "slug" | "title" | "date" | "description" | "tags"> {}

function PostPreview({
  slug,
  title,
  date,
  description,
  tags,
}: PostPreviewProps) {
  return (
    <li className="p-3">
      <Link className="group" href={`/posts/${slug}`}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
          <h3 className="text-2xl font-bold mb-1 transition duration-200 group-hover:text-blue-300">
            {title}
          </h3>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {formatDate(date)}
          </div>
        </div>

        <div className="text-base text-gray-600 dark:text-gray-400">
          {description}
        </div>
      </Link>
      <div className="flex gap-2 mt-2">
        {tags && tags.map((tag) => <Tag key={tag} tag={tag} />)}
      </div>
    </li>
  );
}

export default PostPreview;
