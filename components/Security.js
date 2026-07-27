import styles from "./Security.module.css";
import Reveal from "./Reveal";

export default function Security() {
  return (
    <section className={styles.section} aria-labelledby="security-heading">
      <div className="container">
        <Reveal className={styles.inner}>
          <div className={styles.shield} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
              <path
                d="M12 2.5 4 5.5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-6l-8-3Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="m8.6 12 2.3 2.3 4.5-4.6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className="eyebrow">Stay Safe</p>
            <h2 id="security-heading" className={styles.title}>
              Stay safe out there, tribe.
            </h2>
            <p className={styles.copy}>
              We&apos;ll never DM you first. We&apos;ll never ask you to
              &ldquo;verify your wallet&rdquo; by signing a transaction outside
              this site. The only official mint link is{" "}
              <span className={styles.strong}>wagmiboys.xyz/mint</span> - and our
              only X is{" "}
              <a
                href="https://x.com/Wagmi_Boys"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                @Wagmi_Boys
              </a>
              . Anything else is a scam.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
