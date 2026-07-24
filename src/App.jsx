import "./styles/global.css";
import "./styles/variables.css";
import "./styles/animations.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import CareerJourney from "./components/CareerJourney/CareerJourney";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <CareerJourney />
    </>
  );
}

export default App;