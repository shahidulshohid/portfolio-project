import { useState } from "react";
import shahidulLogo from "../../assets/shahidul_logo.png";
import { BsCloudDownload, BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [active, setActive] = useState("#home");
  const { theme, toggleTheme, isDark } = useTheme();

  const handleActive = (section) => {
    setActive(section);
  };

  const navLinks = [
    { name: "About", href: "/#about", id: "#about" },
    { name: "Skills", href: "/#skills", id: "#skills" },
    { name: "Education", href: "/#education", id: "#education" },
    { name: "Projects", href: "/#portfolio", id: "#portfolio" },
    { name: "Contact", href: "/#contact", id: "#contact" },
  ];

  return (
    <div className="fixed left-0 right-0 top-0 z-50 bg-white/80 dark:bg-black/85 backdrop-blur-md border-b border-gray-200/80 dark:border-gray-800/80 transition-colors duration-300">
      <div className="navbar w-11/12 max-w-7xl mx-auto px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-gray-800 dark:text-gray-200 p-1 mr-1"
              aria-label="Toggle navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              className="menu menu-sm dropdown-content bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl z-[1] mt-3 w-56 p-3 shadow-xl space-y-1 text-gray-800 dark:text-gray-100"
            >
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    onClick={() => handleActive(link.id)}
                    className={
                      active === link.id
                        ? "text-[#417E38] dark:text-[#9CC842] font-bold text-base bg-emerald-50 dark:bg-emerald-950/40 rounded-lg"
                        : "text-base text-gray-700 dark:text-gray-200 hover:text-[#417E38] dark:hover:text-[#9CC842] hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg"
                    }
                    href={link.href}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a
            onClick={() => handleActive("#home")}
            href="/#home"
            className="flex items-center gap-2.5 text-2xl md:text-3xl font-bold group"
          >
            <img
              className="w-10 h-10 rounded-full ring-2 ring-[#417E38]/50 group-hover:ring-[#417E38] transition-all duration-300"
              src={shahidulLogo}
              alt="Shahidul Islam Logo"
            />
            <span className="hidden sm:inline-block text-gray-900 dark:text-white group-hover:text-[#417E38] dark:group-hover:text-[#9CC842] transition-colors">
              Shahidul
            </span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  onClick={() => handleActive(link.id)}
                  className={
                    active === link.id
                      ? "text-[#417E38] dark:text-[#9CC842] border-b-2 border-[#417E38] dark:border-[#9CC842] font-bold text-base rounded-none px-3 py-1.5"
                      : "text-base text-gray-700 dark:text-gray-300 hover:text-[#417E38] dark:hover:text-[#9CC842] hover:bg-gray-100/70 dark:hover:bg-zinc-800/60 rounded-lg px-3 py-1.5 transition-colors"
                  }
                  href={link.href}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-2 sm:gap-3">
          {/* Download CV Button */}
          <div className="border border-[#417E38] bg-[#417e3812] hover:bg-[#417E38] text-[#2c682c] dark:text-[#9CC842] hover:text-white dark:hover:text-white px-3 py-1.5 rounded-xl transition-all duration-300 shadow-sm group">
            <a
              href="/files/cv-of shahidul islam.pdf"
              download
              className="flex justify-center items-center space-x-2"
              aria-label="Download Shahidul's CV"
            >
              <button className="font-semibold text-sm sm:text-base group-hover:text-white cursor-pointer">
                Download CV
              </button>
              <BsCloudDownload className="text-base group-hover:text-white" />
            </a>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
            className="flex items-center justify-center p-2.5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-100/90 dark:bg-zinc-900/90 hover:bg-gray-200 dark:hover:bg-zinc-800 text-gray-700 dark:text-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#417E38]/50 shadow-sm group"
          >
            {isDark ? (
              <BsSunFill className="w-5 h-5 text-amber-400 transform transition-transform duration-500 group-hover:rotate-90 group-hover:scale-110" />
            ) : (
              <BsMoonStarsFill className="w-5 h-5 text-emerald-700 transform transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
