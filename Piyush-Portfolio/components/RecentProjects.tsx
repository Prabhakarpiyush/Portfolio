"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";

const RecentProjects = () => {
  const isCentering = projects.length <= 4;

  return (
    <div className="py-20 w-full" id="projects">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(147, 51, 234, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(147, 51, 234, 0.6);
        }
      `}</style>

      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div 
        className={`flex flex-col lg:flex-row items-center lg:items-stretch lg:overflow-x-auto gap-8 p-4 mt-10 w-full max-w-7xl mx-auto custom-scrollbar pb-4 lg:pb-8 justify-start ${
          isCentering ? "lg:justify-center" : "lg:justify-start"
        }`}
      >
        {projects.map((item) => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={item.id}
            className="flex flex-col justify-between p-5 rounded-3xl border border-white/[0.1] bg-[#141211] hover:-translate-y-2 hover:border-purple/[0.4] transition-all duration-300 ease-in-out cursor-pointer group w-[85vw] sm:w-[320px] md:w-[350px] min-h-[380px] sm:min-h-[400px] md:min-h-[420px] flex-shrink-0"
          >
            <div>
              <div className="relative flex items-center justify-center w-full overflow-hidden h-[150px] sm:h-[180px] md:h-[200px] mb-5 rounded-2xl bg-[#13162D]">
                <div className="absolute inset-0 w-full h-full bg-[#13162D] opacity-40">
                  <img src="/bg.png" alt="bgimg" className="w-full h-full object-cover" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 max-h-[85%] object-contain px-4"
                />
              </div>

              <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1 text-white group-hover:text-purple transition duration-200">
                {item.title}
              </h1>

              <p
                className="lg:text-sm lg:font-normal font-light text-xs line-clamp-3 mt-2"
                style={{
                  color: "#BEC1DD",
                }}
              >
                {item.des}
              </p>
            </div>

            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center">
                {item.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[0.2] rounded-full bg-black w-8 h-8 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <img src={icon} alt="icon" className="p-1.5" />
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center gap-1 group-hover:text-purple transition duration-200">
                <p className="flex text-xs text-purple font-semibold">
                  Live Site
                </p>
                <FaLocationArrow className="text-purple w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-200" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;