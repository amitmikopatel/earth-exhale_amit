import React from "react";

interface ButtonProps {
  children: string;
  className?: string;
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <div>
      <button className={`w-44 h-14 border border-white rounded-xl text-lg inter  hover:bg-white/10 transition-colors duration-300 ${className || ''}`}>
        <a href="#">{children}</a>
      </button>
    </div>
  );
};

export default Button;
