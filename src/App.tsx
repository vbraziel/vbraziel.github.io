import { onMount } from "solid-js";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Credentials } from "./components/Credentials";
import { Contact } from "./components/Contact";

export function App() {
  onMount(() => {
    // Scroll-reveal via IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    // Observe all section children (stagger via CSS animation-delay)
    document
      .querySelectorAll("section > *:not(style)")
      .forEach((el, i) => {
        el.classList.add("reveal");
        (el as HTMLElement).style.animationDelay = `${i * 0.06}s`;
        observer.observe(el);
      });

    return () => observer.disconnect();
  });

  return (
    <>
      <a
        href="#about"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          "z-index": 999,
          background: "var(--color-surface)",
          color: "var(--color-accent)",
          padding: "0.5rem 1rem",
          "font-family": "var(--font-mono)",
          "font-size": "0.875rem",
        }}
        onFocus={(e) => {
          e.currentTarget.style.left = "1rem";
          e.currentTarget.style.top = "1rem";
          e.currentTarget.style.width = "auto";
          e.currentTarget.style.height = "auto";
        }}
        onBlur={(e) => {
          e.currentTarget.style.left = "-9999px";
          e.currentTarget.style.top = "auto";
          e.currentTarget.style.width = "1px";
          e.currentTarget.style.height = "1px";
        }}
      >
        Skip to main content
      </a>

      <Nav />

      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Credentials />
        <Contact />
      </main>
    </>
  );
}
