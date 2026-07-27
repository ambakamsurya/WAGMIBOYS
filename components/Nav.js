"use client";

import { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import { XIcon } from "./Icons";

const LINKS = [
  { href: "#tribe", label: "The Tribe" },
  { href: "#how", label: "How It Works" },
  { href: "#season1", label: "Season 1" },
  { href: "#roadmap", label: "Roadmap" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      data-open={open ? "true" : "false"}
    >
      <nav className={styles.nav} aria-label="Primary">
        <a href="#top" className={styles.logo} onClick={() => setOpen(false)}>
          WAGMI<span className={styles.logoAccent}>BOYS</span>
        </a>

        <ul className={styles.links}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={styles.link}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.right}>
          <a
            href="https://x.com/Wagmi_Boys"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.xLink}
            aria-label="WAGMI Boys on X (opens in new tab)"
          >
            <XIcon />
          </a>
          <a href="#mint" className={`btn btn--primary ${styles.mint}`}>
            Mint Access
          </a>
          <button
            type="button"
            className={styles.burger}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div
        id="mobile-menu"
        className={styles.mobile}
        hidden={!open}
        aria-hidden={!open}
      >
        <ul className={styles.mobileLinks}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#mint"
          className={`btn btn--primary ${styles.mobileMint}`}
          onClick={() => setOpen(false)}
        >
          Mint Access
        </a>
        <a
          href="https://x.com/Wagmi_Boys"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mobileX}
          onClick={() => setOpen(false)}
        >
          <XIcon size={16} /> @Wagmi_Boys
        </a>
      </div>
    </header>
  );
}
