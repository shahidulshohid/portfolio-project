
import html from '../../assets/logo/html.png'
import css from '../../assets/logo/css.png'
import javascript from '../../assets/logo/javascript.png'
import mongodb from '../../assets/logo/mongodb.png'
import express from '../../assets/logo/express.jpg'
import react from '../../assets/logo/react.png'
import tailwind from '../../assets/logo/tailwind.png'
import node from '../../assets/logo/nodejs.jpg'
import firebase from '../../assets/logo/firebase.png'

const SkillsPage = () => {
  return (
    <div className="mb-24">
      <div className="mt-12 px-6 py-12 rounded-xl">
        <h3 className="text-3xl text-black font-bold text-center mb-6">
          My Skill
        </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-24">
            <div className='w-16 h-16'>
                <img src={html} alt="" />
                <h3 className="text-center mt-1">HTML</h3>
            </div>
            <div className='w-16 h-16'>
                <img src={css} alt="" />
                <h3 className="text-center mt-1">CSS</h3>
            </div>
            <div className='w-16 h-16'>
                <img src={javascript} alt="" />
                <h3 className="text-center mt-1">JAVASCRIPT</h3>
            </div>
            <div className='w-16 h-16'>
                <img src={mongodb} alt="" />
                <h3 className="text-center mt-1">MONGODB</h3>
            </div>
            <div className='w-16 h-16'>
                <img src={express} alt="" />
                <h3 className="text-center mt-1">EXPRESS</h3>
            </div>
            <div className='w-16 h-16'>
                <img src={react} alt="" />
                <h3 className="text-center mt-1">REACT</h3>
            </div>
            <div className='w-16 h-16'>
                <img src={tailwind} alt="" />
                <h3 className="text-center mt-1">TAILWIND</h3>
            </div>
            <div className='w-16 h-16'>
                <img src={node} alt="" />
                <h3 className="text-center mt-1">NODE</h3>
            </div>
            <div className='w-16 h-16'>
                <img src={firebase} alt="" />
                <h3 className="text-center mt-1">FIREBASE</h3>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SkillsPage;
