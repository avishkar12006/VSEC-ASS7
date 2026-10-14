export default function Summary({ expenses }) {
  if (expenses.length === 0) return null;

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const highest = expenses.reduce((max, e) => (e.amount > max.amount ? e : max));

  const byCategory = {};
  expenses.forEach((e) => (byCategory[e.category] = (byCategory[e.category] || 0) + e.amount));

  return (
    <div className="card">
      <h2>Analysis</h2>
      <p><b>Total Spent:</b> Rs {total}</p>
      <p><b>Average per Expense:</b> Rs {(total / expenses.length).toFixed(2)}</p>
      <p><b>Highest Expense:</b> {highest.title} (Rs {highest.amount})</p>
      <h3>By Category</h3>
      {Object.entries(byCategory).map(([cat, amt]) => (
        <div key={cat} className="bar-row">
          <span>{cat} - Rs {amt}</span>
          <div className="bar" style={{ width: (amt / total) * 100 + "%" }}></div>
        </div>
      ))}
    </div>
  );
}
