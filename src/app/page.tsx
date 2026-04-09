"use client";

import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import About from "../components/About";
import Stats from "../components/Stats";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Contact from "../components/Contact";

function TypedEffect() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const typedStrings = [
      "I'm A Freelancer",
      "I'm A Mobile Application Developer",
      "I'm A Full-Stack Developer",
    ];

    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: number;

    const tick = () => {
      const currentString = typedStrings[stringIndex];

      if (!isDeleting) {
        charIndex += 1;
        setTypedText(currentString.substring(0, charIndex));
        if (charIndex === currentString.length) {
          isDeleting = true;
          timeoutId = window.setTimeout(tick, 2000);
          return;
        }
      } else {
        charIndex -= 1;
        setTypedText(currentString.substring(0, charIndex));
        if (charIndex === 0) {
          isDeleting = false;
          stringIndex = (stringIndex + 1) % typedStrings.length;
        }
      }

      timeoutId = window.setTimeout(tick, isDeleting ? 50 : 100);
    };

    timeoutId = window.setTimeout(tick, 100);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <span className="typed">{typedText}</span>
      <span className="typed-cursor typed-cursor--blink" aria-hidden="true">
        |
      </span>
    </>
  );
}

export default function Home() {
  return (
    <main className="main">
      <Toaster position="top-center" />
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background">
        <img
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
            opacity: 1,
          }}
          src="/assets/img/hero-bg.jpg"
          alt="Hero Background"
        />
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <h2>Dagim Abraham</h2>
          <p>
            <TypedEffect />
          </p>
        </div>
      </section>

      <About />
      <Stats />
      <Skills />
      <Portfolio />
      <Services />
      <Contact />
    </main>
  );
}
