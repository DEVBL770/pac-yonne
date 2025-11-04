import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Eligibility from "./components/Eligibility.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Advantages from "./components/Advantages.jsx";
import Zone from "./components/Zone.jsx";
import LogosCarousel from "./components/LogosCarousel.jsx";
import Trust from "./components/Trust.jsx";
import Disclaimer from "./components/Disclaimer.jsx";
import Footer from "./components/Footer.jsx";

export default function App(){
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Eligibility />
        <HowItWorks />
        <Advantages />
        <Zone />
        <LogosCarousel />
        <Trust />
        <Disclaimer />
      </main>
      <Footer />
    </>
  );
}
