import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ date, title, price }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#222",
        padding: "1rem",
        color: "white",
      }}
    >
      <ExpenseDate date={date} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h2 style={{ fontSize: "1.2rem", padding: "5px 1rem" }}>{title}</h2>
        <div style={{ padding: "5px 1rem", backgroundColor: "#444" }}>
          ${price}
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
