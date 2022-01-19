import { useState } from 'react'
import Expenses from './Expenses';
import ExpenseForm from './ExpenseForm';


function App() {

  const onAddExpense = (value) => {
    setExpenseItems(prev => [...prev, {
      title: value.title,
      date: value.date,
      price: +value.amount,
    }
    ])
  }

  const [expenseItems, setExpenseItems] = useState([
    { date: new Date('2019-11-08'), title: 'New Phone', price: 500 },
    { date: new Date('2021-08-23'), title: 'New Camera', price: 300 },
    { date: new Date('2022-02-04'), title: 'New Tv', price: 600 },
    { date: new Date('2020-02-04'), title: 'New House', price: 1600 },
    { date: new Date('2022-02-04'), title: 'New Radio', price: 2300 },
  ])

  return (
    <div className="App">
      <ExpenseForm onAddExpense={onAddExpense} />


      <Expenses data={expenseItems} />
    </div>
  );
}

export default App;
