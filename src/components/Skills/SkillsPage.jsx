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
    color: "from-blue-500 to-cyan-400",
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
    color: "from-green-500 to-emerald-400",
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
    color: "from-yellow-400 to-orange-500",
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

const SkillBar = ({ level, name }) => {
  return (
    <div className="w-full mb-1">
      <div className="flex justify-between mb-1">
        <span className="text-xs font-medium text-accent">{name}</span>
        <span className="text-xs font-medium text-accent">{level}%</span>
      </div>
      <div className="w-full h-2 rounded-full shadow-inner">
        <motion.div
          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

const SkillsPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="px-6 py-20 bg-transparent" id="skills">
      <div className="pt-20 -mb-16">
        <div className="text-white font-bold text-3xl border-t pt-16 mb-16">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="relative inline-block mb-3 text-5xl font-bold">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-800">
                My Skills
              </span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-accent/10 rounded-lg -z-10"></span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-text-secondary">
              Here, I have showcased my technical skills and proficiencies to
              highlight the tools and technologies I work with.
            </p>
          </motion.div>
        </div>

        {/* Skills Category Tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-3">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-white border font-medium transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${skill.color} text-white shadow-lg border-none`
                  : `text-text-secondary hover:bg-gradient-to-r ${skill.color} hover:border-none`
              }`}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span
                className={
                  activeTab === index ? "text-xl" : "text-accent text-xl"
                }
              >
                {skill.icon}
              </span>
              {skill.category}
            </div>
          ))}
        </div>

        {/* Active Category Description */}
        <motion.p
          className={`max-w-2xl mx-auto mb-10 text-center text-lg text-white`}
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {skillsData[activeTab].description}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          key={`grid-${activeTab}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {skillsData[activeTab].items.map((item, index) => (
            <motion.div
              key={index}
              className="p-5 overflow-hidden transition-all duration-300 backdrop-blur-sm border border-accent/10 rounded-xl hover:shadow-xl hover:shadow-accent/10 bg-[#417e381a]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                borderColor: "rgba(var(--color-accent-rgb), 0.3)",
              }}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`flex items-center justify-center w-20 h-14 rounded-lg bg-gradient-to-br ${skillsData[activeTab].color}`}
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
                  <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                </div>
              </div>
              {/* <SkillBar level={item.level} name="Proficiency" /> */}
            </motion.div>
          ))}
        </motion.div>
        {/* all data here  */}
        <Marquee className="flex items-center justify-between gap-5 py-12">
          {skillsData
            .flatMap((category) => category.items)
            .map((item, index) => (
              <motion.div
                key={index}
                className="p-5 overflow-hidden transition-all duration-300 backdrop-blur-sm border border-accent/10 rounded-xl hover:shadow-xl bg-[#417e381a] mr-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  borderColor: "rgba(var(--color-accent-rgb), 0.3)",
                }}
                onHoverStart={() => setHoveredSkill(index)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`flex items-center justify-center w-20 h-14 rounded-lg bg-gradient-to-br ${skillsData[activeTab].color}`}
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
                    <h3 className="text-2xl font-bold text-white">
                      {item.name}
                    </h3>
                  </div>
                </div>
                {/* <SkillBar level={item.level} name="Proficiency" /> */}
              </motion.div>
            ))}
        </Marquee>
        {/* Call to Action */}
        <div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <article className="overflow-hidden p-px relative rounded-md border border-accent/20">
            <div className="glow inset-0 w-[100px] h-[100px] absolute rotate-45"></div>
            <section className="inline-block space-y-2 bg-black rounded-md z-10 relative px-5 py-2">
              <div className="text-center mb-2">
                <h3 className="mb-3 text-2xl font-bold text-white">
                  Interested in collaborating on a project?
                </h3>
                <p className="mb-5 text-white">
                  I’m open to discussing exciting new projects and opportunities
                  anytime.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center px-4 py-2 text-lg font-bold transition-all border rounded-lg text-[#9CC842] bg-[#417e381a] hover:text-white"
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
