// Project configuration

// 3rd party dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

// Components created
import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
