import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";

const DetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/portfolio.json`)
      .then((res) => res.json())
      .then((data) => {
        const myDetails = data.portfolio.find((item) => item.id == id);
        setDetails(myDetails || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching project details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center pt-28">
        <span className="loading loading-spinner loading-lg text-[#417E38]"></span>
      </div>
    );
  }

  if (!details) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center pt-28 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Project Not Found
        </h2>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#417E38] text-white font-medium"
        >
          <FiArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto">
      <div className="mb-6">
        <Link
          to="/#portfolio"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#2c682c] dark:text-[#9CC842] hover:underline"
        >
          <FiArrowLeft /> Back to Portfolio
        </Link>
      </div>

      <div className="border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-sm dark:shadow-none space-y-6 transition-colors duration-300">
        <div className="overflow-hidden rounded-xl bg-gray-100 dark:bg-zinc-800">
          <img
            className="h-[320px] sm:h-[400px] w-full object-cover rounded-xl"
            src={details.projectImage}
            alt={details.title}
          />
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            {details.title}
          </h1>

          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {details.technologies &&
                details.technologies.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-zinc-700 rounded-lg text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
            </div>
          </div>

          <div className="space-y-2 mb-8">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Project Description
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              {details.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            {details.githubLink && (
              <NavLink
                to={details.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial"
              >
                <button className="w-full flex items-center justify-center gap-2 py-2.5 px-6 rounded-xl border border-gray-300 dark:border-zinc-700 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer">
                  <FiGithub className="w-5 h-5" />
                  GitHub Repository
                </button>
              </NavLink>
            )}
            {details.liveLink && (
              <NavLink
                to={details.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial"
              >
                <button className="w-full flex items-center justify-center gap-2 py-2.5 px-6 rounded-xl bg-[#417E38] hover:bg-[#34682c] text-white font-semibold transition-colors cursor-pointer shadow-sm">
                  <FiExternalLink className="w-5 h-5" />
                  Live Demo
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
