import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./containers/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { enthusiasm } from "./reducers/index";
import { StoreState } from "./types/index";
import { EnthusiasmAction } from "./actions/index";
import "./index.css";
import { AppRouter } from "./router";
const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: "TypeScript"
});

ReactDOM.render(
  <div>
    <AppRouter />
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById("root") as HTMLElement
);
