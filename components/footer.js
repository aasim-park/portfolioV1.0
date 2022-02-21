import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col border-y-4">
      {/* Copyright */}
      <div className="flex justify-center p-2 m-2">
        <p>Copyright &#169; 2022 </p>
      </div>
      {/* Icons */}
      <div className="flex justify-center py-4 gap-7">
        <Link href="https://github.com/aasim-park?tab=repositories">
          <a>
            <AiFillGithub className="w-6 h-6" />
          </a>
        </Link>
        <Link href="https://www.instagram.com/aasim08/">
          <a>
            <AiFillInstagram className="w-6 h-6" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/aasim-shaikh-8b7a57176/">
          <a>
            <AiFillLinkedin className="w-6 h-6" />
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
