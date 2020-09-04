import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { Navbox } from "./Components/Navbox";
import { About } from "./Components/About";

function App() {
  return (
    <div className="App">
      <h1>Danny Wu</h1>
      <Navbox></Navbox>
      <About></About>
    </div>
  );
}

export default App;
