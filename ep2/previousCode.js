//ep01 - ep02
import React from "react";
import ReactDOM from "react-dom";
/*
const header = React.createElement(
    "h1",
    {id:"header", randomxyz : "abc"},
    "first react component without boiler-plate")
    console.log(header)
    */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "children" }, [
    React.createElement(
      "h1",
      { id: "siblings" },
      "child of child of parent element"
    ),
    React.createElement(
      "h1",
      { id: "siblings" },
      "child of child of parent element"
    ),
  ]),
  React.createElement("div", { id: "children" }, [
    React.createElement(
      "h1",
      { id: "siblings" },
      "child2 of child of parent element"
    ),
    React.createElement(
      "h1",
      { id: "siblings" },
      "child2 of child of parent element"
    ),
  ]),
]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//ep-03
