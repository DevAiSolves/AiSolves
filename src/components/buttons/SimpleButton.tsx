import React, { useState } from "react";

interface SimpleButtonProps {
  text: string;
  onClick: () => void;
  showLine?: boolean;
  alwaysShadow?: boolean;
}

const SimpleButton: React.FC<SimpleButtonProps> = ({
  text,
  onClick,
  showLine,
  alwaysShadow,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={`relative w-fit h-fit px-6 py-1 rounded-full bg-gray-800 text-white font-medium transition ease-in-out cursor-pointer
        ${
          alwaysShadow
            ? "shadow-[0_0_6px_6px_rgba(255,20,147,0.6)] bg-gradient-to-r from-primary/60 to-gray-800 hover:shadow-[0_0_2px_2px_rgba(255,20,147,0.6)] hover:shadow-primary ml-8"
            : "hover:text-white hover:shadow-[0_0_6px_6px_rgba(255,20,147,0.6)] hover:bg-gradient-to-r from-primary/60 to-gray-800"
        }`}
        onClick={onClick}
      >
        {text}
      </button>

      {showLine && (
        <svg
          width="120"
          height="60"
          className={`absolute top-1/2 left-full transform -translate-y-1/2 transition-all duration-500 ease-in-out ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          viewBox="0 0 120 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0"
            y1="30"
            x2="60"
            y2="30"
            stroke="#FF007F"
            strokeWidth="4"
            strokeDasharray="60"
            strokeDashoffset={isHovered ? "0" : "60"}
            className="transition-all duration-500 ease-in-out"
          />
          <line
            x1="60"
            y1="30"
            x2="120"
            y2="60"
            stroke="#FF007F"
            strokeWidth="4"
            strokeDasharray="55"
            strokeDashoffset={isHovered ? "0" : "55"}
            className="transition-all duration-500 ease-in-out"
          />
        </svg>
      )}
    </div>
  );
};

export default SimpleButton;
