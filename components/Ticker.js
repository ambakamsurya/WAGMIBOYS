import styles from "./Ticker.module.css";

const ITEMS = [
  "GM TRENCHES",
  "WE'RE SO EARLY",
  "NUGGET SAYS ITS A RUG",
  "WAGMI",
  "FLOSS IS HYPNOTISED AGAIN",
  "10,000 AGENTS SOON",
];

function Track({ ariaHidden }) {
  return (
    <div className={styles.track} aria-hidden={ariaHidden ? "true" : undefined}>
      {ITEMS.map((item, i) => (
        <span className={styles.item} key={i}>
          {item}
          <span className={styles.dot} aria-hidden="true">
            ·
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className={styles.ticker} role="marquee" aria-label="WAGMI Boys news ticker">
      <div className={styles.marquee}>
        {/* two identical tracks for a seamless loop */}
        <Track />
        <Track ariaHidden />
      </div>
    </div>
  );
}
