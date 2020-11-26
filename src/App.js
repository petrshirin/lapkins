import React from "react"
import './App.css'
import SiteHeader from "./components/siteHeader/siteHeader"
import AboutAs from "./components/AboutAs/AboutAs";
import GroomingServices from "./components/GroomingServices/GroomingServices";
import Portfolio from "./components/Portfolio/Portfolio";
import MasterClass from "./components/MasterClass/MasterClass"
import WhereMe from "./components/WhereMe/WhereMe"
import SiteFooter from  "./components/SiteFooter/SiteFooter"


function App() {
  return (
    <div className="App">
      <SiteHeader />
      <AboutAs />
      <GroomingServices />
      <Portfolio />
      <MasterClass />
      <WhereMe />
      <SiteFooter />
    </div>
  );
}

export default App;
