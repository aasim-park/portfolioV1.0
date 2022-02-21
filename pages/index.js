import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Home</title>
      </Head>
      {/* Main container */}
      <div className="flex flex-col">
        {/* Head */}
        <div className="flex w-3/11">
          {/* Left side Header */}
          <div className="flex flex-col w-3/5 m-2 p-28 sd:w-1/5">
            <span className="text-5xl font-bold">
              Hi, I am <a className="underline decoration-indigo-500">Aasim</a>,
            </span>
            <span className="py-3 text-4xl">Web Developer.</span>
            <p className="text-lg">wanna collobarate click on below button:</p>
            <Link href="/public/Resume.pdf" download="/public/Resume.pdf">
              <a>
                <button className="w-40 px-2 py-2 mt-3 font-bold text-white border border-red-700 rounded bg-rose-500 hover:bg-rose-600">
                  Download Resume
                </button>
              </a>
            </Link>
          </div>
          {/* Right side of Header */}
          <div className="flex flex-col items-start justify-center w-2/5 m-2">
            <div className="w-64 h-64 rounded-full object-cover bg-yellow-200 drop-shadow layout=fill"></div>
          </div>
        </div>
        {/* recent Posts */}
        {/* Wrapper container */}
        <div className="flex flex-col p-24 bg-blue-100">
          {/* Title */}
          <p className="py-4 text-xl">Recent posts</p>
          {/* Cards */}
          <div className="flex items-center justify-center gap-6 align-middle">
            {/* Card 1 */}
            <div className="bg-white rounded shadow">
              <div className="p-5 text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded shadow">
              <div className="p-5 text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
          </div>
        </div>
        {/* Featured works */}
        <div className="flex m-4 p-11 w-6/11">Featured Work</div>
        <div className=""></div>
      </div>
    </>
  );
}
