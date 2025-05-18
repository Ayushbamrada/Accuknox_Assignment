import { useState } from "react";
import WidgetListTab from "./WidgetListTab";

const TABS = ["CSPM", "CWPP", "Image", "Ticket"];

const DUMMY_WIDGETS = {
  CSPM: ["Cloud Accounts", "Cloud Account Risk Assessment"],
  CWPP: ["Top 5 Namespace Specific Alerts", "Workload Alerts"],
  Image: ["Image Risk Assessment", "Image Security Issues"],
  Ticket: ["Open Tickets", "Closed Tickets"],
};

export default function AddWidgetDrawer({ open, onClose, onConfirm }) {
  const [activeTab, setActiveTab] = useState("CSPM");
  const [selected, setSelected] = useState({});

  const handleToggle = (category, widget) => {
    setSelected(prev => {
      const key = `${category}:${widget}`;
      const newSelected = { ...prev };
      if (newSelected[key]) {
        delete newSelected[key];
      } else {
        newSelected[key] = true;
      }
      return newSelected;
    });
  };

  const handleConfirm = () => {
    onConfirm(selected);
    setSelected({});
    onClose();
  };

  return (
    <div className={`fixed top-0 right-0 w-full max-w-md h-full bg-white shadow-lg z-50 transform transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}>
      <div className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Add Widget</h2>
        <button onClick={onClose}>✕</button>
      </div>

      <div className="p-4">
        <p className="text-gray-700 mb-4">Personalise your dashboard by adding the following widget</p>
        <div className="flex border-b mb-4">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium ${activeTab === tab ? "border-b-2 border-blue-900 text-blue-900" : "text-gray-500"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <WidgetListTab
          category={activeTab}
          widgets={DUMMY_WIDGETS[activeTab]}
          selected={selected}
          onToggle={handleToggle}
        />
      </div>

      <div className="flex justify-end gap-4 p-4 border-t">
        <button onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
        <button onClick={handleConfirm} className="px-4 py-2 bg-blue-900 text-white rounded">Confirm</button>
      </div>
    </div>
  );
}
