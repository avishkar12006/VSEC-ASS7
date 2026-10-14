export default function ExpenseList({ expenses, onDelete }) {
  return (
    <div className="card">
      <h2>All Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <table>
          <thead>
            <tr><th>Title</th><th>Amount</th><th>Category</th><th>Date</th><th></th></tr>
          </thead>
          <tbody>
            {expenses.map((e) => (
              <tr key={e.id}>
                <td>{e.title}</td>
                <td>Rs {e.amount}</td>
                <td>{e.category}</td>
                <td>{e.date}</td>
                <td><button className="del" onClick={() => onDelete(e.id)}>X</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
