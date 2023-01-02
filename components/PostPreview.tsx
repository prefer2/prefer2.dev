import Link from "next/link";
import Post from "types/Post";

interface PostPreviewProps
  extends Pick<Post, "slug" | "title" | "date" | "description"> {}

function PostPreview({ slug, title, date, description }: PostPreviewProps) {
  console.log(date);
  return (
    <Link href={`/posts/${slug}`}>
      <h3 className="text-2xl mt-3 mb-1 hover:underline">{title}</h3>
      <p className="text-base text-gray-600">{date}</p>
      <p className="text-base text-gray-600">{description}</p>
    </Link>
  );
}

export default PostPreview;
