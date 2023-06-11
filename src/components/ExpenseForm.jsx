import { useState } from "react";

const ExpenseForm = ({ formData }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const formHandler = (e) => {
    e.preventDefault();

    const data = {
      title,
      price,
      date: new Date(date),
    };

    formData(data);

    setTitle("");
    setPrice("");
    setDate("");
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const priceHandler = (e) => {
    setPrice(e.target.value);
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  return (
    <div>
      <form
        style={{ backgroundColor: "#222", padding: "1rem" }}
        onSubmit={formHandler}
      >
        <div style={{ display: "grid" }}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={title} onChange={titleHandler} />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="price"
            value={price}
            onChange={priceHandler}
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" value={date} onChange={dateHandler} />
        </div>
        <div style={{ justifyContent: "end" }}>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
