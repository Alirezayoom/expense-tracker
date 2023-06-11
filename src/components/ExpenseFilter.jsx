const ExpenseFilter = ({ onSelectYear, year }) => {
  const SelectedYearHandler = (year) => {
    onSelectYear(year.target.value);
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#222",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "1.2rem" }}>Filter </div>
      <div>
        <select
          value={year}
          onChange={SelectedYearHandler}
          style={{ border: "0", padding: "5px 1rem" }}
        >
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
