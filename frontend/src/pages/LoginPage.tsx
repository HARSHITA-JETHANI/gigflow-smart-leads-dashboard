import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/api";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.post("/auth/login", {
        email,
        password,
      });

      // Save token
      localStorage.setItem("token", response.data.token);
      
      // Save role for RBAC
      localStorage.setItem("userRole", response.data.user.role);

      // Save user info for UI
      localStorage.setItem("userName", response.data.user.name);
      localStorage.setItem("userEmail", response.data.user.email);

      // Go to dashboard
      navigate("/dashboard");
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/illustration.png')" }}
    >
      {/* Light overlay to subtly dim the background, keeping the image clear as requested */}
      <div className="absolute inset-0 bg-slate-900/10"></div>
      
      {/* Login Form embedded on the left side */}
      <div className="relative z-10 w-full max-w-md mx-4 sm:ml-12 lg:ml-24 xl:ml-32 p-8 sm:p-10 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40">
        
        <div className="mb-8">
          <h1 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1 tracking-tight">
            GigFlow.
          </h1>
          <p className="text-slate-600 font-medium">Smart Leads Dashboard</p>
        </div>

        <h2 className="text-2xl font-bold text-slate-800 mb-2">Welcome Back</h2>
        <p className="text-slate-500 mb-8 text-sm">Please enter your details to sign in.</p>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm font-medium border border-red-100">
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
              className="w-full border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors bg-white hover:bg-slate-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors bg-white hover:bg-slate-50"
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-all duration-200 shadow-md shadow-blue-600/20 mt-6 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center active:scale-[0.98]"
          >
            {loading ? "Signing in..." : "Sign in to your account"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;