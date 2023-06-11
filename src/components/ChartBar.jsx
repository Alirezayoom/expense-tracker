const ChartBar = ({ value, maxValue, label }) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "7rem",
          backgroundColor: "#444",
          marginBottom: "7px",
          width: "1rem",
          position: "relative",
        }}
      >
        <div
          style={{
            height: barFillHeight,
            backgroundColor: "#ddd",
            position: "absolute",
            bottom: "0",
            width: "100%",
            transition: "all 1s ",
          }}
        ></div>
      </div>
      <div>{label}</div>
    </div>
  );
};

export default ChartBar;
