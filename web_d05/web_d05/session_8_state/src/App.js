import React from "react";
import Expenses from "./Expenses";
import ExpenseForm from "./ExpenseForm";

function App() {
  const expenseItems = [
    { date: new Date("2021-11-06"), title: "New Phone", price: 500 },
    { date: new Date("2021-11-07"), title: "New Camera", price: 300 },
    { date: new Date("2021-11-08"), title: "New TV", price: 600 },
  ];

  return (
    // JSX - Javascript XML
    <div className="App">
      <ExpenseForm />
      <Expenses data={expenseItems} />
    </div>
  );
}

export default App;
