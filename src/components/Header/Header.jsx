import headerImg from "../../assets/headerImg.jpg";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="md:flex justify-center md:gap-5 lg:gap-24 items-center mt-16 py-12 md:py-24">
      <div className="text-start space-y-2 mb-5 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Hi, I'm Shahidul Islam</h1>
        <h3 className="text-center text-2xl md:text-3xl font-semibold mb-8 mt-12">
          {" "}
          <span style={{ color: "black", fontWeight: "bold" }}>
            <Typewriter
              words={["I am frontend developer"]}
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
          <NavLink to='https://www.facebook.com/profile.php?id=100056264109156' target="_blank"><CiFacebook className="text-2xl text-white w-8 h-8 rounded-full" /></NavLink>
          <NavLink to="https://www.whatsapp.com/" target="_blank"><FaWhatsapp className="text-2xl text-white w-8 h-8 rounded-full" /></NavLink>
          <NavLink to="https://www.linkedin.com/" target="_blank"><CiLinkedin className="text-2xl text-white w-8 h-8 rounded-full" /></NavLink>
          <NavLink to="https://www.instagram.com/" target="_blank"><FaInstagram className="text-2xl text-white w-8 h-8 rounded-full" /></NavLink>
        </div>
        <div>
          <a href="/files/resume.pdf" download>
            <button className="btn bg-pink-500 text-white text-lg hover:text-black mt-2">
              Download cv
            </button>
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img className="rounded-xl h-[300px] w-[300px]" src={headerImg} alt="" />
      </div>
    </div>
  );
};

export default Header;
