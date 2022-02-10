import React from "react";
import "./Info.css";
import check from "./check.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Share Holder A",
    val: 65,
  },
  {
    name: "Share Holder B",
    val: 46,
  },
  {
    name: "Share Holder C",
    val: 15,
  },
  {
    name: "Share Holder D",
    val: 37,
  },
];

const timeline = [
  {
    tag: "Company Creation",
    date: "January 1, 2022",
  },
  {
    tag: "Loans tokenised",
    date: "February 1, 2022",
  },
  {
    tag: "Legal status modified",
    date: "March 1, 2022",
  },
];
export default function Info() {
  const time = (data) => {
    return (
      <div className="d-block">
        <div className="image">
          <img
            style={{ height: "12px", width: "13px", marginBottom: "3px" }}
            src={check}
            alt="check"
          />
        </div>
        <div className="img-data">
          <span className="data-main">{data.tag}</span>
          <span className="data-sec">{data.date}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="loan-rect">
        <div className="loan-rect-ele-1">
          <div className="rect-1-info">
            <div className="chunk-1" style={{ marginLeft: "1vw" }}>
              <span className="yci">Your company information</span>
              <span className="mm">MAIN METRIC</span>
              <div className="Rectangle-16846"></div>
            </div>
            <div className="chunk-2">
              <div className="c-disp">
                <span className="c-val">Total Share</span>
                <span className="c-name">3660</span>
              </div>
              <div className="c-disp">
                <span className="c-val">Total Value</span>
                <span className="c-name">$3660</span>
              </div>
            </div>
          </div>

          <ResponsiveContainer width="90%" height="50%">
            <BarChart
              width={730}
              height={250}
              data={data}
              layout="vertical"
              margin={{ top: 60, right: 30, left: 20 }}
              style={{ padding: "20px" }}
            >
              <CartesianGrid horizontal={false} />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="val"
                fill="#098fb8"
                layout="vertical"
                barSize={12}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="loan-rect-ele-2">
          <div className="disp-flex-down " style={{ marginLeft: "1vw" }}>
            <span className="yci">Past Activity</span>
            <div className="Rectangle-16846"></div>
          </div>
          <div className="disp-flex-down timeline">
            {time(timeline[0])}
            <div className="d-line"></div>
            {time(timeline[1])}
            <div className="d-line"></div>
            {time(timeline[2])}
          </div>
        </div>
      </div>
    </>
  );
}
