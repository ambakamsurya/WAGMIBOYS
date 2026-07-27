import styles from "./HowItWorks.module.css";
import Reveal from "./Reveal";

const PHASES = [
  {
    tag: "Phase 00",
    status: "Live",
    live: true,
    title: "The Show",
    body: "Animated episodes built around real crypto arcs - Season 1 follows $ANSEM. Free to watch, no NFT required. Meet the tribe before you own a piece of it.",
  },
  {
    tag: "Phase 01",
    status: "Mint",
    live: false,
    title: "10,000 Agents",
    body: "Each public PFP carries one of five tribe psychologies. Hold one and it becomes the personality behind your own companion.",
  },
  {
    tag: "Phase 02",
    status: "Hive Mind",
    live: false,
    title: "The Tribe Brain",
    body: "Link your wallets, opt in, and your agent joins a live read of what the whole tribe is feeling.",
  },
];

export default function HowItWorks() {
  return (
    <section className={`section ${styles.section}`} id="how">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">How It Works</p>
          <h2 className={styles.title}>Five idiots. One conviction.</h2>
          <p className={styles.lede}>
            A show first. A tribe second. A brain after that.
          </p>
        </Reveal>

        <ul className={styles.grid}>
          {PHASES.map((p, i) => (
            <Reveal as="li" key={p.tag} className={styles.col} delay={i * 90}>
              <div className={styles.colTop}>
                <span className={styles.tag}>{p.tag}</span>
                <span
                  className={`${styles.status} ${p.live ? styles.statusLive : ""}`}
                >
                  {p.live && <span className={styles.dot} aria-hidden="true" />}
                  {p.status}
                </span>
              </div>
              <h3 className={styles.colTitle}>{p.title}</h3>
              <p className={styles.colBody}>{p.body}</p>
              <span className={styles.index} aria-hidden="true">
                0{i}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
