import { useEffect, useState } from "react";
import "animate.css";
import { Fade } from "react-awesome-reveal";

const EducationPage = () => {
  const [education, setEducation] = useState([]);
  useEffect(() => {
    fetch("/education.json")
      .then((res) => res.json())
      .then((data) => setEducation(data));
  }, []);
  return (
    <div id="education" className="pt-24">
      {/* education section */}
      <div className="border px-6 pb-12 pt-6 rounded-xl">
        <h3 className="text-3xl md:text-4xl text-white font-bold text-center mt-5 mb-6 animate__animated animate__bounce animate__zoomIn animate__slower">
          Education
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-6 text-center">
          {education?.map((item) => (
            <Fade direction="up">
              <div className="border-2  bg-blue-500 p-6 rounded-lg border-none">
                <h3 className="text-xl font-semibold">
                  Institution : {item.institution}
                </h3>
                <p className="text-lg font-semibold">Degree: {item.degree}</p>
                <p className="text-lg font-semibold">Year: {item.year}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
