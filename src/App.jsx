// import { useState } from 'react'
import "./General.css"
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedIn from "./components/FeaturedIn";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedIn />
        <HowItWorks />
      </main>
    </>
  );
}

export default App;
