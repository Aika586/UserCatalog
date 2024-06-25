import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";
import Router from "./pages/Router/Router.tsx";




ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <Router/>
    </React.StrictMode>
    ,
  </Provider>
);
