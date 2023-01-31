import "./ExpenseItem.css";

export default function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Jan 30th 2023</div>
      <div className="expense-item__description">
        <h1>Galaxy s23</h1>
        <div className="expense-item__price">$599</div>
      </div>
    </div>
  );
}
