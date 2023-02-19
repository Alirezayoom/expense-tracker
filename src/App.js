import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
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
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
