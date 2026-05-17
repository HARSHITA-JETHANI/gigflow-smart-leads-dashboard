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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-[400px]">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        {error && (
          <p className="text-red-500 mb-4">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border p-3 rounded mb-4"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </div>
    </div>
  );
}

export default LoginPage;