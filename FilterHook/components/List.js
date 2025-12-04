import React from "react";
import "./List.css";

export default function List(props) {

  const selectCode = props.words.map((word, index) => (
    <option key={index} value={word}>{word}</option>
  ));

  return <select size="5">{selectCode}</select>;
}
