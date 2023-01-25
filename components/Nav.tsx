import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link
        className="mr-5 font-bold hover:text-blue-300 transition duration-200"
        href={"/archives"}
      >
        archives
      </Link>
      <Link
        className="mr-5 font-bold hover:text-blue-300 transition duration-200"
        href={"/about"}
      >
        about
      </Link>
    </nav>
  );
};

export default Nav;
