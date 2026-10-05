import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiExternalLink, FiInfo } from "react-icons/fi";

const MyPortfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((data) => setPortfolio(data.portfolio))
      .catch((err) => console.error("Error fetching portfolio:", err));
  }, []);

  return (
    <div className="pt-24 -mb-4" id="portfolio">
      <div className="text-center mb-10">
        <h2 className="mb-3 text-4xl md:text-5xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 dark:from-green-400 dark:to-green-700">
            Portfolio
          </span>
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400">
          A showcase of recent projects I've built with modern web technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolio?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm dark:shadow-none hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 group"
          >
            <div>
              <div className="relative overflow-hidden rounded-xl mb-4 bg-gray-100 dark:bg-zinc-800">
                <img
                  className="h-[220px] w-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  src={item.projectImage}
                  alt={item.title}
                />
                {item.status && (
                  <span
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold shadow-md backdrop-blur-md ${
                      item.status.toLowerCase() === "running"
                        ? "bg-amber-500/90 text-white"
                        : "bg-emerald-600/90 text-white"
                    }`}
                  >
                    {item.status}
                  </span>
                )}
              </div>
              <h3 className="text-2xl text-gray-900 dark:text-white font-bold mb-2">
                {item.title}
              </h3>
              <div className="mb-4">
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-2">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.technologies &&
                    item.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 bg-gray-100 dark:bg-zinc-800/90 text-gray-700 dark:text-gray-200 border border-gray-200/80 dark:border-zinc-700/80 rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800/80 gap-3">
              <Link to={`/details/${item.id}`} className="flex-1">
                <button className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-transparent text-gray-800 dark:text-gray-200 font-medium text-sm hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
                  <FiInfo className="w-4 h-4" />
                  Details
                </button>
              </Link>
              <NavLink
                to={item.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <button className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#417E38] hover:bg-[#34682c] text-white font-medium text-sm transition-colors cursor-pointer shadow-sm">
                  <FiExternalLink className="w-4 h-4" />
                  Live Preview
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPortfolio;
