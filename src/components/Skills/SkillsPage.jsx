import html from "../../assets/logo/html.png";
import css from "../../assets/logo/css.png";
import javascript from "../../assets/logo/javascript.png";
import mongodb from "../../assets/logo/mongodb.png";
import express from "../../assets/logo/express.jpg";
import react from "../../assets/logo/react.png";
import tailwind from "../../assets/logo/tailwind.png";
import node from "../../assets/logo/nodejs.jpg";
import firebase from "../../assets/logo/firebase.jpg";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

const SkillsPage = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="pt-24" id="skills">
      <div>
        <h3 className="text-white font-bold text-3xl border-t pt-16 mb-16 mt-10">
          My Skills
        </h3>
      </div>

      <div className="text-center flex justify-center items-center gap-5 flex-wrap">
        {
            categories.map((item) => <button key={item.id} className="text-white bg-[#417e383a] px-5 py-1 border-2 border-[#417e384d] rounded-lg">{item.category}</button>)
        }
      </div>
      <Marquee>
          <div className='flex flex-wrap justify-center items-center gap-12'>
            <div>
                <img className='w-[100px] h-[100px] bg-white' src={html} alt="" />
                <h3 className="text-center mt-1 text-white font-bold">HTML</h3>
            </div>
            <div>
                <img className='w-[100px] h-[100px] bg-white' src={css} alt="" />
                <h3 className="text-center mt-1 text-white font-bold">CSS</h3>
            </div>
            <div>
                <img className='w-[100px] h-[100px] bg-white' src={javascript} alt="" />
                <h3 className="text-center mt-1 text-white font-bold">JAVASCRIPT</h3>
            </div>
            <div>
                <img className='w-[100px] h-[100px] bg-white' src={mongodb} alt="" />
                <h3 className="text-center mt-1 text-white font-bold">MONGODB</h3>
            </div>
            <div>
                <img className='w-[100px] h-[100px] bg-white' src={express} alt="" />
                <h3 className="text-center mt-1 text-white font-bold">EXPRESS</h3>
            </div>
            <div>
                <img className='w-[100px] h-[100px] bg-white' src={react} alt="" />
                <h3 className="text-center mt-1 text-white font-bold">REACT</h3>
            </div>
            <div>
                <img className='w-[100px] h-[100px] bg-white' src={tailwind} alt="" />
                <h3 className="text-center mt-1 text-white font-bold">TAILWIND</h3>
            </div>
            <div>
                <img className='w-[100px] h-[100px] bg-white' src={node} alt="" />
                <h3 className="text-center mt-1 text-white font-bold">NODE</h3>
            </div>
            <div>
                <img className='w-[100px] h-[100px] bg-white' src={firebase} alt="" />
                <h3 className="text-center mt-1 text-white font-bold">FIREBASE</h3>
            </div>
          </div>
          </Marquee>
    </div>
  );
};

export default SkillsPage;
