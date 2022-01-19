import { useState, useRef } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {

    const amountValue = useRef()

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [amount, setAmount] = useState(0)
    const [visible, setVisible] = useState(false)


    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleDate = (e) => {
        setDate(e.target.value)

    }
    const handleAmount = (e) => {
        const value = e.target.value
        if (!Number.isNaN(+value)) {
            setAmount(value)
        }
    }

    const handleFocusAmount = (e) => {
        amountValue.current.focus()
        setAmount('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitle('')
        setDate('')
        setAmount('')

        if (title && date && amount) {

            props.onAddExpense({
                title: title,
                date: new Date(date),
                amount: +amount,
            })

        }

    }

    if (!visible) {
        return <button onClick={() => setVisible(true)
        }> Open form</button >
    }

    return (
        <div className='expense-form'>
            <form onSubmit={handleSubmit}>
                <div className='expense-form__items' >
                    <div className='expense-form__item'>
                        <label>Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={handleTitle}
                        />
                    </div>
                    <div className='expense-form__item'>
                        <label>Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={handleDate}

                        />
                    </div>
                    <div className='expense-form__item'>
                        <label>Amount</label>
                        <input
                            ref={amountValue}
                            type="text"
                            value={amount}
                            onChange={handleAmount}
                            onFocus={handleFocusAmount}

                        />
                    </div>
                </div>
                <div className='expense-form__btns'>
                    <button className='expense-form__btn-add'>Add</button>
                    <button className='expense-form__btn-cancel' onClick={() => setVisible(false)}>Cancel</button>
                </div>
            </form>

        </div>
    )
}

export default ExpenseForm
