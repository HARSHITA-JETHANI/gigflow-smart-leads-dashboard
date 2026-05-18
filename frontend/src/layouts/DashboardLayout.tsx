import type { ReactNode } from "react";
import {
  FaChartBar,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";

import { useNavigate, useLocation } from "react-router-dom";

type Props = {
  children: ReactNode;
};

function DashboardLayout({
  children,
}: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  const userRole = localStorage.getItem("userRole") || "sales";
  const userName = localStorage.getItem("userName") || "User";
  const userEmail = localStorage.getItem("userEmail") || "user@gigflow.com";
  const initial = userName.charAt(0).toUpperCase();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Sidebar */}
      <div className="w-[260px] bg-white border-r border-slate-200 flex flex-col fixed h-full z-20">
        <div className="p-6">
          <h1 className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8 tracking-tight">
            GigFlow.
          </h1>

          <div className="space-y-2">
            <button 
              onClick={() => navigate('/dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                isActive('/dashboard') 
                  ? 'bg-blue-50 text-blue-700 shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className={isActive('/dashboard') ? 'text-blue-600' : 'text-slate-400'}>
                <FaChartBar />
              </span>
              Dashboard
            </button>

            <button 
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                isActive('/leads') 
                  ? 'bg-blue-50 text-blue-700 shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className={isActive('/leads') ? 'text-blue-600' : 'text-slate-400'}>
                <FaUsers />
              </span>
              Leads
            </button>
          </div>
        </div>

        <div className="mt-auto p-6 border-t border-slate-100">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 text-red-600 font-medium bg-red-50 hover:bg-red-100 rounded-xl transition-colors duration-200"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-[260px] flex flex-col min-h-screen">
        {/* Navbar */}
        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-800">
            {location.pathname === '/dashboard' ? 'Overview' : 'Leads'}
          </h2>

          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
              <span className="text-sm font-semibold text-slate-800 capitalize">
                {userName} ({userRole})
              </span>
              <span className="text-xs text-slate-500">{userEmail}</span>
            </div>
            <div className="bg-gradient-to-tr from-blue-500 to-indigo-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md shadow-blue-500/20">
              {initial}
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="p-8 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;