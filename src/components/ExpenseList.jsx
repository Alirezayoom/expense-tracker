import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ filteredExpenses }) => {
  // expenses content
  if (filteredExpenses.length === 0) {
    return (
      <h2 style={{ textAlign: "center", fontSize: "1.5rem" }}>
        No expenses found!
      </h2>
    );
  }

  return (
    <div style={{ display: "grid", gap: "1rem" }}>
      {filteredExpenses.map((item) => (
        <ExpenseItem
          key={item.id}
          date={item.date}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
