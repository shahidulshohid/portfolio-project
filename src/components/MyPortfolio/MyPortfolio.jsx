
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


const MyPortfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((data) => setPortfolio(data.portfolio));
  }, []);
  // console.log(portfolio);
  return (
    <div className="pt-24 -mb-4" id="portfolio">
      <div>
        <h3 className="text-3xl  text-white font-bold text-center mb-6">Portfolio</h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {portfolio?.map((portfolio) => (
        <div className="border p-3 rounded-xl space-y-2">
          {" "}
          <img
            className="h-[300px] w-full object-cover rounded-t-xl mb-4"
            src={portfolio.projectImage}
            alt=""
          />
          <p className="text-2xl text-white font-bold">{portfolio.title}</p>
          <p className="text-xl text-black font-bold"><span className="text-xl text-white">Technologies</span> :  <div className="flex flex-wrap gap-2 mt-2">
        {portfolio.technologies && portfolio.technologies.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-200 text-black rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div></p>
          <div className="flex justify-between">
          <Link to={`details/${portfolio.id}`}><button className="btn bg-blue-600 border-none text-lg text-white mt-3 hover:text-black">
            Details
          </button>
          </Link>
          <NavLink to={portfolio.liveLink} target="_blank"><button className="btn bg-blue-600 border-none text-lg text-white mt-3 hover:text-black">Live Link</button></NavLink>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default MyPortfolio;
