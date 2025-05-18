import { useState } from "react";
import { useDashboard } from "../context/DashboardContext";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default function Widget({ widget, categoryName }) {
  const { removeWidget, updateWidget } = useDashboard();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(widget.name);
  const [text, setText] = useState(widget.text);

  const handleSave = () => {
    updateWidget(categoryName, widget.id, { name, text });
    setIsEditing(false);
  };

  const widgetName = widget.name.toLowerCase();
  console.log("Rendering Widget:", widgetName); // Debug log

  let chart;

  // CLOUD ACCOUNT CHART
  if (widgetName.includes("cloud account")) {
    chart = (
      <Doughnut
        data={{
          labels: ["Connected", "Not Connected", "Not Available", "Error"],
          datasets: [
            {
              data: [2, 1, 1, 0],
              backgroundColor: ["#3b82f6", "#f97316", "#94a3b8", "#ef4444"]
            }
          ]
        }}
        options={{ plugins: { legend: { position: "right" } } }}
      />
    );
  }

  // RISK ASSESSMENT CHART
  else if (widgetName.includes("risk assessment")) {
    chart = (
      <Doughnut
        data={{
          labels: ["Passed", "Warning", "Failed", "Not Available"],
          datasets: [
            {
              data: [7235, 681, 1881, 36],
              backgroundColor: ["#22c55e", "#f59e0b", "#ef4444", "#94a3b8"]
            }
          ]
        }}
        options={{ plugins: { legend: { position: "right" } } }}
      />
    );
  }

  // IMAGE RISK / VULNERABILITIES BAR CHART
  else if (
    widgetName.includes("image risk") ||
    widgetName.includes("vulnerabilities")
  ) {
    chart = (
      <Bar
        data={{
          labels: ["Critical", "High", "Medium", "Low"],
          datasets: [
            {
              label: "Vulnerabilities",
              data: [9, 150, 90, 20],
              backgroundColor: ["#dc2626", "#f97316", "#facc15", "#10b981"]
            }
          ]
        }}
        options={{ indexAxis: "y", plugins: { legend: { display: false } } }}
      />
    );
  }

  // SECURITY ISSUES BAR CHART
  else if (
    widgetName.includes("security issue") ||
    widgetName.includes("security issues")
  ) {
    chart = (
      <Bar
        data={{
          labels: ["Critical", "High", "Medium", "Low"],
          datasets: [
            {
              label: "Security Issues",
              data: [2, 2, 1, 0],
              backgroundColor: ["#ef4444", "#f97316", "#facc15", "#10b981"]
            }
          ]
        }}
        options={{ indexAxis: "y", plugins: { legend: { display: false } } }}
      />
    );
  }

  return (
    <div className="p-4 bg-white shadow relative transition hover:shadow-lg min-h-[260px]">
      <button
        onClick={() => removeWidget(categoryName, widget.id)}
        className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
      >
        ✖
      </button>

      {isEditing ? (
        <div className="space-y-2">
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full border p-1 rounded"
          />
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            className="w-full border p-1 rounded"
          />
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-3 py-1 rounded text-sm"
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <h3 className="font-bold text-gray-800 mb-1">{widget.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{widget.text}</p>

          {chart ? (
            <div className="max-h-[200px]">{chart}</div>
          ) : (
            <div className="flex justify-center items-center h-24 text-gray-400 text-xs">
              No Graph data available
            </div>
          )}

          <button
            onClick={() => setIsEditing(true)}
            className="mt-2 absolute bottom-2 right-2 text-blue-600 text-xs underline"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
}
