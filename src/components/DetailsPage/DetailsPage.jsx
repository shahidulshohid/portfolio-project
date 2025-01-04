import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch(`/portfolio.json`)
      .then((res) => res.json())
      .then((data) => {
        const myDetails = data.portfolio.find((item) => item.id == id);
        setDetails(myDetails);
      });
  }, []);

  console.log(details);

  return (
    <div className="my-24 w-6/12 mx-auto">
        <h3 className="text-3xl  text-white font-bold text-center mb-6">Details</h3>
      <div className="border p-3 rounded-xl space-y-2">
        {" "}
        <img
          className="h-[300px] object-cover rounded-t-xl mb-5"
          src={details.projectImage}
          alt=""
        />
        <p className="text-2xl text-gray-300 font-bold"><span className="text-2xl text-black">Title</span> : {details.title}</p>
        <p className="text-lg text-black font-bold"><span className="text-xl text-black">Live Link</span> : <NavLink className="text-lg text-gray-300" to={details.liveLink} target="_blank">{details.liveLink}</NavLink></p>
        <p className="text-xl text-black font-bold"><span className="text-xl text-black">GitHub Link</span> : <NavLink className="text-lg text-gray-300" to={details.githubLink} target="_blank">{details.githubLink}</NavLink></p>
        <p className="text-xl text-black font-bold"><span className="text-xl text-black">Technologies</span> :  <div className="flex flex-wrap gap-2 mt-2">
        {details.technologies &&details.technologies.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-200 text-black rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div></p>
      <p className="text-lg text-gray-300">{details.description}</p>
      </div>
    </div>
  );
};

export default DetailsPage;
