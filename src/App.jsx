import "./General.css"
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedIn from "./components/FeaturedIn";
import HowItWorks from "./components/HowItWorks";
import Meals from "./components/Meals";
import Feedback from "./components/Feedback";
import Pricing from "./components/Pricing";
import Cta from "./components/Cta";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedIn />
        <HowItWorks />
        <Meals />
        <Feedback />
        <Pricing />
        <Cta />
      </main>
    </>
  );
}

export default App;
