import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const AboutPage = () => {
  return (
    <div className="mb-24" id="about">
      <Fade direction="left">
        <div className=" bg-blend-color-burn px-6 py-12 mb-12 rounded-xl bg-[#0FADC2]">
          <h3 className="text-3xl md:text-4xl text-white font-bold text-center mb-6">
            About me
          </h3>
          <div className="lg:flex justify-between gap-6">
            <div className="lg:max-w-4xl">
              <h3 className="text-2xl font-bold text-white">
                I'm Shahidul Ialam, a fon Developer
              </h3>
              <p className="mt-2 text-white">
                I am a passionate frontend developer specializing in creating
                intuitive and visually appealing user interfaces. With a strong
                foundation in HTML, CSS, and JavaScript, I craft responsive and
                dynamic web applications that provide seamless user experiences.
                My expertise includes modern frameworks like React and ensuring
                cross-browser compatibility. I am dedicated to continuous
                learning and staying updated with the latest trends and best
                practices in frontend development.
              </p>
              <p className="mt-3 text-white">
                <span className="underline">My hobby</span> is traveling, which
                allows me to explore new places, experience diverse cultures,
                and connect with people from different walks of life. Traveling
                opens my mind to new perspectives and fuels my creativity.
                Whether it's discovering hidden gems in nature or wandering
                through bustling cities, each journey leaves me with
                unforgettable memories and inspires me to embrace the beauty of
                the world
              </p>
            </div>
            <div className="flex-1 mt-6 lg:mt-0">
              <h3 className="-mb-3 text-xl font-semibold text-white">
                Name: Md Shahidul Islam
              </h3>
              <div className="divider text-white"></div>
              <h3 className="-mb-3 text-xl font-semibold text-white">
                Email: shahidulislamshohid7@gmail.com
              </h3>
              <div className="divider text-white"></div>
              <h3 className="-mb-3 text-xl font-semibold text-white">
                Age: 32
              </h3>
              <div className="divider"></div>
              <h3 className="-mb-3 text-xl font-semibold text-white">
                Form: Bogura, Bangladesh
              </h3>
            </div>
          </div>
        </div>
      </Fade>
      
      <div className="mt-12 bg-white px-6 py-12 rounded-xl">
        <h3 className="text-3xl text-black font-bold text-center mb-6">
          My Skill
        </h3>
        <div className="max-w-2xl mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div>
              <div
                className="radial-progress bg-primary text-primary-content border-primary border-4"
                style={{ "--value": 55 }}
                role="progressbar"
              >
                55%
              </div>
              <h3 className="text-xl font-bold mt-3">HTML</h3>
            </div>
            <div>
              <div
                className="radial-progress bg-primary text-primary-content border-primary border-4"
                style={{ "--value": 45 }}
                role="progressbar"
              >
                45%
              </div>
              <h3 className="text-xl font-bold mt-2">CSS</h3>
            </div>
            <div>
              <div
                className="radial-progress bg-primary text-primary-content border-primary border-4"
                style={{ "--value": 40 }}
                role="progressbar"
              >
                40%
              </div>
              <h3 className="text-xl font-bold mt-2">JAVASCRIPt</h3>
            </div>
            <div>
              <div
                className="radial-progress bg-primary text-primary-content border-primary border-4"
                style={{ "--value": 40 }}
                role="progressbar"
              >
                40%
              </div>
              <h3 className="text-xl font-bold mt-2">REACt</h3>
            </div>
            <div>
              <div
                className="radial-progress bg-primary text-primary-content border-primary border-4"
                style={{ "--value": 45 }}
                role="progressbar"
              >
                45%
              </div>
              <h3 className="text-xl font-bold mt-2">TAILWIND</h3>
            </div>
            <div>
              <div
                className="radial-progress bg-primary text-primary-content border-primary border-4"
                style={{ "--value": 45 }}
                role="progressbar"
              >
                45%
              </div>
              <h3 className="text-xl font-bold mt-2">DAISYUI</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
