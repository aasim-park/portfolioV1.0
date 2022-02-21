import Link from "next/link";
import { GiTunisia } from "react-icons/gi";

const NavBar = () => {
  return (
    <nav className="flex flex-row">
      {/* Logo */}
      <div className="flex w-1/5 h-8 px-20 m-4">
        <Link href="/">
          <a>
            <GiTunisia className="w-11 h-11" />
          </a>
        </Link>
      </div>
      {/* right side navigation bar */}
      <div className="flex justify-end w-4/5 gap-10 pr-16 m-4">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
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
