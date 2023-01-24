import Link from "next/link";
import Post from "types/Post";

interface PostPreviewProps
  extends Pick<Post, "slug" | "title" | "date" | "description"> {}

function PostPreview({ slug, title, date, description }: PostPreviewProps) {
  return (
    <li className="p-3">
      <Link className="group" href={`/posts/${slug}`}>
        <h3 className="text-2xl font-bold mb-1 transition duration-200 group-hover:text-blue-300">
          {title}
        </h3>
        <p className="text-base text-gray-600 dark:text-gray-400">{date}</p>
        <p className="text-base text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </Link>
    </li>
  );
}

export default PostPreview;
