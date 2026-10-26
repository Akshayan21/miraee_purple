# Removed from the V3 home page: the pinned "Every trip, with its budget and GL code." statement

Taken out of `v3/src/pages/home/index.tsx` on the owner's request. The files here are the reference copy of the animation style (they are not built).

Animation style, in short:
- One big sentence (display type, `clamp(40px, 7.4vw, 112px)`, weight 650) on the night ground with a soft plum + orange glow behind it.
- The section is pinned (`start: 'top top'`, `end: '+=120%'`, `scrub: 0.6`, ease `none`).
- Every word starts at 16% opacity and lights up to full white one after another (`stagger: 0.5` on a scrubbed timeline), so the sentence "reads itself" as you scroll.
- The last four words are picked out in orange-light (`--mr-orange-light`).
- When the last word lands, a 2px rule under the sentence draws left to right (`scaleX 0 -> 1`, origin left), a gradient from orange-light fading to transparent.
- Needs `useScrollScene` (`@/components/scroll/use-scroll-scene`) which supplies GSAP + ScrollTrigger and cleans up.
