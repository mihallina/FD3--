import React from "react";
import "./Controls.css";

export default function Controls(props) {
  return (
    <div>
      <input
        type="checkbox"
        id="filter"
        checked={props.isChecked}
        onChange={(e) => {props.cbCheckbox(e.target.checked)}}
      />
      <input
        type="text"
        id="text"
        value={props.inputValue}
        onChange={(e) => {props.cbInputTxt(e.target.value)}}
      />
      <button onClick={props.cbResetAll}>Сброс</button>
    </div>
  );
}
