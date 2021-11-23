import React from "react";
// import logo from './logo.svg';
import "./res/styles/App.scss";
import { Navbox } from "./components/Navbox";
import { About } from "./components/About";
import { Timeline } from "./components/Timeline";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App">
      <h1>Danny Wu</h1>
      <Navbox></Navbox>
      <About></About>
      <Timeline></Timeline>
      <Contact></Contact>
    </div>
  );
}

export default App;
