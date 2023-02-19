import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "iPhone 14 pro",
    amount: "999",
    date: new Date(2023, 1, 25),
  },
  {
    id: 2,
    title: "Galaxy S23 FE",
    amount: "599",
    date: new Date(2023, 1, 29),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addHandler = (newItem) => {
    setExpenses((prevExtenses) => {
      return [newItem, ...prevExtenses];
    });
  };

  return (
    <div>
      <NewExpense onAdd={addHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
