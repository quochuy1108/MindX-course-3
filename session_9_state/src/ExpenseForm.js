import { useState, useEffect } from 'react'
import "./ExpenseForm.css"


const ExpenseForm = (props) => {

    useEffect(() => {
        document.title = title
    });

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [amount, setAmount] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddExpense({
            title: title,
            date: date,
            amount: amount,
        })

    }
    const handleTitleChange = (e) => {
        setTitle(e.target.value)

    }
    const handleDateChange = (e) => {
        setDate(e.target.value)
    }
    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }

    return <div className="expense-form">
        <form onSubmit={handleSubmit}>
            <div className="expense-form__controls">
                <div className="expense-form__control">
                    <label>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="expense-form__control">
                    <label>Date</label>
                    <input type='date'
                        value={date}
                        onChange={handleDateChange}
                    />
                </div>
                <div className="expense-form__control">
                    <label>Amount</label>
                    <input type='number'
                        value={amount}
                        onChange={handleAmountChange}
                    />
                </div>
            </div>
            <div className="expense-form__actions">
                <button type='submit'>Add Expense</button>
                <button type='button' className='alternate'>Cancel</button>
            </div>

        </form>
    </div>
}

export default ExpenseForm