import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {id: 1, title: 'TV', amount: 1099, date: new Date(2022, 7, 11)},
    {id: 2, title: 'Smart Phone', amount: 999, date: new Date(2022, 7, 12)},
    {id: 3, title: 'Xbox', amount: 1399, date: new Date(2022, 7, 13)},
  ]

  return (<div>
    <h2>Hello world</h2>
    <ExpenseItem 
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}
    />
    <ExpenseItem 
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}
    />
    <ExpenseItem 
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}
    />
  </div>);
}

export default App;