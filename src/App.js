import React from "react";
import Welcome from "./components/Welcome";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import ClassComponent from "./components/ClassComponent";

import "./App.css";

// const spanElement = React.createElement("span", null, "Span Element");
// const h2Element = React.createElement("h2", null, spanElement);

// console.log(spanElement);

function App() {
  return (
    <div className="container">
      <ClassComponent />
      <Greeting />
      <Welcome title="ReactJs Rocks." />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
