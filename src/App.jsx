import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useState } from "react";
import gsap from "gsap";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import DemoOne from "./Components/temp";
import HeroTemo from "./Components/HeroTemo";
import AboutTemp from "./Components/temp";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
      setIsLoading(false);
    }, 4500);
  }

  return (
    !isLoading && (
      <main id="app">
        <Nav />
        <Hero />
        <Skills />
        <About />
        <div className="h-screen"></div>
      </main>
    )
  );
};

export default App;
