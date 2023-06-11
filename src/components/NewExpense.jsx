import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ formData }) => {
  const formDataHandler = (data) => {
    const fullData = { ...data, id: Math.random().toString() };
    formData(fullData);
  };

  return (
    <div>
      <ExpenseForm formData={formDataHandler} />
    </div>
  );
};

export default NewExpense;
