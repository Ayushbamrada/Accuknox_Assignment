import { useState } from "react";
import Widget from "./Widget";
import { useDashboard } from "../context/DashboardContext";
import { v4 as uuidv4 } from "uuid";

export default function Category({ category }) {
  const { addWidget } = useDashboard();
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (name && text) {
      addWidget(category.name, { id: uuidv4(), name, text });
      setName("");
      setText("");
      setShowForm(false);
    }
  };

  return (
    <div className="bg-[#e6ebf1] p-5 shadow space-y-4">

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{category.name}</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="text-blue-600 border border-blue-600 px-3 py-1 text-sm rounded"
        >
          + Add Widget
        </button>
      </div>

      {showForm && (
        <div className="flex gap-2 mb-4">
          <input
            placeholder="Widget Name"
            className="border p-2 rounded w-1/3"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            placeholder="Widget Text"
            className="border p-2 rounded w-1/2"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.widgets.map(widget => (
          <Widget key={widget.id} widget={widget} categoryName={category.name} />
        ))}
      </div>
    </div>
  );
}
