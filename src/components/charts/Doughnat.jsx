import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    centerText: {
      display: true,
      text: "90%",
    },
    legend: {
      display: false,
    },
  },
};

export const data = {
  labels: ["Red", "Blue"],
  datasets: [
    {
      label: "# of Votes",
      data: [75, 25],
      backgroundColor: ["#16AC52", "#2DFC3430"],
    },
  ],
  text: "40",
};

export function Doughnat() {
  return <Doughnut data={data} options={options} />;
}
