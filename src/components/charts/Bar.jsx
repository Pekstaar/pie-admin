import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  // responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Bar Chart",
    // },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Created booking",
      data: labels.map(() => Math.random() * 1000),
      backgroundColor: "#EFAF1D",
    },
    {
      label: "Complete booking",
      data: labels.map(() => Math.random() * 1000),
      backgroundColor: "#00A406",
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
