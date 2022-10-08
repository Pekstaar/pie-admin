import React from "react";
import { BarChart } from "../components/charts/Bar";
import { Doughnat } from "../components/charts/Doughnat";
import { CustomPie } from "../components/charts/Pie";

const Junk = () => {
  return (
    <>
      <div className="h-20 w-20">
        <CustomPie />
        <Doughnat />
      </div>
      <BarChart />
    </>
  );
};

export default Junk;
