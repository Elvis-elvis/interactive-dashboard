import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const Chart = ({ data, title, dataKey }) => {
  const labels = [...new Set(data.map((item) => item[dataKey]))];
  const values = labels.map((label) =>
    data
      .filter((item) => item[dataKey] === label)
      .reduce((acc, item) => acc + item.prix, 0),
  );

  const chartData = {
    labels,
    datasets: [
      {
        label: "Price",
        data: values,
        backgroundColor: "rgba(75,192,192,0.4)",
      },
    ],
  };

  return (
    <div>
      <h3>{title}</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default Chart;
