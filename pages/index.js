import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero";
import Recents from "../components/Recent_post";
import Works from "../components/works";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Home</title>
      </Head>
      {/* Main container */}
      <div className="flex flex-col flex-wrap overflow-hidden">
        {/* Hero */}
        <Hero />
        {/* recent Posts */}
        <Recents />
        {/* Featured works */}
        <Works />
      </div>
    </>
  );
}
