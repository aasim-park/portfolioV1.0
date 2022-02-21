import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Home</title>
      </Head>
      {/* Mian container */}
      <div className="flex flex-col">
        {/* Header */}
        <div className="flex w-3/11">
          {/* Left side Header */}
          <div className="flex flex-col m-2 p-28 w-3/5">
            <span className="text-5xl">
              Hi, I am <a className="underline decoration-indigo-500">Aasim</a>,
            </span>
            <span className="text-4xl py-3">Web Developer.</span>
            <p className="text-lg">wanna collobarate click on below button:</p>
            <button className="bg-rose-500 mt-3 hover:bg-rose-300 text-white font-bold py-2 px-4 border w-32 border-blue-700 rounded">
              Button
            </button>
          </div>
          {/* Right side of Header */}
          <div className="flex flex-col m-2 w-2/5 items-start justify-center">
            <div className="w-64 h-64 rounded-full object-cover bg-yellow-200 drop-shadow layout=fill"></div>
          </div>
        </div>
        {/* recent Posts */}
        <div className="bg-slate-300 flex m-4 p-11 w-2/11">recent posts</div>
        {/* Featured works */}
        <div className="flex m-4 p-11 w-6/11">Featured Work</div>
      </div>
    </>
  );
}
