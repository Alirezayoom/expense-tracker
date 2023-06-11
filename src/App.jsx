import { useState } from "react";

import ExpenseFilter from "./components/ExpenseFilter";
import NewExpense from "./components/NewExpense";
import ExpenseList from "./components/ExpenseList";
import Chart from "./components/Chart";

const DUMMY_DATA = [
  { id: 1, date: new Date(2023, 2, 2), title: "laptop", price: 200 },
];

function App() {
  const [items, setItems] = useState(DUMMY_DATA);
  const [filteredYear, setFilteredYear] = useState("2023");

  const selectedYearHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const formDataHandler = (data) => {
    setItems((prev) => {
      return [data, ...prev];
    });
  };

  return (
    <div
      style={{
        maxWidth: "100vw",
        width: "40rem",
        display: "grid",
        gap: "1rem",
        padding: "0 1rem",
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "2rem" }}>Expense Tracker</h2>
      <NewExpense formData={formDataHandler} />
      <Chart expenses={filteredExpenses} />
      <ExpenseFilter onSelectYear={selectedYearHandler} year={filteredYear} />
      <ExpenseList filteredExpenses={filteredExpenses} />
    </div>
  );
}

export default App;
