import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';

const NewExpense = (props) => {
    const addHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }
        props.onAdd(expenseData)
    }

    return(
        <div className="new-expense">
            <ExpenseForm onAdd={addHandler} />
        </div>
    )
}

export default NewExpense;