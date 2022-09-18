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
  },
  {
    report: "sit amet consectetur",
  },
];
