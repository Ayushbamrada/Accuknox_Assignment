import { useState } from "react";
import { useDashboard } from "../context/DashboardContext";

export default function SearchBar() {
  const { categories } = useDashboard();
  const [search, setSearch] = useState("");

  const matchedWidgets = categories.flatMap(cat =>
    cat.widgets
      .filter(widget => widget.name.toLowerCase().includes(search.toLowerCase()))
      .map(widget => ({ ...widget, category: cat.name }))
  );

  return (
    <div className="flex gap-4 items-center">
      <input
        type="text"
        placeholder="Search widgets..."
        className="px-3 py-2 border rounded-md text-sm w-64"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {search && (
        <div className="mt-4 space-y-2">
          <h3 className="font-semibold text-lg">Search Results:</h3>
          {matchedWidgets.length ? (
            matchedWidgets.map(w => (
              <div key={w.id} className="p-2 bg-white rounded shadow">
                <p><strong>{w.name}</strong> from <em>{w.category}</em></p>
                <p>{w.text}</p>
              </div>
            ))
          ) : (
            <p>No matching widgets found.</p>
          )}
        </div>
      )}
    </div>
  );
}
