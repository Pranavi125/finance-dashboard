import { useEffect, useState } from "react";
import api from "../services/api";

export default function Records() {
  const [records, setRecords] = useState<any[]>([]);
  const [form, setForm] = useState({
    amount: "",
    type: "INCOME",
    category: "",
    date: "",
  });

  const fetchRecords = async () => {
    try {
      const res = await api.get("/records");
      setRecords(res.data);
    } catch {
      setRecords([
        { id: 1, amount: 5000, category: "Salary", type: "INCOME" },
        { id: 2, amount: 1200, category: "Groceries", type: "EXPENSE" },
        { id: 3, amount: 800, category: "Freelance", type: "INCOME" },
      ]);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/records", {
        amount: Number(form.amount),
        type: form.type,
        category: form.category,
        date: form.date,
      });
      fetchRecords();
      setForm({ amount: "", type: "INCOME", category: "", date: "" });
    } catch (err) {
      console.log(err);
      alert("❌ Failed to add record");
    }
  };

  return (
    <div className="min-h-full p-6 text-white">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Records</h1>
        <p className="text-gray-400 mt-1 text-sm">Add and view your transactions</p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-[#0f172a] p-6 rounded-xl border border-gray-700 mb-6"
      >
        <h2 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">New Record</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-gray-400 text-xs mb-1 block">Amount (₹)</label>
            <input
              name="amount"
              placeholder="e.g. 5000"
              value={form.amount}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <label className="text-gray-400 text-xs mb-1 block">Category</label>
            <input
              name="category"
              placeholder="e.g. Salary, Groceries"
              value={form.category}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <label className="text-gray-400 text-xs mb-1 block">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#1e293b] text-white border border-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <label className="text-gray-400 text-xs mb-1 block">Type</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#1e293b] text-white border border-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
            >
              <option value="INCOME">INCOME</option>
              <option value="EXPENSE">EXPENSE</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="mt-5 w-full bg-blue-500 hover:bg-blue-600 p-3 rounded-lg font-semibold transition-colors cursor-pointer"
        >
          + Add Record
        </button>
      </form>

      {/* List */}
      <div className="space-y-3">
        {records.length === 0 && (
          <p className="text-center text-gray-500 py-10">No records yet. Add one above.</p>
        )}
        {records.map((r) => (
          <div
            key={r.id}
            className="bg-[#0f172a] px-5 py-4 rounded-xl border border-gray-700 flex justify-between items-center"
          >
            <div>
              <p className="font-bold text-white text-lg">₹ {Number(r.amount).toLocaleString()}</p>
              <p className="text-gray-400 text-sm">{r.category}</p>
              {r.date && (
                <p className="text-gray-600 text-xs mt-0.5">
                  {new Date(r.date).toLocaleDateString()}
                </p>
              )}
            </div>
            <span
              className={`text-sm font-semibold px-3 py-1 rounded-full ${
                r.type === "INCOME"
                  ? "bg-green-500/10 text-green-400 border border-green-500/20"
                  : "bg-red-500/10 text-red-400 border border-red-500/20"
              }`}
            >
              {r.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}