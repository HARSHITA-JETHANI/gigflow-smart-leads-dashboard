import { Link } from "react-router-dom";

function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Leads Dashboard
        </h1>

        <Link
          to="/login"
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </Link>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        Dashboard Content
      </div>
    </div>
  );
}

export default DashboardPage;