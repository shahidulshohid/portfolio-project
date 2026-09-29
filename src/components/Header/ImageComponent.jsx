import headerImg from "../../assets/headerImg.jpeg";
import { FaCode } from "react-icons/fa";
import "./ImageComponent.css";

const ImageComponent = () => {
  return (
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
              alt="Shahidul Islam - Frontend Developer"
              className="w-[280px] h-[340px] sm:w-[320px] sm:h-[390px] md:w-[350px] md:h-[420px] object-cover object-top rounded-2xl transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle bottom gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent rounded-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Floating Badge 1: Recruiter Status */}
      <div className="absolute -bottom-3 -left-3 sm:-left-4 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-gray-200 dark:border-zinc-700 shadow-xl flex items-center gap-2.5 z-20 transition-transform duration-300 hover:scale-105">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-xs font-semibold text-gray-800 dark:text-gray-100 tracking-wide">
          Available for Hire
        </span>
      </div>

      {/* Floating Badge 2: Tech Role */}
      <div className="absolute -top-3 -right-3 sm:-right-4 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-emerald-500/30 dark:border-emerald-500/30 shadow-xl flex items-center gap-2 z-20 transition-transform duration-300 hover:scale-105">
        <div className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
          <FaCode className="text-xs" />
        </div>
        <div className="text-left">
          <p className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 leading-none">
            Role
          </p>
          <p className="text-xs font-bold text-gray-800 dark:text-gray-100 leading-tight">
            Frontend Dev
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
