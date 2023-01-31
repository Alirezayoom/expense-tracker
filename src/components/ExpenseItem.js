import "./ExpenseItem.css";

export default function ExpenseItem() {
  const expenseDate = new Date(2023, 1, 30);
  const expenseAmount = 599;
  const expenseTitle = "Galaxy s23";

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h1>{expenseTitle}</h1>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}
