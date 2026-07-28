import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.inner}`}>
        <h1 className={styles.headline}>
          We&apos;re <span className={styles.soEarly}>So Early.</span>
        </h1>

        <p className={styles.sub}>
          A tribe of 10,000 degens who have no idea what they&apos;re doing -
          and are absolutely going to make it anyway.
        </p>

        <div className={styles.ctas}>
          <a href="#mint" className="btn btn--primary">
            Join the allowlist
          </a>
          <a href="#season1" className="btn btn--ghost">
            <span className={styles.play} aria-hidden="true">
              ▶
            </span>
            Watch Episode 1
          </a>
        </div>

        <ul className={styles.stats}>
          <li>
            <span className={styles.statNum}>10,000</span>
            <span className={styles.statLabel}>agents</span>
          </li>
          <li className={styles.statDivider} aria-hidden="true" />
          <li>
            <span className={styles.statNum}>5</span>
            <span className={styles.statLabel}>tribe leads</span>
          </li>
          <li className={styles.statDivider} aria-hidden="true" />
          <li>
            <span className={styles.statNum}>S1</span>
            <span className={styles.statLabel}>live now</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
