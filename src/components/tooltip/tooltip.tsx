import React, { ReactNode } from "react";

interface TooltipProps {
  text: string;
  alignment?: "left" | "right";
  type?: "sosmed" | "marketing"
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, alignment = "left", type= "sosmed", children }) => {
  return (
    <div className="relative inline-block group z-50">
      {children}
      <div
        className={`absolute top-1/2 transform -translate-y-1/2  whitespace-nowrap opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100 group-hover:pointer-events-auto ${
          alignment !== "right" ? "left-auto right-full mr-5" : "left-full ml-5"
        } ${type === "sosmed" ? "bg-black px-2 py-1 rounded-xl" : "bg-coklat px-3  rounded-xl"}`}
      >
        <text className={`${type === "sosmed"? "text-coklat text-base" : "text-black text-xs" }`}>{text}</text>
      </div>
    </div>
  );
};

export default Tooltip;
