import React from 'react'
import './ExpenseFilter.css'

function ExpenseFilter(props) {

    const onChange = (e) => {
        props.getYearChange(e.target.value)
    }

    return (
        <div className="expense-filter">
            <label>Year</label>
            <select value={props.handleYearChange} onChange={onChange}>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </select>
        </div>
    )
}

export default ExpenseFilter
