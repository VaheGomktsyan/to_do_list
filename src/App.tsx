import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { MyRouter } from "./components/MyRouter";
import { Menu } from "./components/Menu";

function App() {
    return (
        <div>
            <Menu/>
            <MyRouter />
        </div>
    );
}

export default App;
