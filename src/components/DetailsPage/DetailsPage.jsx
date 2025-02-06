import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";

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
    <div className="my-28 lg:w-8/12 mx-auto">
      <h3 className="text-3xl  text-white font-bold text-center mb-6">
        Details
      </h3>
      <div className="border p-3 rounded-xl space-y-2">
        {" "}
        <img
          className="h-[300px] w-full object-cover rounded-t-xl mb-5"
          src={details.projectImage}
          alt=""
        />
        <p className="text-2xl text-white font-bold">
          <span className="text-2xl text-black">Title</span> : {details.title}
        </p>
        <p className="text-xl text-black font-bold">
          <span className="text-xl text-black">Technologies</span> :{" "}
          <div className="flex flex-wrap gap-2 mt-2">
            {details.technologies &&
              details.technologies.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 text-black rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
          </div>
        </p>
        <p className="text-lg text-white">
          <span className="text-xl text-black">Description</span> :{" "}
          {details.description}
        </p>
        <div className="flex justify-between">
          <NavLink to={details.githubLink} target="_blank">
            <button className="btn bg-blue-600 border-none text-lg text-white mt-3 hover:text-black">
              GitHub Link
            </button>
          </NavLink>
          <NavLink to={details.liveLink} target="_blank">
            <button className="btn bg-blue-600 border-none text-lg text-white mt-3 hover:text-black">
              Live Link
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
