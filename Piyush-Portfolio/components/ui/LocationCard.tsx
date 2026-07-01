"use client";

import { useEffect, useState } from "react";

export const LocationCard = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(new Date().toLocaleTimeString("en-US", options));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full p-5 lg:p-8 flex flex-col justify-between select-none">
      {/* Radar Graphic Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="relative w-[260px] h-[260px] flex items-center justify-center">
          <div className="absolute w-[260px] h-[260px] border border-purple/[0.03] rounded-full" />
          <div className="absolute w-[180px] h-[180px] border border-purple/[0.06] rounded-full" />
          <div className="absolute w-[110px] h-[110px] border border-purple/[0.1] rounded-full" />
          <div className="absolute w-[50px] h-[50px] border border-purple/[0.15] rounded-full" />
          <div className="absolute inset-0 border-t border-purple/[0.15] rounded-full animate-[spin_10s_linear_infinite]" />
        </div>
      </div>

      {/* Top Section: Title & Subtitle */}
      <div className="flex flex-col gap-1 z-20 max-w-[95%] pointer-events-auto">
        <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-[#C1C2D3] font-light">
          Location & Availability
        </span>
        <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white leading-snug">
          Based in Lucknow, U.P., open to remote and on-site opportunities.
        </h2>
      </div>

      {/* Bottom Section: Clock Details */}
      <div className="flex flex-col items-start z-20 pointer-events-auto mt-2">
        <span className="text-[9px] uppercase tracking-widest text-[#C1C2D3]">
          Local Time (IST)
        </span>
        <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple via-[#CBACF9] to-purple-400 mt-0.5 font-mono">
          {time || "12:00:00 AM"}
        </span>
        <span className="text-[9px] text-[#C1C2D3] flex items-center gap-1 mt-1">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
          </span>
          Lucknow, India (GMT +5:30)
        </span>
      </div>
    </div>
  );
};
