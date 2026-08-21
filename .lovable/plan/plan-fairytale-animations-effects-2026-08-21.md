# Plan: Fairytale Animations & Effects

Add a full layer of warm, romantic motion to the love letter page (intensity 8/10 — rich but smooth, mobile-friendly).

## Effects to build

**1. Falling petals**
- A fixed, full-screen layer of soft gold/cream daisy petals drifting and swaying down the page continuously, behind the content.
- Pure CSS keyframe animations (fall + sway + slight rotation), ~14 petals with randomized sizes, durations, and horizontal positions via inline style variables.
- Pauses/reduces automatically for users with `prefers-reduced-motion`.

**2. Hero entrance**
- On load: "Hellouu my nhicolit my lab!" fades in first, then "this is…", then the big title "500 Reasons Why I Love You" rises up, then the subtitle and sprigs.
- A one-time golden sparkle shimmer sweeps across the title text (background-clip gradient animation).
- Staggered CSS animation delays — no JS needed.

**3. Photo wiggle + glow**
- When each polaroid scrolls into view, it does a small playful wiggle (rotate a couple degrees and settle) instead of just fading up.
- Soft golden glow shadow behind photos; on hover/tap the photo straightens to 0 degrees and the glow intensifies.

**4. Milestones & finale**
- Counter pill: when she passes each 100-reason milestone (100, 200, 300, 400, 500), a burst of tiny hearts pops out of the pill and it briefly scales up. Reuses the existing scroll-tracking logic; burst triggered in the scroll handler when crossing a milestone.
- Music button: while the song is playing, the note icon gently pulses/bobbing to the beat feel, with a soft gold halo ring animation.
- Finale: when the "and 500 more tomorrow." section scrolls into view, a one-time burst of petals and hearts rains over that section, and the daisy above it spins slowly.

## Technical details

- Files touched: `src/styles.css` (new keyframes + classes), `src/routes/index.tsx` (petal layer component, milestone-burst state in the existing scroll handler, finale reveal hook, playing-state class on the music button).
- Everything is CSS animation driven — no new dependencies, no heavy JS libraries.
- All colors stay on existing semantic tokens (gold, gold-deep, bloom).
- `prefers-reduced-motion` respected for all new animations.
- Performance: petals layer uses `pointer-events: none` and `transform`/`opacity` only; photos keep lazy loading.
- Verified afterward with mobile-viewport screenshots: hero entrance, petals, a polaroid mid-list, milestone burst, music button pulse, and finale burst.
