import headerImg from "../../assets/headerImg.jpg";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import { NavLink } from "react-router-dom";
import { BsCloudDownload } from "react-icons/bs";
const Header = () => {
  return (
    <div className="md:flex justify-between md:gap-5 lg:gap-24 items-center pt-32">
      <div className="text-start space-y-4 mb-5 md:mb-0">
        <div className="font-bold text-lg">
          <small className="text-[#9CC842] bg-[#2c682c96] py-2 px-2 rounded-full border-2 border-[#417e384d]">
            {" "}
            <span
              className="bg-[#417E38] py-1 px-2 rounded-full text-white mr-2
          "
            >
              Welcome
            </span>{" "}
            to my portfolio website! &#x2794;{" "}
          </small>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Hi, I'm Shahidul Islam
        </h1>
        <h3 className="text-center text-2xl md:text-3xl font-semibold text-white">
          {" "}
          <span style={{ color: "#417E38", fontWeight: "bold" }}>
            <Typewriter
              words={[
                "Front-End Developer",
                "Mern Stack Developer",
                "JavaScript Developer",
                "Web Developer",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h3>
        <div className="max-w-2xl text-white text-lg">
          <p>A web developer is someone who turns ideas into real, interactive websites and applications. They design and build the online experiences we use every day. I have created several unique websites using modern technologies, always focusing on making them work well and easy to use.</p>
        </div>
        <div className="bg-[#417e381a] border-2 border-[#417e384d] hover:bg-[#417e383a] hover:border-[#417e384d] rounded-lg max-w-lg">
          <a
            href="/files/shahidul_resume_for_frontend-developer.pdf"
            className="flex justify-center items-center space-x-2 my-1"
            download
          >
            <button className="text-white">Download cv</button>
            <BsCloudDownload className="text-white" />
          </a>
        </div>
        <div className="flex justify-start items-center gap-3">
          {/*  */}
          <NavLink
            to="https://www.facebook.com/profile.php?id=100056264109156"
            target="_blank" className="flex justify-center items-center text-center space-x-1 bg-gray-700 px-2 py-1 rounded-sm"
          >
            <CiFacebook className="text-sm w-6 h-6 text-white" /> <small className="text-[#4da43f] hover:text-white text-sm"
            >Facebook</small>
          </NavLink>
          <NavLink to="https://www.whatsapp.com/" target="_blank" className="flex justify-center items-center text-center space-x-1 bg-gray-700 px-2 py-1 rounded-sm">
            <FaWhatsapp className="text-sm w-6 h-6 text-white" /> <small className="text-[#4da43f] hover:text-white text-sm"
            >Whatsapp</small>
          </NavLink>
          <NavLink to="https://www.linkedin.com/" target="_blank" className="flex justify-center items-center text-center space-x-1 bg-gray-700 px-2 py-1 rounded-sm">
            <CiLinkedin className="text-sm w-6 h-6 text-white"/> <small className="text-[#4da43f] hover:text-white text-sm"
            >Linkedin</small>
          </NavLink>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          className="rounded-xl h-[300px] w-[300px]"
          src={headerImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
