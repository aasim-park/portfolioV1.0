import Link from "next/link";
import { GiTunisia } from "react-icons/gi";
import Head from "next/head";

const NavBar = () => {
  return (
    <>
      <nav className="flex overflow-hidden">
        {/* Logo */}
        <div className="hidden m-4 lg:w-1/5 lg:px-20 lg:flex lg:visible">
          <Link href="/">
            <a>
              <GiTunisia className="w-11 h-11" />
            </a>
          </Link>
        </div>
        {/* right side navigation bar */}
        <div className="flex items-center gap-10 px-4 m-4 lg:w-4/5 lg:pr-16 lg:justify-end">
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
    </>
  );
};

export default NavBar;
