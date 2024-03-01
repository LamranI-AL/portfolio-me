import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className="flex justify-between p-3 bg-slate-950">
      <h1>@othmane lamrani alaoui Portfolio 2024</h1>
      <div className="flex gap-2">
        <a
          href="https://www.linkedin.com/in/othmane-lamrani-alaoui-59193b247"
          target="_blank"
        >
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/LamranI-AL" target="_blank">
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.instagram.com/othman__la?igsh=MXhsN3ZzZG9iNHF3ZQ=="
          target="_blank"
        >
          <FaInstagram size={25} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
