import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {id: 1, title: 'TV', amount: 1099, date: new Date(2022, 7, 11)},
    {id: 2, title: 'Smart Phone', amount: 999, date: new Date(2022, 7, 12)},
    {id: 3, title: 'Xbox', amount: 1399, date: new Date(2022, 7, 13)},
  ]

  const addHandler = data => {
    const expenseData = {
      ...data
    }
    console.log(data)
  }

  return (<div>
    <NewExpense onAdd={addHandler} />
    <Expenses expenses={expenses} />
  </div>);
}

export default App;