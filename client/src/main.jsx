import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { UserAuthProvider } from "./Context/userAuthContext";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserAuthProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
          <ToastContainer position="bottom-center" theme="dark"/>
        </BrowserRouter>
      </Provider>
    </UserAuthProvider>
  </React.StrictMode>
);
