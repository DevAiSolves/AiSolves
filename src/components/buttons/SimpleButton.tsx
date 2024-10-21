import React from "react";

interface SimpleButtonProps {
  text: string;
  onClick: () => void;
}

const SimpleButton: React.FC<SimpleButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="relative w-fit h-fit px-6 py-1 rounded-full bg-gray-800 text-white font-medium transition duration-300 ease-in-out
                hover:text-white hover:shadow-[0_0_10px_10px_rgba(255,20,147,0.6)] hover:bg-gradient-to-r from-primary/60 to-gray-800"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SimpleButton;
