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
          <div className="flex flex-col m-2 p-28 w-3/5 sd:w-1/5">
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
        {/* Main container */}
        <div className="bg-blue-100 flex-col flex m-4 p-11">
          {/* Title */}
          <p className="text-xl">Recent posts</p>
          {/* Cards */}
          <div className="flex gap-6 align-middle justify-center items-center">
            {/* Card 1 */}
            <div className="bg-white shadow rounded">
              <div className="p-5 text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow rounded">
              <div className="p-5 text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
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
