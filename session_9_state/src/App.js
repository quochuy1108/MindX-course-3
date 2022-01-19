import React, { useState } from 'react'
import Expenses from './Expenses';
import ExpenseForm from './ExpenseForm';


function App() {

  const [expenseItems, setExpenseItems] = useState([
    { id: 1, date: new Date('2021-03-08'), title: 'New Phone', price: 500 },
    { id: 2, date: new Date('2021-06-04'), title: 'New Camera', price: 300 },
    { id: 3, date: new Date('2021-09-12'), title: 'New Tv', price: 600 },
  ])


  const [show, setShow] = useState(false)

  const toggle = () => {
    setShow(!show)
  }

  const onAddExpense = (value) => {
    setExpenseItems((prev) => {
      return [...prev, {
        date: new Date(value.date),
        title: value.title,
        price: +value.amount
      }]
    })

  }
  console.log(expenseItems);
  return (
    <div className="App">
      <button onClick={toggle}>Add New Expense</button>
      { show && <ExpenseForm onAddExpense={onAddExpense} />}
      <Expenses data={expenseItems} />
    </div>
  );
}

export default App;
