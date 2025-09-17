import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

function GraphsPage() {
  const { tasks } = useContext(TaskContext);

  // Completed vs Pending
  const completedCount = tasks.filter((t) => t.completed).length;
  const pendingCount = tasks.filter((t) => !t.completed).length;

  const doughnutData = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [completedCount, pendingCount],
        backgroundColor: ["#4ade80", "#f87171"],
      },
    ],
  };

  // Tasks over time (example: by day)
  const tasksByDay = tasks.reduce((acc, task) => {
    const date = task.date || "Unknown"; // assuming each task has a date
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const barData = {
    labels: Object.keys(tasksByDay),
    datasets: [
      {
        label: "Tasks Added",
        data: Object.values(tasksByDay),
        backgroundColor: "#3b82f6",
      },
    ],
  };

  return (
    <div>
      <h1 className="bg-yellow-500 text-white p-2 font-bold text-4xl text-center ">Graphical View</h1>
    <div className="p-6 flex flex-col md:flex-row gap-6 justify-center items-center h-full">
      {/* Doughnut Chart */}
      <div className="w-full md:w-1/2 bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Completed vs Pending
        </h2>
        <Doughnut data={doughnutData} />
      </div>

      {/* Bar Chart */}
      <div className="w-full md:w-1/2 bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Tasks Over Time
        </h2>
        <Bar data={barData} />
      </div>
    </div>
    </div>
  );
}

export default GraphsPage;
