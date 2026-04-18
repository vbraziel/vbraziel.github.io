import { For } from "solid-js";
import { resume } from "../data/resume";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      style={{
        padding: "5rem 2rem",
        "max-width": "900px",
        margin: "0 auto",
      }}
    >
      <hr class="divider" style={{ "margin-bottom": "3rem" }} />

      <p class="section-label" style={{ "margin-bottom": "1rem" }}>
        03 / Skills
      </p>

      <h2
        id="skills-heading"
        style={{
          "font-size": "clamp(1.5rem, 4vw, 2.25rem)",
          "margin-bottom": "3rem",
          color: "var(--color-text-primary)",
        }}
      >
        Skill Summary
      </h2>

      <div
        style={{
          display: "flex",
          "flex-direction": "column",
          gap: "2rem",
        }}
      >
        <For each={resume.skills}>
          {(group) => (
            <div>
              <p
                style={{
                  "font-family": "var(--font-mono)",
                  "font-size": "0.68rem",
                  "letter-spacing": "0.12em",
                  "text-transform": "uppercase",
                  color: "var(--color-text-muted)",
                  "margin-bottom": "0.75rem",
                }}
                id={`skill-group-${group.category.replace(/\s+/g, "-").toLowerCase()}`}
              >
                {group.category}
              </p>
              <div
                style={{
                  display: "flex",
                  "flex-wrap": "wrap",
                  gap: "0.5rem",
                }}
                role="list"
                aria-labelledby={`skill-group-${group.category.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <For each={group.items}>
                  {(skill) => (
                    <span class="skill-chip" role="listitem">
                      {skill}
                    </span>
                  )}
                </For>
              </div>
            </div>
          )}
        </For>
      </div>
    </section>
  );
}
