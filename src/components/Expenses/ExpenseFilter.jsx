import React, { useState } from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    console.log(event);
    // const selectOpt = event.target.options.selectedIndex;
    // const selectYear = event.target[selectOpt].innerHTML;
    // props.onYearOption(selectYear);
    props.onChangeFilter(event.target.value);
  };

  // const [estado, setEstado] = useState({
  //   outro: "2021",
  //   "seletor tal":

  // });

  // console.log("estado");
  // console.log(estado);

  // function handleInput(event) {
  //   event.preventDefault();
  //   setEstado({ ...estado, [event.target.name]: event.target.value });
  // }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* <input
          name="outro"
          value={estado["outro"]}
          type="text"
          onChange={handleInput}
        /> */}
        <select
          value={props.selected}
          name="seletortal"
          onChange={dropdownChangeHandler}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
