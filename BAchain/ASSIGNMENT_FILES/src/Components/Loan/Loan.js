import React from "react";
import "./Loan.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const colors = ["#ff896b", "#7467f0", "#ae4afa"];

const data = [
  {
    name: "Party A",
    val: 4000,
  },
  {
    name: "Party B",
    val: 3200,
  },
  {
    name: "Party C",
    val: 1500,
  },
];

export default function Loan() {
  return (
    <div className="Rectangle-4">
      <div className="flex-down">
        <span className="yci">Loans Metrics</span>
        <span className="mm">Loans owners</span>
        <div className="Rectangle-16846"></div>
      </div>
      <div className="graph-value">
        <div className="rect-19" style={{ backgroundColor: "#ff896b" }}></div>
        <span className="perc">{"> 20 %"}</span>
        <div className="rect-19" style={{ backgroundColor: "#7467f0" }}></div>
        <span className="perc">{"> 10 %"}</span>
        <div className="rect-19" style={{ backgroundColor: "#ae4afa" }}></div>
        <span className="perc">{"> 5 %"}</span>
      </div>
      <BarChart width={1100} height={250} data={data} barGap={-10}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <Bar dataKey="val" barSize={12}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}
