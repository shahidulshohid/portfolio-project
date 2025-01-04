import { useState } from "react";


const Navbar = () => {
  const [active, setActive] = useState("#home")
  const handleActive = (section) => {
    setActive(section)
  }
  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      <div className="navbar bg-purple-500 w-11/12 mx-auto">
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
              className="menu menu-sm dropdown-content bg-pink-400 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
             <li>
              <a onClick={()=> handleActive('#home')} className={active === "#home" ? "text-white font-bold text-xl" : "text-xl"} href="#home">Home</a>
            </li>
            <li>
              <a onClick={()=> handleActive('#portfolio')} className={active === "#portfolio" ? "text-white font-bold text-xl" : "text-xl"} href="#portfolio">Portfolio</a>
            </li>
            <li>
            <a onClick={()=> handleActive('#about')} className={active === "#about" ? "text-white font-bold text-xl" : "text-xl"} href="#about">About</a>
            </li>
            <li>
            <a onClick={()=> handleActive('#contact')} className={active === "#contact" ? "text-white font-bold text-xl" : "text-xl"} href="#contact">Contact</a>
            </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold text-black">Portfolio</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a onClick={()=> handleActive('#home')} className={active === "#home" ? "text-white font-bold text-xl" : "text-xl"} href="#home">Home</a>
            </li>
            <li>
              <a onClick={()=> handleActive('#portfolio')} className={active === "#portfolio" ? "text-white font-bold text-xl" : "text-xl"} href="#portfolio">Portfolio</a>
            </li>
            <li>
            <a onClick={()=> handleActive('#about')} className={active === "#about" ? "text-white font-bold text-xl" : "text-xl"} href="#about">About</a>
            </li>
            <li>
            <a onClick={()=> handleActive('#contact')} className={active === "#contact" ? "text-white font-bold text-xl" : "text-xl"} href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            <a href="/files/resume.pdf" download>
              <button className="btn bg-pink-500 text-white text-lg hover:text-black">
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
