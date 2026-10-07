# Miraee immersive motion reference library

Research date: 7 October 2026. These are references for original motion direction, not assets to copy. Websites change; text-only inspection cannot verify every animation or mobile behavior.

| Reference          | Source                        | Motion direction to study                                                                       | Application to Miraee                                                          |
| ------------------ | ----------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| GSAP Showcase      | https://gsap.com/showcase/    | Curated production animation examples and developer links                                       | Coordinated timelines, SVG routes, scroll choreography                         |
| Bruno Simon        | https://bruno-simon.com/      | Interactive 3D world with driving, camera controls and quality settings, documented on the site | Give movement a purpose; use a travel journey rather than an unrelated 3D game |
| Unseen Studio      | https://unseen.co/            | Site invites visitors to drag to explore its world and offers optional sound                    | A responsive scene with layered depth; keep audio optional                     |
| Active Theory      | https://activetheory.net/     | Creative digital experience studio; visual review required because text extraction is minimal   | Reference for art direction and spatial storytelling                           |
| Guillaume Colombel | https://guillaumecolombel.fr/ | Interactive developer portfolio, also featured in GSAP showcase                                 | Study transitions and choreography through the project collection              |
| GSAP demos         | https://demos.gsap.com/       | Official implementation examples linked from GSAP showcase                                      | Prototype movement with the existing GSAP dependency                           |

## Implemented reusable library

- `src/components/motion/use-immersive-scene.ts`: scoped scroll timeline, route drawing, motion-path plane, chapter entrances, pointer depth, cleanup, responsive media queries, reduced-motion fallback.
- `src/components/motion/travel-journey.tsx`: complete travel workflow scene, now embedded after the homepage hero.
- `src/components/motion/travel-journey.module.css`: component-owned plum scene, lavender details and orange route accents.

Desktop uses native scroll to draw the route and advance the plane, while pointer position tilts the scene. Touch screens play one short entrance, then remain still. Reduced-motion users get the complete static composition. Text is present in server-rendered HTML and stays readable without JavaScript. The illustration is decorative; the three chapter cards carry the meaning.

## Reuse

Attach `useImmersiveScene(ref)` to a container containing `data-flight-path`, `data-flight-plane`, `data-flight-marker`, `data-story-card`, and `data-depth-stage` elements. The path and plane must share an SVG coordinate system. Put `mo-skip` on the owning section to avoid the generic site animator targeting the same elements. Never let two timelines own the same transform.

## Validation checklist

Check desktop scroll in both directions, touch widths, navigation away and back, reduced motion, and the static build. Keep controls outside the animated scene and use no automatic audio or forced scrolling.
