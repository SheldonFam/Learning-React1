import React from "react";
import ReactDOM from "react-dom";

const name = "Sheldon";
const num = Math.floor(Math.random() * 10) + 1;

ReactDOM.render(
  <div>
    <h1>Hello {name} !</h1>
    <p>Your Lucky Number is {num} </p>
  </div>,
  document.getElementById("root")
);
