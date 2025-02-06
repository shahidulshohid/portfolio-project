
import html from '../../assets/logo/html.png'
import css from '../../assets/logo/css.png'
import javascript from '../../assets/logo/javascript.png'
import mongodb from '../../assets/logo/mongodb.png'
import express from '../../assets/logo/express.jpg'
import react from '../../assets/logo/react.png'
import tailwind from '../../assets/logo/tailwind.png'
import node from '../../assets/logo/nodejs.jpg'
import firebase from '../../assets/logo/firebase.jpg'
import Marquee from "react-fast-marquee";

const SkillsPage = () => {
  return (
    <div className="pt-24" id='skills'>
      {/* <div> */}
        <h3 className="text-3xl text-white font-bold text-center mb-6">
          My Skill
        </h3>
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
    // </div>
  );
};

export default SkillsPage;
