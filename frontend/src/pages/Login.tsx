import { useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const { login, user } = useAuthContext();
  const navigate = useNavigate();

  if (user) return <Navigate to="/dashboard" replace />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      login(res.data.token, res.data.user);
      navigate("/dashboard");
    } catch (err: any) {
      console.log(err.response?.data);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0a0f1e]">
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="bg-[#0f172a] w-full max-w-[420px] rounded-2xl border border-gray-700 p-8 shadow-2xl"
      >
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-400">FinDash</h2>
          <p className="text-gray-400 mt-1 text-sm">
            Secure Financial Intelligence
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center rounded-lg px-4 py-2 mb-4">
            {error}
          </div>
        )}

        <div className="mb-4">
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="new-email"
            className="w-full p-3 rounded-lg bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div className="mb-6">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="user_password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
              className="w-full p-3 pr-11 rounded-lg bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition-colors"
              tabIndex={-1}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7M3 3l18 18" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors cursor-pointer"
        >
          Sign In
        </button>

        <p className="text-center text-gray-400 text-sm mt-5">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-400 hover:text-blue-300 font-medium"
          >
            Create Account
          </Link>
        </p>
      </form>
    </div>
  );
}