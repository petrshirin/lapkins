import React from "react"
import './App.css'
import SiteHeader from "./components/siteHeader/siteHeader"
import AboutAs from "./components/AboutAs/AboutAs";
import GroomingServices from "./components/GroomingServices/GroomingServices";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <AboutAs />
      <GroomingServices />
      <Portfolio />
    </div>
  );
}

export default App;
