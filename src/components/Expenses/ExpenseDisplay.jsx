import ExpenseItem from "./ExpenseItem";
import "./ExpenseDisplay.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

const ExpenseDisplay = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");

  const filterChangeHandler = (year) => {
    setfilteredYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.expenseArr.map((expense) => (
        <ExpenseItem expense={expense} />
      ))}
      {/* <ExpenseItem expense={props.expenseArr[0]} />
      <ExpenseItem expense={props.expenseArr[1]} />
      <ExpenseItem expense={props.expenseArr[2]} />
      <ExpenseItem expense={props.expenseArr[3]} /> */}
    </Card>
  );
};

export default ExpenseDisplay;
