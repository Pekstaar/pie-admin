import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "18-24",
    uv: 12.47,
    pv: 2400,
    fill: "#CD3234",
  },
  {
    name: "25-29",
    uv: 8.69,
    pv: 4567,
    fill: "#D9D9D9",
  },
  {
    name: "30-34",
    uv: 3.69,
    pv: 1398,
    fill: "#EAC625",
  },
  {
    name: "30-34",
    uv: 8.69,
    pv: 20,
    fill: "#16AC52",
  },
];

const style = {
  bottom: "0",
  right: 0,
  //   transform: "translate(0, -50%)",
  lineHeight: "24px",
};

export default class RadialChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="10%"
          outerRadius="80%"
          barSize={20}
          data={data}
        >
          <RadialBar
            minAngle={20}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend
            iconSize={10}
            layout="horizontal"
            verticalAlign="middle"
            wrapperStyle={style}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}
