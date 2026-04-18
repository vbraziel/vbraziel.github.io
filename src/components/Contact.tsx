import { For } from "solid-js";
import { resume } from "../data/resume";

const contactItems = [
  {
    label: "Email",
    value: resume.email,
    href: `mailto:${resume.email}`,
  },
  {
    label: "Location",
    value: resume.location,
    href: null,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{
        padding: "5rem 2rem 8rem",
        "max-width": "900px",
        margin: "0 auto",
      }}
    >
      <hr class="divider" style={{ "margin-bottom": "3rem" }} />

      <p class="section-label" style={{ "margin-bottom": "1rem" }}>
        05 / Contact
      </p>

      <h2
        id="contact-heading"
        style={{
          "font-size": "clamp(1.5rem, 4vw, 2.25rem)",
          "margin-bottom": "1rem",
          color: "var(--color-text-primary)",
        }}
      >
        Get in Touch
      </h2>

      <p
        style={{
          color: "var(--color-text-secondary)",
          "font-size": "1rem",
          "max-width": "500px",
          "margin-bottom": "3rem",
          "line-height": "1.7",
        }}
      >
        Open to new opportunities, collaborations, and interesting conversations
        about software, systems, and the future of web engineering.
      </p>

      {/* Contact table */}
      <dl
        style={{
          display: "flex",
          "flex-direction": "column",
          gap: "0",
          "max-width": "480px",
          border: "1px solid var(--color-border)",
        }}
      >
        <For each={contactItems}>
          {(item) => (
            <div
              style={{
                display: "grid",
                "grid-template-columns": "100px 1fr",
                "border-bottom": "1px solid var(--color-border)",
              }}
            >
              <dt
                style={{
                  "font-family": "var(--font-mono)",
                  "font-size": "0.68rem",
                  "letter-spacing": "0.1em",
                  "text-transform": "uppercase",
                  color: "var(--color-text-muted)",
                  padding: "0.875rem 1rem",
                  background: "var(--color-surface)",
                  display: "flex",
                  "align-items": "center",
                  "border-right": "1px solid var(--color-border)",
                }}
              >
                {item.label}
              </dt>
              <dd
                style={{
                  padding: "0.875rem 1rem",
                  "font-family": "var(--font-mono)",
                  "font-size": "0.85rem",
                  display: "flex",
                  "align-items": "center",
                }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    aria-label={`${item.label}: ${item.value}`}
                    style={{ color: "var(--color-text-primary)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--color-accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--color-text-primary)")
                    }
                  >
                    {item.value}
                  </a>
                ) : (
                  <span style={{ color: "var(--color-text-primary)" }}>
                    {item.value}
                  </span>
                )}
              </dd>
            </div>
          )}
        </For>
      </dl>

      {/* Social links */}
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          "flex-wrap": "wrap",
          "margin-top": "2.5rem",
        }}
        aria-label="Social profiles"
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
                display: "inline-flex",
                "align-items": "center",
                gap: "0.4rem",
                transition: "color 0.2s",
              }}
              aria-label={`${link.label} (opens in new tab)`}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-secondary)")
              }
            >
              <span aria-hidden="true">↗</span>
              {link.label}
            </a>
          )}
        </For>
      </div>

      {/* Footer */}
      <p
        style={{
          "margin-top": "5rem",
          "font-family": "var(--font-mono)",
          "font-size": "0.68rem",
          color: "var(--color-text-muted)",
          "letter-spacing": "0.06em",
        }}
        aria-label="Site footer"
      >
        © {new Date().getFullYear()} Vance E. Braziel · Built with SolidJS +
        Vite
      </p>
    </section>
  );
}
