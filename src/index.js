import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router } from "react-router-dom";

const el=document.getElementById("root");
const root=ReactDOM.createRoot(el);

root.render(
            <Router>
                <Provider store={store}>
                <App/>
                </Provider>
            </Router>
)