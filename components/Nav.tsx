import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link className="mr-5" href={"/"}>
        home
      </Link>
      <Link className="mr-5" href={"/about"}>
        about
      </Link>
    </nav>
  );
};

export default Nav;
