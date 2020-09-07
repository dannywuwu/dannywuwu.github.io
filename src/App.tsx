import React from "react";
// import logo from './logo.svg';
import "./res/styles/App.scss";
import { Navbox } from "./components/Navbox";
import { About } from "./components/About";

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
