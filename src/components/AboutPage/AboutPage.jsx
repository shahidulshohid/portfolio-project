import { Fade } from "react-awesome-reveal";
import headerImg from "../../assets/headerImg.jpg";

const AboutPage = () => {
  return (
    <div className="pt-20 -mb-16" id="about">
      <div className="text-white font-bold text-3xl border-t pt-16 mb-16">
        <h2 className="relative inline-block mb-3 text-5xl font-bold">
          <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-800">
            About Me
          </span>
          <span className="absolute bottom-1 left-0 w-full h-3 bg-accent/10 rounded-lg -z-10"></span>
        </h2>
      </div>
      <div className="lg:flex justify-between items-center gap-24">
        <div className="flex justify-center items-center">
          <Fade direction="up">
            <img src={headerImg} className="w-[300px] h-[300px]" alt="" />
          </Fade>
        </div>
        <div className="flex-1 text-white space-y-3 mt-8">
          <div className="font-bold text-lg">
            <small className="text-[#9CC842] bg-gray-800 py-1 px-2 rounded-full border-2 border-[#417e384d]">
              Welcome to Shahidul Islam's zine!
            </small>
          </div>
          <div className="space-y-3 text-lg">
            <Fade direction="up">
              <p className="text-justify">
                I am a passionate{" "}
                <small className="text-[#4da43f] text-lg font-semibold">
                  Frontend developer{" "}
                </small>
                specializing in creating intuitive and visually appealing user
                interfaces. With a strong foundation in HTML, CSS, and
                JavaScript I craft{" "}
                <small className="text-[#4da43f] text-lg font-semibold">
                  responsive
                </small>{" "}
                and
                <small className="text-[#4da43f] text-lg font-semibold">
                  dynamic web applications
                </small>{" "}
                that provide{" "}
                <small className="text-[#4da43f] text-lg font-semibold">
                  seamless user experiences
                </small>
                . My expertise includes modern frameworks like React and
                ensuring cross-browser compatibility. I am dedicated to
                continuous learning and staying updated with the latest trends
                and{" "}
                <small className="text-[#4da43f] text-lg font-semibold">
                  best practices in frontend development
                </small>
                .
              </p>
            </Fade>
            <Fade direction="up">
              <p className="text-justify">
                My hobby is{" "}
                <small className="text-[#4da43f] text-lg font-semibold">
                  traveling
                </small>
                , which allows me to explore new places, experience diverse
                cultures, and connect with people from different walks of life.
                Traveling opens my mind to{" "}
                <small className="text-[#4da43f] text-lg font-semibold">
                  new perspectives
                </small>{" "}
                and fuels my{" "}
                <small className="text-[#4da43f] text-lg font-semibold">
                  creativity
                </small>
                . Whether it's discovering hidden gems in nature or wandering
                through bustling cities, each journey leaves me with{" "}
                <small className="text-[#4da43f] text-lg font-semibold">
                  unforgettable memories
                </small>{" "}
                and inspires me to embrace the{" "}
                <small className="text-[#4da43f] text-lg font-semibold">
                  beauty of the world
                </small>
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
