import { Button } from "antd";
import React from "react";
import { CustomTable } from "../../components/CustomTable";
import HeaderBar from "../../components/HeaderBar";

const Reports = () => {
  const columns = [
    {
      title: "Report",
      dataIndex: "report",
      key: "report",
      //   sorter: (a, b) => a?.first.localeCompare(b?.first),
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      //   sorter: (a, b) => a?.first.localeCompare(b?.first),
    },

    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, data) => (
        <>
          <Button
            className="bg-indigo-600 font-medium text-gray-100"
            // onClick={() => handleEdit(data)}
          >
            Generate Report
          </Button>
        </>
      ),
    },
  ];
  return (
    <>
      <div className="container mx-auto flex flex-col p-3">
        <HeaderBar
          text={"ADD REPORT"}
          title={"User Reports"}
          subtext={"Reports summary"}
          hideBtn
        />

        <CustomTable
          cols={columns}
          rows={sampleUsers}
          style={{ marginTop: "40px" }}
        />
      </div>
    </>
  );
};

export default Reports;

const sampleUsers = [
  // },onst sampleUsers = [
  {
    report: "Lorem ipsum dolor ",
    user: "User One ",
  },
  {
    report: "sit amet ",
    user: "Jane Doe ",
  },
];
