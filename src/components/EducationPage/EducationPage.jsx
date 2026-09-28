import { useEffect, useState } from "react";
import "animate.css";
import { Fade } from "react-awesome-reveal";

const EducationPage = () => {
  const [education, setEducation] = useState([]);
  useEffect(() => {
    fetch("/education.json")
      .then((res) => res.json())
      .then((data) => setEducation(data))
      .catch((err) => console.error("Error fetching education:", err));
  }, []);

  return (
    <div id="education" className="pt-24">
      <div className="border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-zinc-900/30 backdrop-blur-sm px-6 pb-12 pt-8 rounded-2xl shadow-sm dark:shadow-none transition-colors duration-300">
        <div className="text-center mb-8">
          <h2 className="mb-3 text-4xl md:text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 dark:from-green-400 dark:to-green-700">
              Education
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education?.map((item, index) => (
            <Fade direction="up" key={index} triggerOnce>
              <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900/70 shadow-sm dark:shadow-none hover:border-emerald-500/40 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#417E38]"></span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.institution}
                  </h3>
                </div>
                <p className="text-base font-medium text-gray-600 dark:text-gray-300 ml-4.5">
                  <span className="text-[#2c682c] dark:text-[#9CC842] font-semibold">Degree:</span> {item.degree}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
