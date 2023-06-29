// import ExpenseItem from "./ExpenseItem";
import "./ExpenseDisplay.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import Expenseslist from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const ExpenseDisplay = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");

  const filterChangeHandler = (year) => {
    setfilteredYear(year);
  };

  const filteredExpenses = props.expenseArr.filter((expense) => {
    return expense.date.getFullYear() === Number(filteredYear);
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <Expenseslist items={filteredExpenses} />
      {/* {expensesContent} */}
      {/* {filteredExpenses.length === 0 && <p>No expenses found!</p>}
      {filteredExpenses.length !== 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))} */}
      {/* {props.expenseArr
        .filter((expense) => {
          return expense.date.getFullYear() === Number(filteredYear);
        })
        .map((expense) => {
          return <ExpenseItem key={expense.id} expense={expense} />;
        })} */}
      {/* <ExpenseItem expense={props.expenseArr[0]} />
      <ExpenseItem expense={props.expenseArr[1]} />
      <ExpenseItem expense={props.expenseArr[2]} />
      <ExpenseItem expense={props.expenseArr[3]} /> */}
    </Card>
  );
};

export default ExpenseDisplay;
