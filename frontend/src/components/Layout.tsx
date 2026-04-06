import { Link, Outlet, useNavigate, Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export default function Layout() {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  // Protect all layout routes — redirect to login if not authenticated
  if (!user) return <Navigate to="/login" replace />;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navItems = [
    { to: "/dashboard", icon: "🏠", label: "Dashboard" },
    { to: "/records", icon: "💰", label: "Records" },
  ];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0a0f1e] text-white">

      {/* SIDEBAR */}
      <aside className="w-56 shrink-0 bg-[#020617] flex flex-col border-r border-gray-800">
        {/* Brand */}
        <div className="px-6 py-5 border-b border-gray-800">
          <h1 className="text-xl font-bold text-blue-400">FinDash</h1>
          <p className="text-xs text-gray-500 mt-0.5">Financial Intelligence</p>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium"
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* User + Logout */}
        <div className="px-4 py-4 border-t border-gray-800">
          <div className="mb-3 px-1">
            <p className="text-sm font-medium text-white truncate">{user.name}</p>
            <p className="text-xs text-gray-500 truncate">{user.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors text-sm font-medium cursor-pointer"
          >
            <span>🚪</span> Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-auto bg-[#0a0f1e]">
        {/* TOPBAR */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800 bg-[#0a0f1e] sticky top-0 z-10">
          <span className="text-sm text-gray-400">
            {new Date().toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </span>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span>👋</span>
            <span>Welcome, <strong className="text-white">{user.name}</strong></span>
          </div>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}