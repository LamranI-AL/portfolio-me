import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="flex max-w-5xl pt-4 justify-between px-6 items-center top-0 h-[80px] m-auto">
      <h1 className="font-bold text-xl">AB</h1>
      <div className="flex gap-2">
        <a
          href="https://ma.linkedin.com/in/ayoub-bensalah-56834b29b"
          target="_blank"
        >
          <FaLinkedin size={25} />
        </a>
        <a href="https://github.com/ayoubben18" target="_blank">
          <FaGithub size={25} />
        </a>
        <a href="https://leetcode.com/user0898tU/" target="_blank">
          <SiLeetcode size={25} />
        </a>
        <a href="https://www.instagram.com/_takamura._/" target="_blank">
          <FaInstagram size={25} />
        </a>
      </div>
    </div>
  );
};

export default Nav;
