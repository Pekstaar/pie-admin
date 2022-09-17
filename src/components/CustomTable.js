import { useNavigate } from "react-router-dom";
import { Table } from "antd";
import React from "react";

export const CustomTable = ({ cols, rows, isClickable = false, key }) => {
  const navigate = useNavigate();

  const columns = cols;

  const data = rows;
  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey={key}
      scroll={{ x: "100%" }}
      onRow={(record) => {
        if (isClickable) {
          return {
            onClick: () => {
              navigate(`${record.key}`);
            }, // click row
          };
        }
      }}
    />
  );
};
