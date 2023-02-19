import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

export default function NewExpense(props) {
  const addHandler = (data) => {
    const newItem = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAdd(newItem);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAdd={addHandler} />
    </div>
  );
}
