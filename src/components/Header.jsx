import { useState } from "react";
import SearchBar from "./SearchBar";
import AddWidgetDrawer from "./AddWidgetDrawer";
import { useDashboard } from "../context/DashboardContext";
import { v4 as uuidv4 } from "uuid";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { addWidget } = useDashboard();

  const categoryMap = {
  CSPM: "CSPM Executive Dashboard",
  CWPP: "CWPP Dashboard",
  Image: "Registry Scan",
  Ticket: "Ticket Summary"
};

 const handleConfirmAdd = (selected) => {
  Object.keys(selected).forEach(key => {
    const [tab, widgetName] = key.split(":");
    const categoryName = categoryMap[tab];

    addWidget(categoryName, {
      id: uuidv4(),
      name: widgetName,
      text: "Sample content for " + widgetName,
    });
  });
};
  return (
    <>
      <div className="bg-white p-4 flex flex-col md:flex-row md:items-center md:justify-between shadow rounded mb-6 gap-4">
        <div className="flex gap-2 text-gray-500 text-sm">
          <span>Home</span>
          <span>{'>'}</span>
          <span className="font-semibold text-black">Dashboard V2</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="w-full md:w-64">
            <SearchBar />
          </div>
          <button
            className="px-4 py-2 bg-blue-900 text-white text-sm rounded shadow"
            onClick={() => setDrawerOpen(true)}
          >
            + Add Widget
          </button>
          <button className="bg-white px-4 py-2 border rounded shadow text-sm whitespace-nowrap">
            Last 2 days
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-300" />
        </div>
      </div>

      <AddWidgetDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onConfirm={handleConfirmAdd}
      />
    </>
  );
}
