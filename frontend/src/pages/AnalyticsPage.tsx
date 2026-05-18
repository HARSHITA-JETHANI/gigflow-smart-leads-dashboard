import DashboardLayout from "../layouts/DashboardLayout";

function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
        <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mb-6 text-blue-500 text-3xl">
          📊
        </div>
        <h1 className="text-3xl font-bold text-slate-800 mb-3">Analytics Dashboard</h1>
        <p className="text-slate-500 text-lg max-w-md mx-auto">
          Detailed analytics and insights are coming soon. Stay tuned for advanced reporting features.
        </p>
      </div>
    </DashboardLayout>
  );
}

export default AnalyticsPage;
