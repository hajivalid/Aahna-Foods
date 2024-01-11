import React from 'react';
import ReactDOM from 'react-dom';

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "React!"),
    React.createElement("h2", {}, "Hello World from React!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello World from React!"),
    React.createElement("h2", {}, "React!"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
