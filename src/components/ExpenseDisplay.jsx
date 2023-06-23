import ExpenseItem from "./ExpenseItem";

function ExpenseDisplay(props) {
  return (
    <div className="expenses">
      <ExpenseItem expense={props.expenseArr[0]} />
      <ExpenseItem expense={props.expenseArr[1]} />
      <ExpenseItem expense={props.expenseArr[2]} />
      <ExpenseItem expense={props.expenseArr[3]} />
    </div>
  );
}

export default ExpenseDisplay;
