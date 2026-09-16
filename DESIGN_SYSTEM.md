# Loop Found homepage motion

The homepage references Adko's condensed rotating headline and diagonal project
gallery, using Loop Found content and its existing yellow, black, and white palette.
Implementation: `src/components/AdkoHome.tsx` and the `.adko-*` rules in
`src/index.css`. Shared navigation lives in `src/components/Navbar.tsx`.

## Hero composition

- Keep the headline and subtitle in normal flow above a separate gallery stage.
- The stage clips the decorative card plane; it must never cover the subtitle.
- Desktop perspective: 1600px, with the plane starting at X 12deg, Y -18deg,
  Z -9deg. GSAP scrubs towards X 5deg, Y 12deg, Z 3deg over a 70%-viewport
  pinned scroll interval. The text fades within the first 45%-viewport interval.
- Each card has a 4:5 frame, a light edge, and an offset shadow to suggest depth.
  Do not alternate independent 2D card rotations.
- GSAP owns the plane transform. Entrance motion belongs to an inner wrapper;
  CSS hover belongs to the link. Never put competing animation transforms on
  the same node.

## Responsive and accessible behavior

- Below 768px, use a shorter 380px scene with 900px perspective and no pinning.
- Use the collapsed navigation below 1024px so labels never wrap at tablet size.
- Words share one grid cell with a stable line height. Only the first word is
  visible before animation setup or with reduced motion enabled.
- The animated words are hidden from assistive technology; the heading has a
  stable accessible description. The headline animation has a pause/play control.
- Reduced motion skips GSAP setup and uses a static gallery and heading.
- Project links remain keyboard accessible; labels appear on focus or hover.
- The St. Britto's asset is an all-black image. Display an explicit temporary
  preview placeholder until a real screenshot is supplied; do not invent a result.
