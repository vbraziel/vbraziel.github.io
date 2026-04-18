import { For, Show } from "solid-js";
import { resume } from "../data/resume";

export function Credentials() {
  return (
    <section
      id="credentials"
      aria-labelledby="credentials-heading"
      style={{
        padding: "5rem 2rem",
        "max-width": "900px",
        margin: "0 auto",
      }}
    >
      <hr class="divider" style={{ "margin-bottom": "3rem" }} />

      <p class="section-label" style={{ "margin-bottom": "1rem" }}>
        04 / Credentials
      </p>

      <h2
        id="credentials-heading"
        style={{
          "font-size": "clamp(1.5rem, 4vw, 2.25rem)",
          "margin-bottom": "3rem",
          color: "var(--color-text-primary)",
        }}
      >
        Education & Certifications
      </h2>

      <div
        style={{
          display: "grid",
          "grid-template-columns": "1fr",
          gap: "3rem",
        }}
        class="credentials-grid"
      >
        {/* Education */}
        <div>
          <h3
            style={{
              "font-family": "var(--font-mono)",
              "font-size": "0.72rem",
              "letter-spacing": "0.12em",
              "text-transform": "uppercase",
              color: "var(--color-text-muted)",
              "margin-bottom": "1.25rem",
            }}
          >
            Education
          </h3>
          <ul style={{ "list-style": "none", display: "flex", "flex-direction": "column", gap: "1rem" }}>
            <For each={resume.credentials.education}>
              {(edu) => (
                <li
                  style={{
                    "border-left": "1px solid var(--color-border)",
                    "padding-left": "1rem",
                  }}
                >
                  <Show
                    when={edu.link}
                    fallback={
                      <p
                        style={{
                          "font-size": "0.9rem",
                          color: "var(--color-text-primary)",
                          "font-family": "var(--font-mono)",
                          "line-height": "1.4",
                        }}
                      >
                        {edu.degree}
                      </p>
                    }
                  >
                    <a
                      href={edu.link!}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        "font-size": "0.9rem",
                        "font-family": "var(--font-mono)",
                        "line-height": "1.4",
                        display: "block",
                      }}
                      aria-label={`${edu.degree} — view credential (opens in new tab)`}
                    >
                      {edu.degree}
                    </a>
                  </Show>
                  <p
                    style={{
                      "font-family": "var(--font-mono)",
                      "font-size": "0.72rem",
                      color: "var(--color-text-muted)",
                      "margin-top": "0.25rem",
                    }}
                  >
                    {edu.institution}
                  </p>
                </li>
              )}
            </For>
          </ul>
        </div>

        {/* Certifications */}
        <div>
          <h3
            style={{
              "font-family": "var(--font-mono)",
              "font-size": "0.72rem",
              "letter-spacing": "0.12em",
              "text-transform": "uppercase",
              color: "var(--color-text-muted)",
              "margin-bottom": "1.25rem",
            }}
          >
            Certifications
          </h3>
          <ul style={{ "list-style": "none", display: "flex", "flex-direction": "column", gap: "0.75rem" }}>
            <For each={resume.credentials.certifications}>
              {(cert) => (
                <li
                  style={{
                    display: "flex",
                    "align-items": "baseline",
                    "justify-content": "space-between",
                    gap: "1rem",
                    "padding-bottom": "0.75rem",
                    "border-bottom": "1px solid var(--color-border)",
                  }}
                >
                  <Show
                    when={cert.link}
                    fallback={
                      <span
                        style={{
                          "font-family": "var(--font-mono)",
                          "font-size": "0.875rem",
                          color: "var(--color-text-primary)",
                        }}
                      >
                        {cert.name}
                      </span>
                    }
                  >
                    <a
                      href={cert.link!}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        "font-family": "var(--font-mono)",
                        "font-size": "0.875rem",
                      }}
                      aria-label={`${cert.name} — view credential (opens in new tab)`}
                    >
                      {cert.name}
                    </a>
                  </Show>
                  <span
                    style={{
                      "font-family": "var(--font-mono)",
                      "font-size": "0.7rem",
                      color: "var(--color-text-muted)",
                      "flex-shrink": "0",
                    }}
                    aria-label={`Earned in ${cert.year}`}
                  >
                    {cert.year}
                  </span>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .credentials-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
