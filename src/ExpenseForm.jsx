import { useState } from "react";

const empty = { title: "", amount: "", category: "", date: "" };

export default function ExpenseForm({ onAdd }) {
  const [data, setData] = useState(empty);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = {};
    if (!/^[A-Za-z ]+$/.test(data.title.trim())) err.title = "Title must contain only letters";
    if (!(Number(data.amount) > 0)) err.amount = "Amount must be greater than 0";
    if (!data.category) err.category = "Select a category";
    if (!data.date) err.date = "Select a date";
    setErrors(err);
    if (Object.keys(err).length === 0) {
      onAdd({ ...data, amount: Number(data.amount) });
      setData(empty);
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Add Expense</h2>

      <input name="title" value={data.title} onChange={handleChange} placeholder="Title (e.g. Lunch)" />
      <span className="error">{errors.title}</span>

      <input type="number" name="amount" value={data.amount} onChange={handleChange} placeholder="Amount (Rs)" />
      <span className="error">{errors.amount}</span>

      <select name="category" value={data.category} onChange={handleChange}>
        <option value="">-- Category --</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Other</option>
      </select>
      <span className="error">{errors.category}</span>

      <input type="date" name="date" value={data.date} onChange={handleChange} />
      <span className="error">{errors.date}</span>

      <button type="submit">Add Expense</button>
    </form>
  );
}
