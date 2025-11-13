import React from "react";
import ReactDOM from "react-dom";
import FilterSelect from "./components/FilterSelect";

const wordsArr = [
  "california",
  "everything",
  "aboveboard",
  "washington",
  "basketball",
  "weathering",
  "characters",
  "literature",
  "contraband",
  "appreciate",
];

ReactDOM.render(<FilterSelect wordsArr={wordsArr} />, 
  document.getElementById("container"));
