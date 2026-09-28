import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaGitAlt,
  FaGithub,
  FaCodeBranch,
  FaFire,
  FaBootstrap,
  FaFigma,
  FaTools,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiNetlify,
  SiMaterialdesign,
  SiNextdotjs,
  SiTypescript,
  SiShadcnui,
  SiVercel,
  SiJsonwebtokens,
  SiAxios,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import "./Skills.css";

const skillsData = [
  {
    category: "Programming Languages",
    icon: <FaCodeBranch />,
    color: "from-blue-500 to-cyan-500",
    description:
      "These are the core languages I use regularly in my development work.",
    items: [
      { name: "JavaScript", icon: <FaJs />, level: 90 },
      { name: "TypeScript", icon: <SiTypescript />, level: 82 },
    ],
  },
  {
    category: "Libraries & Frameworks",
    icon: <FaServer />,
    color: "from-purple-500 to-pink-500",
    description:
      "Essential tools that boost my productivity and enhance my workflow.",
    items: [
      { name: "React", icon: <FaReact />, level: 92 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
      { name: "Node.js", icon: <FaNodeJs />, level: 85 },
      { name: "Express.js", icon: <SiExpress />, level: 80 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90 },
      { name: "DaisyUI", icon: <SiMaterialdesign />, level: 85 },
      { name: "Material Tailwind", icon: <SiMaterialdesign />, level: 80 },
      { name: "shadcn/ui", icon: <SiShadcnui />, level: 80 },
      { name: "Jwt", icon: <SiJsonwebtokens />, level: 60 },
      { name: "Axios", icon: <SiAxios />, level: 60 },
      { name: "Framer Motion", icon: <FaNetworkWired />, level: 75 },
      { name: "Bootstrap 5", icon: <FaBootstrap />, level: 85 },
    ],
  },
  {
    category: "Database",
    icon: <FaDatabase />,
    color: "from-emerald-500 to-teal-500",
    description:
      "These are the databases I use to store and manage data in my projects.",
    items: [
      { name: "MongoDB", icon: <SiMongodb />, level: 90 },
      { name: "MySQL", icon: <SiMysql />, level: 85 },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: <FaTools />,
    color: "from-amber-500 to-orange-500",
    description:
      "These tools help me make development smoother and more efficient every day.",
    items: [
      { name: "GitHub", icon: <FaGithub />, level: 90 },
      { name: "GIT", icon: <FaGitAlt />, level: 88 },
      { name: "VSCode", icon: <FaCodeBranch />, level: 95 },
      { name: "Postman", icon: <SiPostman />, level: 85 },
      { name: "Figma", icon: <FaFigma />, level: 80 },
      { name: "Netlify", icon: <SiNetlify />, level: 85 },
      { name: "Vercel", icon: <SiVercel />, level: 85 },
      { name: "Firebase", icon: <FaFire />, level: 88 },
    ],
  },
];

const SkillsPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="py-20 bg-transparent" id="skills">
      <div className="pt-20 -mb-16">
        <div className="border-t border-gray-200 dark:border-gray-800 pt-16 mb-12">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-3 text-4xl md:text-5xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 dark:from-green-400 dark:to-green-700">
                My Skills
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400">
              Here, I have showcased my technical skills and proficiencies to
              highlight the tools and technologies I work with.
            </p>
          </motion.div>
        </div>

        {/* Skills Category Tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-3">
          {skillsData.map((skill, index) => (
            <button
              key={index}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                activeTab === index
                  ? `bg-gradient-to-r ${skill.color} text-white shadow-lg shadow-${skill.color}/20 scale-105`
                  : `bg-white dark:bg-zinc-900/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-zinc-800 hover:border-emerald-500/50 shadow-sm`
              }`}
              onClick={() => setActiveTab(index)}
            >
              <span className="text-xl">{skill.icon}</span>
              <span>{skill.category}</span>
            </button>
          ))}
        </div>

        {/* Active Category Description */}
        <motion.p
          className="max-w-2xl mx-auto mb-10 text-center text-lg text-gray-600 dark:text-gray-300"
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {skillsData[activeTab].description}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          key={`grid-${activeTab}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {skillsData[activeTab].items.map((item, index) => (
            <motion.div
              key={index}
              className="p-5 overflow-hidden transition-all duration-300 backdrop-blur-sm border border-gray-200 dark:border-emerald-500/20 rounded-2xl hover:shadow-xl bg-white/80 dark:bg-[#417e3814] shadow-sm dark:shadow-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{
                y: -4,
              }}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${skillsData[activeTab].color} text-white shadow-md`}
                >
                  <motion.div
                    animate={hoveredSkill === index ? { rotate: 360 } : {}}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-2xl"
                  >
                    {item.icon}
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {item.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee Banner */}
        <div className="py-12">
          <Marquee speed={40} gradient={false} className="py-2">
            {skillsData
              .flatMap((category) => category.items)
              .map((item, index) => (
                <div
                  key={index}
                  className="p-4 overflow-hidden transition-all duration-300 backdrop-blur-sm border border-gray-200 dark:border-emerald-500/20 rounded-2xl bg-white/80 dark:bg-[#417e3814] mx-3 shadow-sm dark:shadow-none flex items-center gap-3"
                >
                  <div className="text-2xl text-[#417E38] dark:text-[#9CC842]">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white whitespace-nowrap">
                    {item.name}
                  </h3>
                </div>
              ))}
          </Marquee>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-6">
          <article className="overflow-hidden p-px relative rounded-2xl border border-gray-200 dark:border-emerald-500/20 shadow-lg dark:shadow-none">
            <div className="glow inset-0 w-[100px] h-[100px] absolute rotate-45 pointer-events-none"></div>
            <section className="inline-block space-y-3 bg-white dark:bg-zinc-950 rounded-2xl z-10 relative px-8 py-6 text-center max-w-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Interested in collaborating on a project?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I’m open to discussing exciting new projects and opportunities
                anytime.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center px-5 py-2.5 text-base font-bold transition-all border border-[#417E38] rounded-xl text-[#2c682c] dark:text-[#9CC842] bg-[#417e3814] hover:bg-[#417E38] hover:text-white dark:hover:text-white shadow-sm"
                >
                  Get in touch
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
