import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="flex max-w-5xl pt-4 justify-between px-6 items-center top-0 h-[80px] m-auto">
      <Image
        src={"/me2.jpeg"}
        className="rounded-3xl"
        width={40}
        height={40}
        alt="ME"
      />
      <div className="flex gap-2">
        <a
          href="https://www.linkedin.com/in/othmane-lamrani-alaoui-59193b247"
          target="_blank"
        >
          <FaLinkedin size={25} />
        </a>
        <a href="https://github.com/LamranI-AL" target="_blank">
          <FaGithub size={25} />
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

export default Nav;
