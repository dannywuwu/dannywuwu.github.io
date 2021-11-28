import React from "react";
// import logo from './logo.svg';
import "./res/styles/App.scss";
import { About } from "./components/About";
import { News } from "./components/News";
import { Contact } from "./components/Contact";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Intro></Intro>
      <About></About>
      <News></News>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
