import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import Summary from "./Summary";

export default function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (exp) => setExpenses([...expenses, { ...exp, id: Date.now() }]);
  const deleteExpense = (id) => setExpenses(expenses.filter((e) => e.id !== id));

  return (
    <div className="container">
      <h1>Personal Expense Tracker</h1>
      <ExpenseForm onAdd={addExpense} />
      <Summary expenses={expenses} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}
