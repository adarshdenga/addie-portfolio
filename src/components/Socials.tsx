import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Socials() {
  return (
    <>
      <div className="text-white text-2xl lg:text-5xl font-barlow font-semibold">
        ADARSH DENGA
      </div>
      <div className="flex flex-row text-gray text-2xl mb-2">
        <a href="mailto:adarshdenga@gmail.com" className="mr-2">
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/adarshdenga"
          target="_blank"
          className="mr-2"
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
