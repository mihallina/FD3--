import React, { useEffect, useState } from "react";
import "./Filter.css";
import Controls from "./Controls";
import List from "./List";

export default function Filter({wordsArr}) {
  const [inputTxt, setInputTxt] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [words, setWords] = useState(wordsArr);

  useEffect(() => {
    let filteredArr = wordsArr.filter((word) =>
      word.toLowerCase().includes(inputTxt.toLowerCase())
    );

    if (isChecked) {
      filteredArr = filteredArr.sort();
    }
    setWords(filteredArr);
  }, [inputTxt, isChecked, wordsArr])

  function checkboxChanged(checked) {
    setIsChecked(checked);
  }

  function textChanged(value) {
    setInputTxt(value);
  }

  function resetAll() {
    setInputTxt('');
    setIsChecked(false);
  };

  return (
    <div>
      <Controls
        isChecked={isChecked}
        inputValue={inputTxt}
        cbCheckbox={checkboxChanged}
        cbInputTxt={textChanged}
        cbResetAll={resetAll}
      />
      <List words={words} />
    </div>
  );
}
