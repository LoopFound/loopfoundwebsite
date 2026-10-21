# Engineering Decisions

This file records meaningful code changes made during Codex sessions. Update it in the same change set as the code, not as a final cleanup step.

## 2026-10-14 — Establish the decision log

### What changed

Added this root-level `decisions.md` file and established a required entry for every meaningful code change. Each entry must state what changed, why the approach was chosen, and why the selected library or method was preferred over alternatives.

### Why this approach

A chronological Markdown log keeps implementation decisions beside the repository and makes each change reviewable without requiring external tooling or services.

### Why this method over alternatives

Plain Markdown is portable, diff-friendly, readable on GitHub and locally, and adds no runtime or build dependency. A database, generated changelog, or issue-only record would add maintenance cost or separate the reasoning from the code it documents.

## 2026-10-14 — Refine the navbar brand mark

### What changed

Replaced the cropped square navbar image and duplicate text lockup with the complete Loop Found logo at its native 16:9 ratio. Added a compact dark frame, restrained corner radius, subtle brand-color focus and hover states, and accurate intrinsic image dimensions.

### Why this approach

The source logo is a horizontal wordmark. Showing the whole asset makes the brand readable and removes the awkward crop caused by forcing it into a small square. The frame gives the dark artwork a deliberate edge against the light navbar while preserving the existing navbar layout.

### Why this method over alternatives

Existing Tailwind utilities provide sizing, focus treatment, and interaction states without new CSS or dependencies. `object-contain` and the image's real dimensions preserve the artwork better than `object-cover`, a circular crop, or a recreated text logo.

## 2026-10-21 — Route unknown member slugs to the site-wide 404 page

### What changed

Replaced the separate member-not-found screen with the shared `NotFound` page and added a routing regression test for unknown single-segment URLs.

### Why this approach

The dynamic `/:memberSlug` route matches every single-segment URL before the wildcard route can handle it. Delegating unresolved member slugs to the shared 404 component gives every unknown URL the same user experience and no-index metadata while preserving valid member aliases.

### Why this method over alternatives

Reusing the existing `NotFound` component keeps 404 ownership in one place and avoids duplicating route lists or member aliases in `App.tsx`. Enumerating each profile path would make routing depend on a second manually maintained copy of the team data.
