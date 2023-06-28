import React, { useState } from "react";
import ExpenseDisplay from "./components/Expenses/ExpenseDisplay";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [useExpense, setUseExpense] = useState(expenses)
  //Podemos usar tambem como cara proprieade uma props: title={expenses[0].title} 
  //e passar para a prox componente corretamente

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
    console.log('antes de setar');
    console.log(useExpense);
    setUseExpense(expense)
    console.log('depois de setar');
    console.log(useExpense);
  }

  // return React.createElement('div', {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(ExpenseDisplay, { expenseArr: expenses })
  // )

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseDisplay expenseArr={useExpense} />
    </div>
  );
}

export default App;
