import { For } from "solid-js";
import { resume } from "../data/resume";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      style={{
        "min-height": "100svh",
        display: "flex",
        "flex-direction": "column",
        "justify-content": "center",
        padding: "7rem 2rem 4rem",
        "max-width": "900px",
        margin: "0 auto",
      }}
    >
      {/* Pre-label */}
      <p class="section-label" style={{ "margin-bottom": "1.5rem" }}>
        // hello, world
      </p>

      {/* Name */}
      <h1
        style={{
          "font-family": "var(--font-mono)",
          "font-size": "clamp(2.4rem, 7vw, 5rem)",
          "font-weight": "600",
          "letter-spacing": "-0.03em",
          "line-height": "1.05",
          "margin-bottom": "1.25rem",
          color: "var(--color-text-primary)",
        }}
      >
        {resume.name}
        <span class="cursor" aria-hidden="true" />
      </h1>

      {/* Title */}
      <p
        style={{
          "font-family": "var(--font-mono)",
          "font-size": "clamp(0.85rem, 2vw, 1.05rem)",
          color: "var(--color-accent)",
          "letter-spacing": "0.04em",
          "margin-bottom": "1.5rem",
        }}
      >
        {resume.title}
      </p>

      {/* Tagline */}
      <p
        style={{
          "font-size": "clamp(1rem, 2.5vw, 1.3rem)",
          color: "var(--color-text-secondary)",
          "max-width": "540px",
          "line-height": "1.6",
          "font-weight": "300",
          "margin-bottom": "2.5rem",
        }}
      >
        {resume.tagline}
      </p>

      {/* Social links */}
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          "flex-wrap": "wrap",
          "margin-bottom": "4rem",
        }}
      >
        <For each={Object.values(resume.social)}>
          {(link) => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                "font-family": "var(--font-mono)",
                "font-size": "0.78rem",
                "letter-spacing": "0.06em",
                "text-transform": "uppercase",
                color: "var(--color-text-secondary)",
                display: "flex",
                "align-items": "center",
                gap: "0.4rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-secondary)")
              }
              aria-label={`${link.label} profile (opens in new tab)`}
            >
              <span aria-hidden="true">↗</span>
              {link.label}
            </a>
          )}
        </For>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          display: "flex",
          "align-items": "center",
          gap: "0.75rem",
        }}
        aria-hidden="true"
      >
        <div
          style={{
            width: "1px",
            height: "48px",
            background:
              "linear-gradient(to bottom, transparent, var(--color-accent))",
          }}
        />
        <span
          style={{
            "font-family": "var(--font-mono)",
            "font-size": "0.65rem",
            "letter-spacing": "0.12em",
            "text-transform": "uppercase",
            color: "var(--color-text-muted)",
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
