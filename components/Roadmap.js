import styles from "./Roadmap.module.css";
import Reveal from "./Reveal";

const PHASES = [
  {
    phase: "Phase 00",
    state: "done",
    label: "Done",
    title: "Content foundation",
    body: "Two episodes released. Studio bumper and character roster locked.",
  },
  {
    phase: "Phase 01",
    state: "next",
    label: "Next",
    title: "Mint - 9,995 public, 5 reserved",
    body: "Allowlist gated by verified X identity, one mint per identity. Five leads held by the studio.",
  },
  {
    phase: "Phase 02",
    state: "planned",
    label: "Planned",
    title: "Agent layer goes live",
    body: "Every holder links a wallet and unlocks their in-character agent, with memory of their trades.",
  },
  {
    phase: "Phase 03",
    state: "planned",
    label: "Planned",
    title: "Tribe brain, show cameos & sponsor arcs",
    body: "Aggregate tribe sentiment, holder cameos animated into episodes, real projects sponsor new arcs with holder perks.",
  },
];

export default function Roadmap() {
  return (
    <section className={`section ${styles.section}`} id="roadmap">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">Roadmap</p>
          <h2 className={styles.title}>Honest about what&apos;s built.</h2>
          <p className={styles.lede}>
            Two phases planned, one shipped. We&apos;ll mark them done as they
            land - not before.
          </p>
        </Reveal>

        <ol className={styles.timeline}>
          {PHASES.map((p, i) => (
            <Reveal
              as="li"
              key={p.phase}
              className={styles.item}
              data-state={p.state}
              delay={i * 80}
            >
              <div className={styles.marker} aria-hidden="true">
                <span className={styles.dot} />
              </div>
              <div className={styles.content}>
                <div className={styles.metaRow}>
                  <span className={styles.phase}>{p.phase}</span>
                  <span className={styles.badge} data-state={p.state}>
                    {p.label}
                  </span>
                </div>
                <h3 className={styles.itemTitle}>{p.title}</h3>
                <p className={styles.body}>{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
