import React from "react";
import Home from "./commponents/Home";
import Header from "./commponents/Header";
import Intro from "./commponents/Intro";
import About from "./commponents/About";
import Services from "./commponents/Services";
import History from "./commponents/History";
import Works from "./commponents/Works";
import Contact from "./commponents/Contact";

function App() {


  return (
    <div className="App">
      <Home />
      <div className="cont">
        <Header />
        <Intro />
        <About />
        <Services />
        <History />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;

// --------git reloyad--------

// git add .
// git commit -m "Fixed for deployment"
// git push origin main

// npm run build
// npm run deploy
