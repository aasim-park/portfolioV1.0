import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Contact</title>
      </Head>
      <div className="flex flex-col gap-3 ml-8 mr-3">
        <p className="font-bold">Contacts</p>
        <p>
          Hello this is Aasim.{" "}
          <a className="italic underline decoration-2 decoration-indigo-500">
            {" "}
            Hope you are having a wonderful day{" "}
          </a>
          check below link so we can collaborate.
        </p>
        <div>
          <p>Mobile number:+91-9920816963 </p>
          <p>Email Id: asimshaikh1993@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
