import React from "react";
import ReactDOM from "react-dom";
import withRainbowFrame from "./components/withRainbowFrame";
import DoubleButton from "./components/DoubleButton";

let colors = ["red", "orange", "yellow", "green", "#00BFFF", "blue", "purple"];
let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);

ReactDOM.render(
  <FramedDoubleButton caption1="hello" caption2="mama" cbPressed={ num => alert(`клик на кнопке ${num}`) }>dear</FramedDoubleButton>,
  document.getElementById("container")
);
