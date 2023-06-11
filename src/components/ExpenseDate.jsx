const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("en-us", { month: "long" });
  const day = date.toLocaleString("en-us", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div
      style={{
        flexShrink: "0",
        textAlign: "center",
        backgroundColor: "#444",
        padding: "10px 1rem",
      }}
    >
      <div>{month}</div>
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{day}</div>
      <div>{year}</div>
    </div>
  );
};

export default ExpenseDate;
