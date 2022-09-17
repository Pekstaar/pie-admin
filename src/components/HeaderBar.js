import { Button } from "antd";
import React from "react";

const HeaderBar = ({ handlePress, text, subtext, title }) => {
  return (
    <div className="p-4 bg-slate-50 flex justify-between mb-2">
      <div>
        <span className="text-xl font-medium text-indigo-800">{title}</span>
        <br />
        <span className="text-sm text-indigo-800">{subtext}</span>
      </div>

      <Button
        className="bg-indigo-800 font-medium text-gray-100 h-11 px-4 text-md rounded"
        onClick={handlePress}
      >
        {text}
      </Button>
    </div>
  );
};

export default HeaderBar;
