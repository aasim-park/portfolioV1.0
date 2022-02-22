import Link from "next/link";
import { GiTunisia } from "react-icons/gi";
import Head from "next/head";

const NavBar = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <nav className="flex flex-row">
        {/* Logo */}
        <div className="flex invisible m-4 lg:w-1/5 lg:px-20 lg:visible">
          <Link href="/">
            <a>
              <GiTunisia className="w-11 h-11" />
            </a>
          </Link>
        </div>
        {/* right side navigation bar */}
        <div className="flex items-center w-full gap-10 m-2 lg:m-4 lg:w-4/5 lg:pr-16 lg:justify-end">
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
