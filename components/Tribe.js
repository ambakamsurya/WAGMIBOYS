import styles from "./Tribe.module.css";
import Reveal from "./Reveal";
import CharMedia from "./CharMedia";

// Drop-in: place MP4 loops in /public/characters/ named <slug>.mp4 (and an
// optional <slug>.jpg poster frame), then flip `video`/`poster` to the paths
// below. Until a file exists the card shows its labeled placeholder.
const TRIBE = [
  {
    name: "GEKO",
    slug: "geko",
    role: "The Believer",
    bio: "Never panic sells. Never panic buys either. Geko already knew.",
  },
  {
    name: "FLOSS",
    slug: "floss",
    role: "The Greedy One",
    bio: "Sees a green candle, forgets every lesson he's ever learned.",
  },
  {
    name: "NUGGET",
    slug: "nugget",
    role: "The Paranoid One",
    bio: "Reads every contract twice. Still thinks this one's a rug.",
  },
  {
    name: "DOZE",
    slug: "doze",
    role: "The Sleepy Skeptic",
    bio: "Missed the pump. Missed the dump. Doesn't care either way.",
  },
  {
    name: "ZOOMY",
    slug: "zoomy",
    role: "The Too-Late One",
    bio: "Arrives exactly when everyone else is leaving.",
  },
].map((c) => ({
  ...c,
  // Loops live in /public/characters/<slug>.mp4. They're 16:9 and the card
  // slot is 9:16, so CharMedia center-crops via object-fit: cover.
  video: `/characters/${c.slug}.mp4`,
  poster: null,
}));

export default function Tribe() {
  return (
    <section className={`section ${styles.section}`} id="tribe">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">The Tribe</p>
          <h2 className={styles.title}>Five idiots. One conviction.</h2>
          <p className={styles.lede}>
            The leads of the show - and the five psychologies every WAGMI Boy is
            minted from.
          </p>
        </Reveal>

        <ul className={styles.grid}>
          {TRIBE.map((c, i) => (
            <Reveal as="li" key={c.name} className={styles.card} delay={i * 70}>
              <CharMedia name={c.name} video={c.video} poster={c.poster} />
              <div className={styles.body}>
                <div className={styles.nameRow}>
                  <h3 className={styles.name}>{c.name}</h3>
                  <span className={styles.reserved}>Studio Reserved</span>
                </div>
                <p className={styles.role}>{c.role}</p>
                <p className={styles.bio}>{c.bio}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className={styles.note} as="p">
          5 leads, reserved by the studio and never sold - so the story stays
          theirs.
        </Reveal>
      </div>
    </section>
  );
}
