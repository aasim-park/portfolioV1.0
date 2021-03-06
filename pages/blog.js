import Head from "next/head";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Blog</title>
      </Head>
      {/* Wrapper container */}
      <div className="flex flex-col gap-10 px-10 mt-14 lg:py-10 lg:m-20">
        {/* Title-Blog */}
        <div>
          <p className="text-5xl font-bold lg:text-7xl">Blog</p>
        </div>
        {/* Lists */}
        <div className="flex flex-col gap-24">
          {/* List title */}
          <div className="flex flex-col gap-2">
            <div>
              <p className="text-2xl">UI Interactions of the week</p>
            </div>
            {/* Date | tags */}
            <div className="flex flex-row gap-3">
              <div>
                <p>12 Feb 2019</p>
              </div>
              <div>
                <p>Express, Handlebars</p>
              </div>
            </div>
            {/* Discrption */}
            <div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <p className="text-2xl">UI Interactions of the week</p>
            </div>
            {/* Date | tags */}
            <div className="flex flex-row gap-3">
              <div>
                <p>12 Feb 2019</p>
              </div>
              <div>
                <p>Express, Handlebars</p>
              </div>
            </div>
            {/* Discrption */}
            <div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>{" "}
          <div className="flex flex-col gap-2">
            <div>
              <p className="text-2xl">UI Interactions of the week</p>
            </div>
            {/* Date | tags */}
            <div className="flex flex-row gap-3">
              <div>
                <p>12 Feb 2019</p>
              </div>
              <div>
                <p>Express, Handlebars</p>
              </div>
            </div>
            {/* Discrption */}
            <div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
