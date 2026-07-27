import styles from "./Footer.module.css";
import { XIcon } from "./Icons";

const NAV = [
  { href: "#tribe", label: "The Tribe" },
  { href: "#how", label: "How It Works" },
  { href: "#season1", label: "Season 1" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#mint", label: "Mint Access" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brandCol}>
          <a href="#top" className={styles.logo}>
            WAGMI<span className={styles.accent}>BOYS</span>
          </a>
          <p className={styles.tagline}>
            built by one degen and Claude Code
          </p>
          <a
            href="https://x.com/Wagmi_Boys"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.xLink}
          >
            <XIcon size={16} />
            @Wagmi_Boys
          </a>
        </div>

        <nav className={styles.nav} aria-label="Footer">
          <span className={styles.navHead}>Explore</span>
          <ul>
            {NAV.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.meta}>
          <span className={styles.navHead}>Official</span>
          <p className={styles.domain}>wagmiboys.xyz</p>
          <p className={styles.fine}>
            Utility and access - not an investment. Nothing here promises profit
            or return.
          </p>
        </div>
      </div>

      <p className={styles.copyright}>
        <span>© {new Date().getFullYear()} WAGMI Boys.</span>
        <span>WAGMI.</span>
      </p>
    </footer>
  );
}
