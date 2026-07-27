import styles from "./Utility.module.css";
import Reveal from "./Reveal";

const ROWS = [
  {
    when: "At mint",
    what: "One of 10,000 WAGMI Boys. Into the tribe, into the story.",
  },
  {
    when: "Phase 02",
    what: "Your agent, in character, with memory. It watches your linked wallets and remembers what you did - and it will bring up that top you bought three weeks ago.",
  },
  {
    when: "Phase 02",
    what: "Link multiple wallets under one identity so your agent sees the whole picture.",
  },
  {
    when: "Phase 03",
    what: "Get written into the show. The tribe's most diamond-handed holders each season can earn their actual PFP animated into an episode as canon. (Planned.)",
  },
  {
    when: "Phase 03",
    what: "The Tribe Brain - the whole tribe's mood, delivered as the characters arguing about it.",
  },
  {
    when: "Phase 03",
    what: "Early access to sponsor drops from real projects we partner with.",
  },
  {
    when: "Forever",
    what: "The 5 leads stay studio IP. The story never gets sold out from under the show.",
  },
];

export default function Utility() {
  return (
    <section className={`section ${styles.section}`} id="utility">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">What You Actually Get</p>
          <h2 className={styles.title}>
            What holding a WAGMI Boy actually gets you.
          </h2>
        </Reveal>

        <Reveal className={styles.table}>
          <div className={styles.thead} aria-hidden="true">
            <span>When</span>
            <span>What</span>
          </div>
          <ul>
            {ROWS.map((r, i) => (
              <li className={styles.row} key={i}>
                <span className={styles.when}>{r.when}</span>
                <span className={styles.what}>{r.what}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="p" className={styles.disclaimer}>
          Utility and access - not an investment. Nothing here promises profit
          or return.
        </Reveal>
      </div>
    </section>
  );
}
