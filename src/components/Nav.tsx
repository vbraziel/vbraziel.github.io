import { createSignal, onMount, onCleanup, For } from "solid-js";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = createSignal(false);
  const [active, setActive] = createSignal("");
  const [menuOpen, setMenuOpen] = createSignal(false);

  onMount(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section tracking
      const sections = navLinks.map((l) =>
        document.querySelector(l.href) as HTMLElement | null
      );
      let current = "";
      for (const el of sections) {
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) {
          current = `#${el.id}`;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onCleanup(() => window.removeEventListener("scroll", onScroll));
  });

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        "z-index": 50,
        "border-bottom": `1px solid ${scrolled() ? "var(--color-border)" : "transparent"}`,
        "background-color": scrolled()
          ? "rgba(8, 8, 8, 0.92)"
          : "transparent",
        "backdrop-filter": scrolled() ? "blur(12px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <nav
        style={{
          "max-width": "900px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "56px",
          display: "flex",
          "align-items": "center",
          "justify-content": "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#top"
          style={{
            "font-family": "var(--font-mono)",
            "font-size": "0.85rem",
            "font-weight": "600",
            color: "var(--color-text-primary)",
            "letter-spacing": "0.04em",
          }}
        >
          vbraziel
          <span style={{ color: "var(--color-accent)" }}>.dev</span>
        </a>

        {/* Desktop nav */}
        <div
          style={{
            display: "flex",
            gap: "2rem",
            "align-items": "center",
          }}
          class="desktop-nav"
        >
          <For each={navLinks}>
            {(link) => (
              <a
                href={link.href}
                class={`nav-link ${active() === link.href ? "active" : ""}`}
              >
                {link.label}
              </a>
            )}
          </For>
        </div>

        {/* Mobile menu button */}
        <button
          class="mobile-menu-btn"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen()}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: "var(--color-text-primary)",
            display: "none",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          >
            {menuOpen() ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen() && (
        <div
          style={{
            background: "var(--color-surface)",
            "border-top": "1px solid var(--color-border)",
            padding: "1rem 2rem",
            display: "flex",
            "flex-direction": "column",
            gap: "1rem",
          }}
        >
          <For each={navLinks}>
            {(link) => (
              <a
                href={link.href}
                class={`nav-link ${active() === link.href ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            )}
          </For>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
