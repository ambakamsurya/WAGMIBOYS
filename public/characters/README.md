# Character animation drop-in

The 5 Tribe cards render a looping video in a **9:16** slot. Drop your files
here and the site picks them up — no component changes required beyond flipping
two lines (below).

## 1. Export specs (per character)

| Setting      | Value                                              |
| ------------ | -------------------------------------------------- |
| Aspect ratio | **9:16** (e.g. 1080×1920, or 720×1280 to save size)|
| Format       | **MP4 / H.264** (`yuv420p` for universal playback) |
| Audio        | **None** — strip it (cards are muted autoplay)     |
| Loop         | Seamless (first and last frame should match)       |
| Length       | 2–6s is ideal for a background loop                |
| Target size  | Aim < ~2–3 MB each so mobile stays fast            |

Optional: a poster frame (`<slug>.jpg`, one still from the loop) shows while
the video buffers.

## 2. File names — put files in THIS folder

```
public/characters/
  geko.mp4     (geko.jpg   optional poster)
  floss.mp4    (floss.jpg)
  nugget.mp4   (nugget.jpg)
  doze.mp4     (doze.jpg)
  zoomy.mp4    (zoomy.jpg)
```

## 3. Turn them on

In `components/Tribe.js`, in the `.map(...)` at the bottom of the `TRIBE`
array, change:

```js
video: null,
poster: null,
```

to:

```js
video: `/characters/${c.slug}.mp4`,
poster: `/characters/${c.slug}.jpg`, // omit if you didn't export posters
```

That's it — all five light up at once. A missing file falls back to the
labeled placeholder automatically, so partial drops are safe.

## Handy ffmpeg one-liner (web-optimized 9:16, no audio)

```bash
ffmpeg -i input.mov -an -vf "scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280" \
  -c:v libx264 -pix_fmt yuv420p -crf 24 -movflags +faststart geko.mp4
```
