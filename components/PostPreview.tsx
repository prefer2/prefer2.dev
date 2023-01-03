import Link from "next/link";
import Post from "types/Post";

interface PostPreviewProps
  extends Pick<Post, "slug" | "title" | "date" | "description"> {}

function PostPreview({ slug, title, date, description }: PostPreviewProps) {
  return (
    <Link href={`/posts/${slug}`}>
      <h3 className="text-2xl font-bold mt-3 mb-1 text-green-600">{title}</h3>
      <p className="text-base text-gray-600">{date}</p>
      <p className="text-base text-gray-600">{description}</p>
    </Link>
  );
}

export default PostPreview;
