import headerImg from "../../assets/headerImg.jpg";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
const Header = () => {
  return (
    <div className="md:flex justify-between items-center mt-32">
      <div className="text-start space-y-2">
        <h1 className="text-4xl font-bold">Hi, I'm Shahidul Islam</h1>
        <h3 className="text-center text-3xl font-bold mb-8 mt-12 text-pink-500">
          {" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            <Typewriter
              words={["And I am frontend developer"]}
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
          <CiFacebook className="text-2xl text-white w-8 h-8 rounded-full" />
          <FaWhatsapp className="text-2xl text-white w-8 h-8 rounded-full" />
          <CiLinkedin className="text-2xl text-white w-8 h-8 rounded-full" />
          <FaInstagram className="text-2xl text-white w-8 h-8 rounded-full" />
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
        <img className="rounded-full" src={headerImg} alt="" />
      </div>
    </div>
  );
};

export default Header;
