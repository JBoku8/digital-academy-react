import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Expanse from "./pages/expanse/Expanse";
import { Login, Register } from "./pages/auth";
import { NotFound } from "./pages/404";
import { Layout } from "./components/Layout";

import "./App.css";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/expanses">
          <Expanse />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>

        <NotFound />
      </Switch>
    </Layout>
  );
}

export default App;
