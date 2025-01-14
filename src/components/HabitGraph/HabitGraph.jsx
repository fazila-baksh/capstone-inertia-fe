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
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My Data",
      data: [12, 19, 3, 5, 2, 3, 10],
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
