import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/api";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.post(
        "/auth/login",
        {
          email,
          password,
        }
      );

      // Save token
      localStorage.setItem(
        "token",
        response.data.token
      );
      
      // Save role for RBAC
      localStorage.setItem(
        "userRole",
        response.data.user.role
      );

      // Save user info for UI
      localStorage.setItem(
        "userName",
        response.data.user.name
      );
      localStorage.setItem(
        "userEmail",
        response.data.user.email
      );

      // Go to dashboard
      navigate("/dashboard");
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
        "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="flex w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden min-h-[550px]">
        
        {/* Left Side - Branding */}
        <div className="hidden md:flex flex-col justify-center w-1/2 bg-gradient-to-br from-emerald-50 to-teal-50 p-12 border-r border-slate-100 relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
          
          <div className="relative z-10 mb-8">
            <h1 className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2 tracking-tight">
              GigFlow.
            </h1>
            <p className="text-xl font-semibold text-slate-800">Smart Leads Dashboard</p>
          </div>
          <p className="relative z-10 text-slate-600 leading-relaxed max-w-sm text-lg">
            Streamline your sales process, manage your leads efficiently, and grow your business with our intuitive CRM platform.
          </p>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center bg-white relative z-10">
          <div className="max-w-md w-full mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Welcome Back</h2>
            <p className="text-slate-500 mb-8">Please enter your details to sign in.</p>

            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-sm font-medium border border-red-100">
                {error}
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-slate-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-slate-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors bg-slate-50/50"
                />
              </div>

              <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors shadow-sm shadow-blue-600/20 mt-4 disabled:opacity-70 flex justify-center items-center"
              >
                {loading ? "Signing in..." : "Sign in to your account"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;