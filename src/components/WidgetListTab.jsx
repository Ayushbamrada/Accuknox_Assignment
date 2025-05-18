export default function WidgetListTab({ category, widgets, selected, onToggle }) {
  return (
    <div className="space-y-2">
      {widgets.map(widget => {
        const key = `${category}:${widget}`;
        return (
          <label key={widget} className="flex items-center gap-2 cursor-pointer border p-2 rounded">
            <input
              type="checkbox"
              checked={!!selected[key]}
              onChange={() => onToggle(category, widget)}
            />
            {widget}
          </label>
        );
      })}
    </div>
  );
}
