import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Socials() {
  return (
    <>
      <div className="text-white text-2xl md:text-5xl lg:text-5xl font-barlow font-semibold text-center md:text-left lg:text-left mb-2">
        ?????? ?????
      </div>
      <div className="flex flex-row w-full text-gray text-xl md:text-2xl lg:text-2xl mb-2 justify-center md:justify-normal lg:justify-normal gap-2">
        <a href="mailto:adarshdenga@gmail.com">
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/adarshdenga"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/adarsh-denga/" target="_blank">
          <FaLinkedin />
        </a>
      </div>
    </>
  );
}
