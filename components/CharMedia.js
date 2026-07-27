"use client";

import { useEffect, useState } from "react";
import styles from "./Tribe.module.css";

/**
 * The animation slot for a character card. Sized ~9:16.
 *
 * The labeled placeholder ALWAYS renders as the base layer, so a missing file
 * (or a video that hasn't painted its first frame yet) degrades gracefully to
 * the labeled slot instead of a black box.
 *
 * Source loops are 16:9 → object-fit: cover center-crops them into the 9:16
 * slot. Respecting the quality floor, an autoplaying loop counts as animation:
 * under prefers-reduced-motion we DON'T autoplay - the video sits paused on its
 * first frame (a still portrait) instead of looping.
 */
export default function CharMedia({ name, video, poster }) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div className={`char-media ${styles.media}`} data-char={name}>
      <div className={styles.placeholder} aria-hidden={video ? "true" : undefined}>
        <span className={styles.placeholderGrid} />
        <span className={styles.placeholderLabel}>
          <span className={styles.placeholderName}>{name}</span>
          <span className={styles.placeholderNote}>ANIMATION · 9:16</span>
        </span>
      </div>

      {video ? (
        <video
          key={reduceMotion ? "static" : "motion"}
          className={styles.video}
          poster={poster || undefined}
          autoPlay={!reduceMotion}
          loop={!reduceMotion}
          muted
          playsInline
          preload={reduceMotion ? "auto" : "metadata"}
          aria-label={`${name} animation loop`}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
