import React from "react";
import Welcome from "./components/Welcome";
import Greeting from "./components/Greeting";
import { getTen, subtract } from "./utils/helpers";

import "./App.css";

// const spanElement = React.createElement("span", null, "Span Element");
// const h2Element = React.createElement("h2", null, spanElement);

// console.log(spanElement);

const message = "Message Demo";

function App() {
  return (
    <div className="container">
      <Greeting />
      <Welcome title="ReactJs Rocks." />

      {/* {Welcome({ title: "As function" })} */}

      <h1 className="text-muted">{message}</h1>
      <h2>
        {getTen()}

        {subtract(100, 80)}
        <span> Span Element</span>
      </h2>
      <Welcome title="Hello Everybody." />
      <Welcome title={message} text={message} />
    </div>
  );
}

export default App;
