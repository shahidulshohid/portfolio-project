import { Fade } from "react-awesome-reveal";
import headerImg from "../../assets/headerImg.jpg";

const AboutPage = () => {
  return (
    <div className="pt-20 -mb-16" id="about">
      {/* <Fade data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
        <div className=" bg-blend-color-burn px-6 py-12 mb-12 rounded-xl bg-[#0F0F0F]">
          <h3 className="text-3xl md:text-4xl text-white font-bold text-center mb-6">
            About me
          </h3>
          <div className="lg:flex justify-between gap-6">
            <div className="lg:max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                I'm Shahidul Ialam, a Front-End Developer
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
                Form: Bogura, Bangladesh
              </h3>
            </div>
          </div>
        </div>
      </Fade> */}
      <div>
        <h3 className="text-white font-bold text-3xl border-t pt-16 mb-16">
          About Me
        </h3>
      </div>
      <div className="flex justify-between items-center gap-24">
        <div>
          <img src={headerImg} className="w-[300px] h-[300px]" alt="" />
        </div>
        <div className="flex-1 text-white space-y-3">
          <div className="font-bold text-lg">
            <small className="text-[#9CC842] bg-gray-800 py-1 px-2 rounded-full border-2 border-[#417e384d]">
              Welcome to Shahidul Islam's zine: — where coding meets creativity!
            </small>
          </div>
          <div className="space-y-3 text-lg">
            <Fade direction="up">
            <p>
              I am a passionate <small className="text-[#4da43f] text-lg font-semibold">Frontend developer </small>specializing in creating
              intuitive and visually appealing user interfaces. With a strong
              foundation in HTML, CSS, and JavaScript I craft <small className="text-[#4da43f] text-lg font-semibold">responsive</small> and
              <small className="text-[#4da43f] text-lg font-semibold">dynamic web applications</small> that provide <small className="text-[#4da43f] text-lg font-semibold">seamless user experiences</small>.
              My expertise includes modern frameworks like React and ensuring
              cross-browser compatibility. I am dedicated to continuous learning
              and staying updated with the latest trends and <small className="text-[#4da43f] text-lg font-semibold">best practices in
              frontend development</small>.
            </p></Fade>
            <Fade direction="up">
            <p>
              My hobby is <small className="text-[#4da43f] text-lg font-semibold">traveling</small>, which allows me to explore new places,
              experience diverse cultures, and connect with people from
              different walks of life. Traveling opens my mind to <small className="text-[#4da43f] text-lg font-semibold">new
              perspectives</small> and fuels my <small className="text-[#4da43f] text-lg font-semibold">creativity</small>. Whether it's discovering
              hidden gems in nature or wandering through bustling cities, each
              journey leaves me with <small className="text-[#4da43f] text-lg font-semibold">unforgettable memories</small> and inspires me to
              embrace the <small className="text-[#4da43f] text-lg font-semibold">beauty of the world</small>
            </p></Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
