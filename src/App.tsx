import React from "react";
// import logo from './logo.svg';
import "./res/styles/App.scss";
import { About } from "./components/About";
import { Timeline } from "./components/Timeline";
import { Contact } from "./components/Contact";
import { Intro } from "./components/Intro";

function App() {
  return (
    <div className="App">
      <Intro></Intro>
      <About></About>
      <Timeline></Timeline>
      <Contact></Contact>
    </div>
  );
}

export default App;
