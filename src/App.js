import React from "react";

// import Home from "./pages/home/Home";
import Expanse from "./pages/expanse/Expanse";
import { Login } from "./pages/auth";
import { checkValue } from "./service/localStorage";
import { AUTH_TOKEN } from "./service/auth.constants";

import "./App.css";

function App() {
  const isAuthorized = checkValue(AUTH_TOKEN);

  return (
    <div className="container">
      {/* <Home /> */}
      {isAuthorized && <Expanse />}
      {!isAuthorized && <Login />}
    </div>
  );
}

export default App;
