import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Page A", UV: 4000, PV: 2800 },
  { name: "Page B", UV: 3000, PV: 2598 },
  { name: "Page C", UV: 2150, PV: 5110 },
  { name: "Page D", UV: 2780, PV: 3908 },
  { name: "Page E", UV: 2890, PV: 4800 },
  { name: "Page F", UV: 2390, PV: 4400 },
  { name: "Page G", UV: 3490, PV: 4300 },
];

const MyBarChart = () => {
  return (
    <div>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="PV" fill="#873663" />
        <Bar dataKey="UV" fill="#266a3f" />
      </BarChart>
    </div>
  );
};

export default MyBarChart;
