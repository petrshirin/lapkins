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
    const mainRef = "main";
    const aboutUsRef = "aboutUs";
    const servicesRef = "servicesRef";
    const PortfolioRef = "portfolioRef";
    const contactsRef = "contactsRef";

  return (
    <div className="App">
      <SiteHeader goToRef={mainRef}
                  aboutUsRef={aboutUsRef}
                  servicesRef={servicesRef}
                  portfolioRef={PortfolioRef}
                  contactsRef={contactsRef} />
      <AboutAs goToRef={aboutUsRef}/>
      <GroomingServices goToRef={servicesRef}/>
      <Portfolio goToRef={PortfolioRef}/>
      <MasterClass />
      <WhereMe />
      <SiteFooter goToRef={contactsRef}
                  siteHeaderRef={mainRef}
                  aboutUsRef={aboutUsRef}
                  servicesRef={servicesRef}
                  portfolioRef={PortfolioRef}/>
    </div>
  );
}

export default App;
