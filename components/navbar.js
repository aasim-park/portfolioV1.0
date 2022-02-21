import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex flex-row">
      {/* Logo */}
      <div className="flex justify-center w-1/5 h-8 m-4">
        <a className="text-2xl">Logo</a>
      </div>
      {/* right side navigation bar */}
      <div className="flex justify-end w-4/5 gap-10 pr-8 m-4">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
