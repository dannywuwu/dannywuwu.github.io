import React from "react";
// import logo from './logo.svg';
import "./res/styles/App.scss";
import { About } from "./components/About";
import { News } from "./components/News";
import { Contact } from "./components/Contact";
import { Intro } from "./components/Intro";

function App() {
  return (
    <div className="App">
      <Intro></Intro>
      <About></About>
      <News></News>
      <Contact></Contact>
    </div>
  );
}

export default App;
