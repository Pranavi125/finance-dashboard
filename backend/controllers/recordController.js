let records = [
  { id: 1, amount: 5000, category: "Salary", type: "INCOME" },
  { id: 2, amount: 1200, category: "Food", type: "EXPENSE" },
];

export const getRecords = (req, res) => {
  res.json(records);
};

export const addRecord = (req, res) => {
  const { amount, type, category, date } = req.body;

  if (!amount || !category) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const newRecord = {
    id: Date.now(),
    amount,
    type,
    category,
    date,
  };

  records.push(newRecord);

  res.json(newRecord);
};