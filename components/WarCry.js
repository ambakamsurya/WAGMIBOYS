import styles from "./WarCry.module.css";

/**
 * The signature "war-cry band" - full-width amber strip, ink text,
 * Space Grotesk bold + letter-spaced, centered. Slow amber-glow pulse.
 * `intensity` (1-3) escalates the chant as you scroll down the page.
 */
export default function WarCry({ children, intensity = 1 }) {
  return (
    <aside
      className={styles.band}
      data-intensity={intensity}
      role="presentation"
    >
      <div className={styles.inner}>
        <p className={styles.line}>{children}</p>
      </div>
    </aside>
  );
}
