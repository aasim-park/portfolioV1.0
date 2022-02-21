import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col border-y-4">
      {/* Icons */}
      <div className="flex justify-center pt-3 gap-7">
        <Link href="https://github.com/aasim-park?tab=repositories">
          <a>
            <AiFillGithub className="w-8 h-8" />
          </a>
        </Link>
        <Link href="https://www.instagram.com/aasim08/">
          <a>
            <AiFillInstagram className="w-8 h-8" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/aasim-shaikh-8b7a57176/">
          <a>
            <AiFillLinkedin className="w-8 h-8" />
          </a>
        </Link>
      </div>
      {/* Copyright */}
      <div className="flex justify-center p-1 m-1">
        <p>Copyright &#169; 2022 </p>
      </div>
    </footer>
  );
};

export default Footer;
