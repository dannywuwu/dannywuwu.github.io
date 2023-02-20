import React from "react";
// import logo from './logo.svg';
import "./res/styles/App.scss";
import { Intro } from "./components/Intro";
import { Profile } from "./components/Profile";
import { About } from "./components/About";
import { News } from "./components/News";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Intro></Intro>
      <Profile></Profile>
      <About></About>
      <News></News>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
