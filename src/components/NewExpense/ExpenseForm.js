import {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    
    //   --- another approach which we can use ---
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleHandler = e => {
        setEnteredTitle(e.target.value)
        // setUserInput((prevState) =>{
        //     return {...prevState, enteredTitle: e.target.value}
        // })
    }
    const amountHandler = e => {
        setEnteredAmount(e.target.value)
        // setUserInput((prevState) =>{
        //     return {...prevState, enteredAmount: e.target.value}
        // })
    }
    const dateHandler = e => {
        setEnteredDate(e.target.value)
        // setUserInput((prevState) =>{
        //     return {...prevState, enteredDate: e.target.value}
        // })
    }

    const submitHandler = e => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        
        props.onAdd(expenseData)

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                    type="text" 
                    onChange={titleHandler} 
                    value={enteredTitle}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                    type="number" 
                    min="0.1" 
                    step="0.1" 
                    onChange={amountHandler} 
                    value={enteredAmount}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                    type="date" 
                    min="2020-01-01" 
                    max="2022-12-12" 
                    onChange={dateHandler} 
                    value={enteredDate}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;