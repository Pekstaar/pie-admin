import React from "react";

const DeactivateButton = ({ children, handleClick, className }) => {
  return (
    <button
      onClick={handleClick}
      className={`  bg-red-100 text-red-600 rounded-md items-center flex gap-2 px-5 py-2.5 ${className}`}
    >
      {children}
    </button>
  );
};

export default DeactivateButton;
