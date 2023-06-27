import ExpenseItem from "./ExpenseItem";
import "./ExpenseDisplay.css";
import Card from "../UI/Card";

const ExpenseDisplay = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem expense={props.expenseArr[0]} />
      <ExpenseItem expense={props.expenseArr[1]} />
      <ExpenseItem expense={props.expenseArr[2]} />
      <ExpenseItem expense={props.expenseArr[3]} />
    </Card>
  );
};

export default ExpenseDisplay;
