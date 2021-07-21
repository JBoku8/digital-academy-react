import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";
import ErrorBoundary from "./components/ErrorBoundary";

import App from "./App";
import "./index.css";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("app")
);
