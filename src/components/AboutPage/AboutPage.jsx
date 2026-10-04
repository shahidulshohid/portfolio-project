import { Fade } from "react-awesome-reveal";
// import headerImg from "../../assets/headerImg.jpeg";
import headerImg from "../../assets/aboutImg.jpg";

const AboutPage = () => {
  return (
    <div className="pt-20 -mb-16" id="about">
      <div className="border-t border-gray-200 dark:border-gray-800 pt-16 mb-12">
        <h2 className="mb-3 text-4xl md:text-5xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 dark:from-green-400 dark:to-green-700">
            About Me
          </span>
        </h2>
      </div>
      <div className="lg:flex justify-between items-center gap-16">
        <div className="flex justify-center items-center">
          <Fade direction="up">
            <div className="relative group animate-float-slow select-none">
              {/* Ambient Gradient Glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-emerald-500/30 via-green-500/20 to-teal-400/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              {/* Rotating Glowing Border Frame */}
              <div className="relative p-[3px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
                {/* Animated Rotating Conic Gradient Beam */}
                <div className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_0_50deg,#417E38_100deg,#34d399_170deg,transparent_220deg_270deg,#417E38_310deg,#10b981_360deg)] animate-border-spin pointer-events-none"></div>

                {/* Inner Card */}
                <div className="relative bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-[22px] p-2.5 sm:p-3">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={headerImg}
                      alt="Shahidul Islam Profile"
                      className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] object-cover object-top rounded-2xl transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Subtle bottom gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent rounded-2xl pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="flex-1 text-gray-700 dark:text-gray-200 space-y-4 mt-8 lg:mt-0">
          <div className="font-bold text-lg">
            <small className="text-[#2c682c] dark:text-[#9CC842] bg-emerald-50 dark:bg-zinc-800 py-1.5 px-3 rounded-full border border-emerald-200 dark:border-[#417e384d] inline-block font-medium">
              Welcome to Shahidul Islam's zone!
            </small>
          </div>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed">
            <Fade direction="up">
              <p className="text-justify text-gray-700 dark:text-gray-300">
                I am a passionate{" "}
                <span className="text-[#2c682c] dark:text-[#4da43f] font-semibold">
                  Frontend developer{" "}
                </span>
                specializing in creating intuitive and visually appealing user
                interfaces. With a strong foundation in HTML, CSS, and
                JavaScript I craft{" "}
                <span className="text-[#2c682c] dark:text-[#4da43f] font-semibold">
                  responsive
                </span>{" "}
                and{" "}
                <span className="text-[#2c682c] dark:text-[#4da43f] font-semibold">
                  dynamic web applications
                </span>{" "}
                that provide{" "}
                <span className="text-[#2c682c] dark:text-[#4da43f] font-semibold">
                  seamless user experiences
                </span>
                . My expertise includes modern frameworks like React and
                ensuring cross-browser compatibility. I am dedicated to
                continuous learning and staying updated with the latest trends
                and{" "}
                <span className="text-[#2c682c] dark:text-[#4da43f] font-semibold">
                  best practices in frontend development
                </span>
                .
              </p>
            </Fade>
            <Fade direction="up">
              <p className="text-justify text-gray-700 dark:text-gray-300">
                My hobby is{" "}
                <span className="text-[#2c682c] dark:text-[#4da43f] font-semibold">
                  traveling
                </span>
                , which allows me to explore new places, experience diverse
                cultures, and connect with people from different walks of life.
                Traveling opens my mind to{" "}
                <span className="text-[#2c682c] dark:text-[#4da43f] font-semibold">
                  new perspectives
                </span>{" "}
                and fuels my{" "}
                <span className="text-[#2c682c] dark:text-[#4da43f] font-semibold">
                  creativity
                </span>
                . Whether it's discovering hidden gems in nature or wandering
                through bustling cities, each journey leaves me with{" "}
                <span className="text-[#2c682c] dark:text-[#4da43f] font-semibold">
                  unforgettable memories
                </span>{" "}
                and inspires me to embrace the{" "}
                <span className="text-[#2c682c] dark:text-[#4da43f] font-semibold">
                  beauty of the world
                </span>
                .
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
