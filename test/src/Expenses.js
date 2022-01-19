import { useState } from 'react'
import Card from './Card'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'

function Expenses(props) {

    const [year, setYear] = useState(2021)


    const getYearChange = (year) => {
        setYear(year)
    }

    const expenseItems = props.data.filter(data => data.date.getFullYear() === +year)

    return (
        <Card >

            <ExpenseFilter
                getYearChange={getYearChange}
                handleYearChange={year}
            />


            {expenseItems.map((item, index) => (
                <ExpenseItem key={index} date={item.date} title={item.title} price={item.price} />
            )
            )}
        </Card >
    )
}

export default Expenses
