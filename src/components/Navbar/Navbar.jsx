import { useState } from "react";
import shahidulLogo from "../../assets/shahidul_logo.png";

const Navbar = () => {
  const [active, setActive] = useState("#home");
  const handleActive = (section) => {
    setActive(section);
  };
  return (
    <div className="fixed left-0 right-0 top-0 z-50 bg-[#000] border-b">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-blue-500 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {/* <li>
                <a
                  onClick={() => handleActive("#home")}
                  className={
                    active === "#home"
                      ? "text-green-500 font-bold text-xl"
                      : "text-xl"
                  }
                  href="/#home"
                >
                  Home
                </a>
              </li> */}
              <li>
                <a
                  onClick={() => handleActive("#about")}
                  className={
                    active === "#about"
                      ? "text-green-500 font-bold text-xl"
                      : "text-xl text-white hover:bg-gray-700"
                  }
                  href="/#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleActive("#skills")}
                  className={
                    active === "#skills"
                      ? "text-green-500 font-bold text-xl"
                      : "text-xl text-white hover:bg-gray-700"
                  }
                  href="/#skills"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleActive("#education")}
                  className={
                    active === "#education"
                      ? "text-green-500 font-bold text-xl"
                      : "text-xl text-white hover:bg-gray-700"
                  }
                  href="/#education"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleActive("#portfolio")}
                  className={
                    active === "#portfolio"
                      ? "text-green-500 font-bold text-xl"
                      : "text-xl text-white hover:bg-gray-700"
                  }
                  href="/#portfolio"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleActive("#contact")}
                  className={
                    active === "#contact"
                      ? "text-green-500 font-bold text-xl"
                      : "text-xl text-white hover:bg-gray-700"
                  }
                  href="/#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <a
            onClick={() => handleActive("#home")}
            href="/#home"
            className="btn btn-ghost text-2xl md:text-3xl font-bold text-black"
          >
            <img className="w-10 h-10 rounded-full" src={shahidulLogo} alt="" />
            <span className="hidden lg:flex text-white">Shahidul</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* <li>
              <a
                onClick={() => handleActive("#home")}
                className={
                  active === "#home"
                    ? "text-green font-bold text-xl"
                    : "text-xl"
                }
                href="/#home"
              >
                Home
              </a>
            </li> */}
            <li>
              <a
                onClick={() => handleActive("#about")}
                className={
                  active === "#about"
                    ? "text-green-500 font-bold text-xl"
                    : "text-xl text-white hover:bg-gray-700"
                }
                href="/#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => handleActive("#skills")}
                className={
                  active === "#skills"
                    ? "text-green-500 font-bold text-xl"
                    : "text-xl text-white hover:bg-gray-700"
                }
                href="/#skills"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                onClick={() => handleActive("#education")}
                className={
                  active === "#education"
                    ? "text-green-500 font-bold text-xl"
                    : "text-xl text-white hover:bg-gray-700"
                }
                href="/#education"
              >
                Education
              </a>
            </li>
            <li>
              <a
                onClick={() => handleActive("#portfolio")}
                className={
                  active === "#portfolio"
                    ? "text-green-500 font-bold text-xl"
                    : "text-xl text-white hover:bg-gray-700"
                }
                href="/#portfolio"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => handleActive("#contact")}
                className={
                  active === "#contact"
                    ? "text-green-500 border-b-2 border-green-500 font-bold text-lg"
                    : "text-lg text-white hover:bg-gray-700"
                }
                href="/#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            <a
              href="/files/shahidul_resume_for_frontend-developer.pdf"
              download
            >
              <button className="btn bg-blue-600 border-none text-green text-lg hover:text-black mr-3">
                Download cv
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
