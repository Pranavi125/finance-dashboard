import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [summary, setSummary] = useState({ income: 0, expense: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/dashboard/trends");
        let income = 0;
        let expense = 0;
        Object.values(res.data).forEach((item: any) => {
          income += item.income;
          expense += item.expense;
        });
        setSummary({ income, expense });
      } catch {
        setSummary({ income: 125000, expense: 78500 });
      }
    };
    fetchData();
  }, []);

  const balance = summary.income - summary.expense;

  const cards = [
    { label: "Total Income", value: summary.income, color: "text-green-400", border: "border-green-500/20", bg: "bg-green-500/5" },
    { label: "Total Expense", value: summary.expense, color: "text-red-400", border: "border-red-500/20", bg: "bg-red-500/5" },
    { label: "Net Balance", value: balance, color: "text-blue-400", border: "border-blue-500/20", bg: "bg-blue-500/5" },
  ];

  return (
    <div className="min-h-full p-6 text-white">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 mt-1 text-sm">Your financial overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {cards.map((c) => (
          <div
            key={c.label}
            className={`${c.bg} p-6 rounded-xl border ${c.border}`}
          >
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">{c.label}</p>
            <h2 className={`text-2xl font-bold ${c.color}`}>
              ₹ {c.value.toLocaleString()}
            </h2>
          </div>
        ))}
      </div>

      <div className="bg-[#0f172a] p-8 rounded-xl border border-gray-700 flex flex-col items-center justify-center min-h-[200px] text-gray-500">
        <div className="text-4xl mb-3">📊</div>
        <p className="text-sm">Chart Coming Soon</p>
      </div>
    </div>
  );
}