import React, { Suspense, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import { Layout } from "./components/Layout";
import { UserContextProvider } from "./contexts/UserContext";
import "./App.css";

const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Expanse = React.lazy(() => import("./pages/expanse/Expanse"));
const NotFound = React.lazy(() => import("./pages/404"));

const Loader = ({ message = "Loading..." }) => <h2>{message}</h2>;

function App() {
  useEffect(() => {
    window.addEventListener("unload", () => {
      localStorage.setItem("USER_LAST_ACTION", Math.random());
    });

    window.addEventListener("popstate", () => {
      console.log("POP STATE");
    });
  }, []);

  return (
    <UserContextProvider>
      <Layout>
        <Switch>
          <Route path="/login">
            <Suspense fallback={<Loader message="Login Page is loading..." />}>
              <Login />
            </Suspense>
          </Route>

          <Route path="/register">
            <Suspense
              fallback={<Loader message="Register Page is loading..." />}
            >
              <Register />
            </Suspense>
          </Route>

          <Route path="/expanses">
            <Suspense
              fallback={<Loader message="Expanses Page is loading..." />}
            >
              <Expanse />
            </Suspense>
          </Route>

          <Route path="/expanses-user">
            <Suspense
              fallback={<Loader message="Expanses Page is loading..." />}
            >
              <Expanse />
            </Suspense>
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>

          {/* ! TODO CHECK  */}
          <Route path="*">
            <Suspense
              fallback={<Loader message="Expanses Page is loading..." />}
            >
              <NotFound />
            </Suspense>
          </Route>
        </Switch>
      </Layout>
    </UserContextProvider>
  );
}

export default App;
