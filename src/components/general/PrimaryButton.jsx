import React from "react";

const PrimaryButton = ({ children, handleClick, className }) => {
  return (
    <button
      onClick={handleClick}
      className={` bg-primary_yellow border-[1.5px] border-primary_yellow rounded-md items-center flex gap-2 px-5 py-3 ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
