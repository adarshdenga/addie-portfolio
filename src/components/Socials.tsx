import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Socials() {
  return (
    <>
      <div className="text-white text-5xl font-barlow font-semibold mb-2">
        ADARSH DENGA
      </div>
      <div className="flex flex-row text-gray text-2xl mb-8">
        <FaEnvelope className="mr-2" />
        <FaPhoneAlt className="mr-2" />
        <FaGithub className="mr-2" />
        <FaLinkedin />
      </div>
    </>
  );
}
