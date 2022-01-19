import React from 'react'
import ExpenseItem from './ExpenseItem';


function App() {

  const expenseItems = [
    { date: new Date(), title: 'New Phone', price: 500 },
    { date: new Date(), title: 'New Camera', price: 300 },
    { date: new Date(), title: 'New Tv', price: 600 },
  ]

  return (
    <div className="App">
      <ExpenseItem
        date={expenseItems[0].date}
        title={expenseItems[0].title}
        price={expenseItems[0].price}>
      </ExpenseItem>

      <ExpenseItem
        date={expenseItems[1].date}
        title={expenseItems[1].title}
        price={expenseItems[1].price}>
      </ExpenseItem>

      <ExpenseItem
        date={expenseItems[2].date}
        title={expenseItems[2].title}
        price={expenseItems[2].price}>
      </ExpenseItem>
    </div>
  );
}

export default App;
