import { For, Show } from "solid-js";
import { resume } from "../data/resume";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      style={{
        padding: "5rem 2rem",
        "max-width": "900px",
        margin: "0 auto",
      }}
    >
      <hr class="divider" style={{ "margin-bottom": "3rem" }} />

      <p class="section-label" style={{ "margin-bottom": "1rem" }}>
        02 / Experience
      </p>

      <h2
        id="experience-heading"
        style={{
          "font-size": "clamp(1.5rem, 4vw, 2.25rem)",
          "margin-bottom": "3rem",
          color: "var(--color-text-primary)",
        }}
      >
        Work History
      </h2>

      <div class="timeline" role="list">
        <For each={resume.experience}>
          {(job, i) => (
            <article
              role="listitem"
              style={{
                position: "relative",
                "padding-bottom": i() < resume.experience.length - 1 ? "3rem" : "0",
              }}
              aria-label={`${job.role} at ${job.org}`}
            >
              {/* Timeline dot */}
              <div
                class={`timeline-dot ${job.current ? "current" : ""}`}
                aria-hidden="true"
              />

              {/* Header */}
              <div style={{ "margin-bottom": "0.5rem" }}>
                <div
                  style={{
                    display: "flex",
                    "align-items": "baseline",
                    "flex-wrap": "wrap",
                    gap: "0.5rem",
                    "margin-bottom": "0.25rem",
                  }}
                >
                  <h3
                    style={{
                      "font-size": "1rem",
                      "font-weight": "600",
                      color: "var(--color-text-primary)",
                      "font-family": "var(--font-mono)",
                    }}
                  >
                    {job.role}
                  </h3>
                  {job.current && (
                    <span
                      style={{
                        "font-family": "var(--font-mono)",
                        "font-size": "0.62rem",
                        "letter-spacing": "0.08em",
                        "text-transform": "uppercase",
                        color: "var(--color-accent)",
                        border: "1px solid var(--color-accent)",
                        padding: "0.1rem 0.4rem",
                        "border-radius": "2px",
                      }}
                      aria-label="Current position"
                    >
                      Current
                    </span>
                  )}
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    "flex-wrap": "wrap",
                    "align-items": "center",
                  }}
                >
                  <span
                    style={{
                      "font-family": "var(--font-mono)",
                      "font-size": "0.78rem",
                      color: "var(--color-accent)",
                    }}
                  >
                    {job.org}
                  </span>
                  <span
                    style={{
                      "font-family": "var(--font-mono)",
                      "font-size": "0.72rem",
                      color: "var(--color-text-muted)",
                    }}
                    aria-label={`From ${job.start} to ${job.end}`}
                  >
                    {job.start} — {job.end}
                  </span>
                  <span
                    style={{
                      "font-family": "var(--font-mono)",
                      "font-size": "0.72rem",
                      color: "var(--color-text-muted)",
                    }}
                    aria-label={`Location: ${job.location}`}
                  >
                    {job.location}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  "font-size": "0.9rem",
                  "line-height": "1.7",
                  "margin-bottom": job.highlights.length > 0 ? "0.875rem" : "0",
                  "max-width": "640px",
                }}
              >
                {job.summary}
              </p>

              {/* Highlights */}
              <Show when={job.highlights.length > 0}>
                <ul
                  style={{
                    "list-style": "none",
                    display: "flex",
                    "flex-direction": "column",
                    gap: "0.5rem",
                    "max-width": "640px",
                  }}
                  aria-label={`Key accomplishments at ${job.org}`}
                >
                  <For each={job.highlights}>
                    {(point) => (
                      <li
                        style={{
                          display: "flex",
                          gap: "0.75rem",
                          "align-items": "flex-start",
                          "font-size": "0.875rem",
                          color: "var(--color-text-secondary)",
                          "line-height": "1.6",
                        }}
                      >
                        <span
                          aria-hidden="true"
                          style={{
                            color: "var(--color-accent)",
                            "font-family": "var(--font-mono)",
                            "flex-shrink": "0",
                            "margin-top": "0.1rem",
                          }}
                        >
                          →
                        </span>
                        {point}
                      </li>
                    )}
                  </For>
                </ul>
              </Show>
            </article>
          )}
        </For>
      </div>
    </section>
  );
}
