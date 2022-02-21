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
          <div className="flex flex-col w-3/5 m-2 p-28 sd:w-1/5">
            <span className="text-5xl">
              Hi, I am <a className="underline decoration-indigo-500">Aasim</a>,
            </span>
            <span className="py-3 text-4xl">Web Developer.</span>
            <p className="text-lg">wanna collobarate click on below button:</p>
            <button className="w-32 px-4 py-2 mt-3 font-bold text-white border border-blue-700 rounded bg-rose-500 hover:bg-rose-300">
              Button
            </button>
          </div>
          {/* Right side of Header */}
          <div className="flex flex-col items-start justify-center w-2/5 m-2">
            <div className="w-64 h-64 rounded-full object-cover bg-yellow-200 drop-shadow layout=fill"></div>
          </div>
        </div>
        {/* recent Posts */}
        {/* Main container */}
        <div className="flex flex-col m-4 bg-blue-100 p-11">
          {/* Title */}
          <p className="text-xl">Recent posts</p>
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
      </div>
    </>
  );
}
