import Head from "next/head";
import { Ampligram } from "./ui-components";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Projects</title>
      </Head>
      <Ampligram />
      <div>
        <p>Here are some of my projects</p>
      </div>
    </>
  );
};

export default Projects;
