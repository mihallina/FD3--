import React from "react";
import "./Controls.css";

export default function Controls(props) {
  return (
    <div>
      <input
        type="checkbox"
        id="filter"
        checked={props.isChecked}
        onChange={props.cbCheckbox}
      />
      <input
        type="text"
        id="text"
        value={props.inputValue}
        onChange={props.cbInputTxt}
      />
      <button onClick={props.cbResetAll}>Сброс</button>
    </div>
  );
}
