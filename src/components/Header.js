import React from "react";
import { BellOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const Header = () => {
  return (
    <div className="h-14 bg-white py-1 flex justify-end items-center px-3 gap-3">
      <div className="h-10 w-10 cursor-pointer flex  rounded-full hover:bg-gray-300 ">
        <BellOutlined className="text-xl m-auto" />
      </div>
      <Avatar
        src="https://joeschmoe.io/api/v1/random"
        className="cursor-pointer"
      />
    </div>
  );
};

export default Header;
