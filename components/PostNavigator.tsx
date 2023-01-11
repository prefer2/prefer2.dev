import Post from "types/Post";

type NavProps = Pick<Post, "title" | "slug">;

export interface PostNavigatorProps {
  prev?: NavProps;
  next?: NavProps;
}

const PostNavigator = ({ prev, next }: PostNavigatorProps) => {
  return (
    <ul className="flex justify-between my-7 text-xs text-blue-500">
      <li className="flex bg-blue-100 rounded w-fit">
        {prev && (
          <a href={prev?.slug} className="px-4 py-2">
            {`← ${prev.title}`}
          </a>
        )}
      </li>
      <li className="flex bg-blue-100 rounded ">
        {next && (
          <a href={next?.slug} className="px-4 py-2">
            {next && `${next.title} →`}
          </a>
        )}
      </li>
    </ul>
  );
};

export default PostNavigator;
