import { createContext, useContext, useState, useEffect } from "react";
import initialData from "../data/initialData";

const DashboardContext = createContext();
export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
  const [categories, setCategories] = useState(() => {
    const stored = localStorage.getItem("dashboard");
    return stored ? JSON.parse(stored) : initialData;
  });

 useEffect(() => {
  //localStorage.removeItem("dashboard"); // 🔥 Clear it ONCE
  localStorage.setItem("dashboard", JSON.stringify(categories)); // Re-save data
}, [categories]);


  const addWidget = (categoryName, widget) => {
    setCategories(prev =>
      prev.map(cat =>
        cat.name === categoryName
          ? { ...cat, widgets: [...cat.widgets, widget] }
          : cat
      )
    );
  };

  const removeWidget = (categoryName, widgetId) => {
    setCategories(prev =>
      prev.map(cat =>
        cat.name === categoryName
          ? {
              ...cat,
              widgets: cat.widgets.filter(w => w.id !== widgetId),
            }
          : cat
      )
    );
  };

  const updateWidget = (categoryName, widgetId, updatedData) => {
    setCategories(prev =>
      prev.map(cat =>
        cat.name === categoryName
          ? {
              ...cat,
              widgets: cat.widgets.map(w =>
                w.id === widgetId ? { ...w, ...updatedData } : w
              ),
            }
          : cat
      )
    );
  };

  return (
    <DashboardContext.Provider
      value={{ categories, addWidget, removeWidget, updateWidget }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
