import { useDashboard } from "../context/DashboardContext";
import Category from "../components/Category";
import Header from "../components/Header";

export default function Dashboard() {
  const { categories } = useDashboard();

  return (
    <div className="min-h-screen bg-[#dae5f5] p-6">
      <Header />
     <h1 className="text-3xl font-bold mb-6 text-gray-900">CNAPP Dashboard</h1>


      <div className="space-y-6">
        {categories.map(category => (
          <Category key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
}
