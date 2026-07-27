import styles from "./Season1.module.css";
import Reveal from "./Reveal";

const EPISODES = [
  {
    ep: "EP.01",
    title: "We're So Early",
    blurb:
      "The tribe discovers a name spreading through the trenches - and decides he's the one.",
    status: "Released",
    released: true,
    href: "https://x.com/Wagmi_Boys/status/2076990562209816701?s=20",
  },
  {
    ep: "EP.02",
    title: "On the Road",
    blurb: "Atlanta, wrong. Manhattan, wrong. Brooklyn - there he is.",
    status: "Released",
    released: true,
    href: "https://x.com/Wagmi_Boys/status/2078198394854740168?s=20",
  },
  {
    ep: "EP.03",
    title: "To be announced",
    blurb: "Season 1 continues.",
    status: "In Production",
    released: false,
    href: null,
  },
];

export default function Season1() {
  return (
    <section className={`section ${styles.section}`} id="season1">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">Season 01 - &ldquo;We&apos;re So Early&rdquo;</p>
          <h2 className={styles.title}>The tribe finds its first master.</h2>
        </Reveal>

        <ul className={styles.list}>
          {EPISODES.map((e, i) => (
            <Reveal as="li" key={e.ep} className={styles.row} delay={i * 60}>
              <div className={styles.epMeta}>
                <span className={styles.ep}>{e.ep}</span>
                <span
                  className={`${styles.status} ${
                    e.released ? styles.released : styles.production
                  }`}
                >
                  {e.status}
                </span>
              </div>

              <div className={styles.epMain}>
                <h3 className={styles.epTitle}>{e.title}</h3>
                <p className={styles.blurb}>{e.blurb}</p>
              </div>

              <div className={styles.epAction}>
                {e.released ? (
                  <a
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn--ghost ${styles.watch}`}
                    aria-label={`Watch ${e.ep} - ${e.title} (opens on X)`}
                  >
                    <span aria-hidden="true">▶</span> Watch
                  </a>
                ) : (
                  <span className={styles.soon}>Coming soon</span>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
        <p className={styles.linkNote}>
          Episodes play on X - Watch opens the post in a new tab.
        </p>
      </div>
    </section>
  );
}
