import headerImg from "../../assets/headerImg.jpg";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="md:flex justify-center md:gap-5 lg:gap-24 items-center pt-32">
      <div className="text-start space-y-2 mb-5 md:mb-0">
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
        <h1 className="text-3xl md:text-4xl font-bold text-white pt-2">
          Hi, I'm Shahidul Islam
        </h1>
        <h3 className="text-center text-2xl md:text-3xl font-semibold mb-8 mt-12 text-white">
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
        <div className="flex justify-start items-center gap-3">
          {/*  */}
          <NavLink
            to="https://www.facebook.com/profile.php?id=100056264109156"
            target="_blank"
          >
            <CiFacebook className="text-2xl text-white w-8 h-8 rounded-full" />
          </NavLink>
          <NavLink to="https://www.whatsapp.com/" target="_blank">
            <FaWhatsapp className="text-2xl text-white w-8 h-8 rounded-full" />
          </NavLink>
          <NavLink to="https://www.linkedin.com/" target="_blank">
            <CiLinkedin className="text-2xl text-white w-8 h-8 rounded-full" />
          </NavLink>
          <NavLink to="https://www.instagram.com/" target="_blank">
            <FaInstagram className="text-2xl text-white w-8 h-8 rounded-full" />
          </NavLink>
        </div>
        <div className="bg-[#417e381a] border-2 border-[#417e384d] hover:bg-[#417e383a] hover:border-[#417e384d] rounded-lg text-center">
          <a href="/files/shahidul_resume_for_frontend-developer.pdf" download>
            <button className="text-white">
              Download cv
            </button>
          </a>
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
