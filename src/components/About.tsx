import { For } from "solid-js";
import { resume } from "../data/resume";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      style={{
        padding: "5rem 2rem",
        "max-width": "900px",
        margin: "0 auto",
      }}
    >
      <hr class="divider" style={{ "margin-bottom": "3rem" }} />

      <p class="section-label" style={{ "margin-bottom": "1rem" }}>
        01 / About
      </p>

      <h2
        id="about-heading"
        style={{
          "font-size": "clamp(1.5rem, 4vw, 2.25rem)",
          "margin-bottom": "2rem",
          color: "var(--color-text-primary)",
        }}
      >
        Software Engineer/
        <wbr />
        Architecting/
        <wbr />
        IT Specialist
      </h2>

      <div
        style={{
          display: "grid",
          "grid-template-columns": "1fr",
          gap: "3rem",
        }}
        class="about-grid"
      >
        {/* Summary */}
        <p
          style={{
            color: "var(--color-text-secondary)",
            "font-size": "1.05rem",
            "line-height": "1.8",
            "max-width": "620px",
          }}
        >
          {resume.summary}
        </p>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            "grid-template-columns": "repeat(2, 1fr)",
            gap: "1px",
            background: "var(--color-border)",
            border: "1px solid var(--color-border)",
            width: "fit-content",
          }}
          role="list"
          aria-label="Career highlights"
        >
          <For each={resume.stats}>
            {(stat) => (
              <div class="stat-card" role="listitem">
                <div class="stat-value" aria-label={`${stat.value} ${stat.label}`}>
                  {stat.value}
                </div>
                <div class="stat-label" aria-hidden="true">
                  {stat.label}
                </div>
              </div>
            )}
          </For>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr auto !important;
            align-items: start;
          }
        }
      `}</style>
    </section>
  );
}
