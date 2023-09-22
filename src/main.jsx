import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/main.scss";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import * as bootstrap from "bootstrap";
import router from "./router/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={3500}
      pauseOnHover
      draggable={false}
    />
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
