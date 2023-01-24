import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link className="mr-5 font-bold" href={"/archives"}>
        archives
      </Link>
      <Link className="mr-5 font-bold" href={"/about"}>
        about
      </Link>
    </nav>
  );
};

export default Nav;
