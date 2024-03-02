import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Navbar } from "./pages/NavBar/Nav";
import "./index.css";
import { Routers } from "./pages/Routes/router";
import { BrowserRouter, Routes } from "react-router-dom";
import { Footer } from "./pages/Footer/footer.js";
import { RecoilRoot } from "recoil";
import { App } from "./App.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
const FinalRender = () => {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
};
root.render(<FinalRender />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
