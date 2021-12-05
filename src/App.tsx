import React from "react";
// import logo from './logo.svg';
import "./res/styles/App.scss";
import { Intro } from "./components/Intro";
import { About } from "./components/About";
import { Stats } from "./components/Stats";
import { Header } from "./components/Header";
import { News } from "./components/News";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header>
        <Intro></Intro>
        <About></About>
        <Stats></Stats>
      </Header>
      <News></News>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
