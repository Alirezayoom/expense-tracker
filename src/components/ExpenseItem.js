import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  const expenseDate = new Date(2023, 1, 30);
  const expenseAmount = 599;
  const expenseTitle = "Galaxy s23";

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h1>{props.title}</h1>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
