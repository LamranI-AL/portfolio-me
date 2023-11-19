import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className="flex justify-between p-3 bg-slate-950">
      <h1>@AyoubBensalah Portfolio 2023</h1>
      <div className="flex gap-2">
        <a
          href="https://ma.linkedin.com/in/ayoub-bensalah-56834b29b"
          target="_blank"
        >
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/ayoubben18" target="_blank">
          <FaGithub size={20} />
        </a>
        <a href="https://leetcode.com/user0898tU/" target="_blank">
          <SiLeetcode size={20} />
        </a>
        <a href="https://www.instagram.com/_takamura._/" target="_blank">
          <FaInstagram size={25} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
