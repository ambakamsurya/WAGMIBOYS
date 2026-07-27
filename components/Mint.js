import styles from "./Mint.module.css";
import Reveal from "./Reveal";

export default function Mint() {
  return (
    <section className={`section ${styles.section}`} id="mint">
      <div className="container">
        <Reveal className={styles.card}>
          <div className={styles.left}>
            <p className="eyebrow">Phase 01 - Mint</p>
            <h2 className={styles.title}>Join the allowlist.</h2>
            <p className={styles.copy}>
              9,995 public, 5 reserved. Allowlist is gated by verified X
              identity - one mint per identity. Get on the list before the
              trenches figure it out.
            </p>

            <div className={styles.ctas}>
              <a
                href="https://x.com/Wagmi_Boys"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Get on the allowlist
              </a>
              <a href="#season1" className="btn btn--ghost">
                Watch the show first
              </a>
            </div>
          </div>

          {/* mint facts - placeholders until set. Do not invent these. */}
          <dl className={styles.facts}>
            <div className={styles.fact}>
              <dt>Price</dt>
              <dd className={styles.tba}>[PRICE TBA]</dd>
            </div>
            <div className={styles.fact}>
              <dt>Mint date</dt>
              <dd className={styles.tba}>[DATE TBA]</dd>
            </div>
            <div className={styles.fact}>
              <dt>Supply</dt>
              <dd>10,000</dd>
            </div>
            <div className={styles.fact}>
              <dt>Contract</dt>
              <dd className={styles.tba}>[live after deploy]</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
