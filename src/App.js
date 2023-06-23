import ExpenseDisplay from "./components/ExpenseDisplay";

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
  //Podemos usar tambem como cara proprieade uma props: title={expenses[0].title} 
  //e passar para a prox componente corretamente

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseDisplay expenseArr={expenses} />
    </div>
  );
}

export default App;
