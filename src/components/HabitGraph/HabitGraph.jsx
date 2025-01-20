import "./HabitGraph.scss";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "My Data",
      data: [25, 30, 19, 26, 27, 30, 28, 20, 20, 30, 19, 28],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
    },
  ],
};

function HabitGraph() {
  return (
    <section className="line-graph-container">
      <Line data={data} />
    </section>
  );
}

export default HabitGraph;
