// import { useState } from 'react'
import "./General.css"
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
      </main>
    </>
  );
}

export default App;
