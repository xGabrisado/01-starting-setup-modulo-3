import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [addNewExpense, setAddNewExpense] = useState(false);

  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setAddNewExpense(false);
  };

  const formRenderingHandler = () => {
    setAddNewExpense((prevState) => !prevState);
  };

  if (!addNewExpense) {
    return (
      <div className="new-expense">
        <div>
          <button onClick={formRenderingHandler}>Add New Expense</button>
        </div>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onCancelExpenseAdd={formRenderingHandler}
        onSaveExpenseData={saveExpenseDateHandler}
      />
    </div>
  );
};

export default NewExpense;
