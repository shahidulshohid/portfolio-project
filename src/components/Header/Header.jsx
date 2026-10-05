import { useState } from "react";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Typewriter } from "react-simple-typewriter";
import { NavLink } from "react-router-dom";
// import { BsCloudDownload } from "react-icons/bs";
import ImageComponent from "./ImageComponent";
import { BsEye } from "react-icons/bs";
import CvModal from "./CvModal";

const Header = () => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="lg:flex justify-between md:gap-5 lg:gap-24 items-center pt-32">
      <div className="text-start space-y-4 mb-5 md:mb-0 flex-1">
        <div className="font-bold text-lg">
          <small className="text-[#2c682c] dark:text-[#9CC842] bg-[#417e3814] dark:bg-[#2c682c96] py-2 px-3 rounded-full border border-[#417e384d] inline-flex items-center">
            <span className="bg-[#417E38] py-1 px-2.5 rounded-full text-white mr-2 text-xs uppercase tracking-wider font-semibold">
              Welcome
            </span>
            to my portfolio website! &#x2794;
          </small>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          Hi there, I'm Shahidul Islam
        </h1>
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
          <span style={{ color: "#417E38", fontWeight: "bold" }}>
            <Typewriter
              words={[
                "Front-End Developer",
                "MERN-Stack Developer",
                "JavaScript Developer",
                "Web Developer",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h3>
        <div className="max-w-2xl text-gray-600 dark:text-gray-300 text-lg text-justify leading-relaxed">
          <p>
            A web developer is someone who turns ideas into real, interactive websites and applications. They design and build the online experiences we use every day. I have created several unique websites using modern technologies, always focusing on making them work well and easy to use.
          </p>
        </div>
        
        {/* View CV Button */}
        <div className="bg-[#417e3814] dark:bg-[#417e381a] border border-[#417e384d] hover:bg-[#417e3826] dark:hover:bg-[#417e383a] rounded-xl max-w-xs transition-all duration-300 inline-block">
          <button
            type="button"
            onClick={() => setIsCvModalOpen(true)}
            className="w-full flex justify-center items-center space-x-2 py-2.5 px-5 cursor-pointer group"
            aria-label="View CV Preview"
          >
            <span className="text-[#2c682c] dark:text-[#9CC842] font-bold">
              View CV
            </span>
            <BsEye className="text-lg text-[#2c682c] dark:text-[#9CC842] group-hover:scale-110 transition-transform" />
          </button>
        </div>

        <div className="flex justify-start items-center gap-3 pt-2">
          <NavLink
            to="https://www.facebook.com/profile.php?id=100056264109156"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center text-center space-x-1.5 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-zinc-700 transition-all group"
          >
            <CiFacebook className="text-lg w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:text-[#417E38]" />
            <span className="text-[#2c682c] dark:text-[#4da43f] font-semibold text-sm group-hover:text-[#417E38]">
              Facebook
            </span>
          </NavLink>
          <NavLink
            to="https://wa.me/8801738283277"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center text-center space-x-1.5 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-zinc-700 transition-all group"
          >
            <FaWhatsapp className="text-lg w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:text-[#417E38]" />
            <span className="text-[#2c682c] dark:text-[#4da43f] font-semibold text-sm group-hover:text-[#417E38]">
              Whatsapp
            </span>
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/mdshahidulislam2701"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center text-center space-x-1.5 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-zinc-700 transition-all group"
          >
            <CiLinkedin className="text-lg w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:text-[#417E38]" />
            <span className="text-[#2c682c] dark:text-[#4da43f] font-semibold text-sm group-hover:text-[#417E38]">
              Linkedin
            </span>
          </NavLink>
        </div>
      </div>
      <div className="flex justify-center items-center mt-16 lg:mt-0 lg:mr-10">
        <ImageComponent />
      </div>

      {/* CV Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
};

export default Header;
