
import { Fade } from "react-awesome-reveal";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const MyPortfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((data) => setPortfolio(data.portfolio));
  }, []);
  // console.log(portfolio);
  return (
    <div className="mb-24" id="portfolio">
      <div>
        <h3 className="text-3xl  text-black font-bold text-center mb-6">Portfolio</h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {portfolio?.map((portfolio) => (
        <div className="border p-3 rounded-xl space-y-2">
          {" "}
          <img
            className="h-[300px] object-cover rounded-t-xl mb-4"
            src={portfolio.projectImage}
            alt=""
          />
          <p className="text-xl text-black font-bold">{portfolio.title}</p>
          <Link to={`details/${portfolio.id}`}><button className="btn bg-pink-500 text-lg text-white mt-3 hover:text-black">
            Details
          </button></Link>
          {" "}
        </div>
      ))}
      </div>
    </div>
  );
};

export default MyPortfolio;
