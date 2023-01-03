import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link className="mr-5 font-bold text-white" href={"/"}>
        home
      </Link>
      <Link className="mr-5 font-bold text-white" href={"/about"}>
        about
      </Link>
    </nav>
  );
};

export default Nav;
