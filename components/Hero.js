const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap-reverse gap-10 p-2 m-4 lg:flex-nowrap">
        {/* Left side Header */}
        <div className="flex flex-col justify-center w-full gap-1 text-center lg:text-left lg:w-3/5 lg:translate-x-20 lg:gap-3">
          <span className="text-4xl font-bold lg:text-5xl">
            Hi, I am{" "}
            <a className="underline decoration-4 decoration-indigo-500">
              Aasim
            </a>
            ,
          </span>
          <span className="py-3 text-3xl lg:text-4xl">Web Developer.</span>
          <p className="text-lg">wanna collobarate click on below button:</p>
          <a href="/public/Resume.pdf" download="Resume.pdf">
            <a>
              <button className="w-40 px-2 py-2 mt-3 font-bold text-white border border-red-700 rounded bg-rose-500 hover:bg-rose-600">
                Download Resume
              </button>
            </a>
          </a>
        </div>
        {/* Right side of Header */}
        <div className="flex w-2/5 m-2 translate-x-20 lg:items-center lg:justify-center">
          <div className="w-32 h-32 lg:w-64 lg:h-64 rounded-full object-cover bg-yellow-200 drop-shadow layout=fill"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
