import ExpenseItem from "./components/ExpenseItem";

function App() {
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

  return (
    <div>
      <ExpenseItem
        id={expenses[0].id}
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        id={expenses[1].id}
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
    </div>
  );
}

export default App;
