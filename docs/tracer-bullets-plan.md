# Plan: each component and section as a separate tracer bullet

## Summary

Build the `kozikova.com` copy with Feature-Sliced Design, where every component and every section is implemented as its own tracer bullet.

One tracer bullet is one small complete vertical slice:

- data or props shape;
- component or section;
- styles;
- connection to the nearest parent;
- quick render/build verification.

Scope: the home page `/` and the California Closets case-study page `/case`.

## Verified Source Details

Source checked against `https://kozikova.com/` and `https://kozikova.com/case`.

- Visual base: white background, `#120a1d` primary text, `#4a5565` muted text, Figtree loaded via `next/font/google`.
- Header: `Maria Kozikova`, `Linked in`, `CV`; 68px tall; horizontal padding is 15px mobile, 40px tablet, 56px desktop; LinkedIn URL is `https://www.linkedin.com/in/mariakozikova/`; CV URL is `https://drive.google.com/file/d/19ZOWk1pziAGM2Cd1H4an36CIVhsiqO47/view?usp=sharing`.
- Home hero copy: `I’m Maria`, linked `UX/UI designer`, `with a focus on interaction and accessible design`.
- Selected Work intro copy: `My favorite projects reflect my approach to design: a focus on details, a deep understanding of the task, and a desire to create clear, aesthetic interfaces.`
- Hapday project: tags `App`, `UX/UI Research`, `UX/UI Design`, `Motion Design`, `Icons`; description `An AI Life Coaching mobile application that helps people change their everyday habits`; actions `Case Study` and `View App`.
- California Closets project: tags `Website`, `UX/UI Research`, `UX/UI Design`; description `A website redesign for the largest custom storage brand in North America`; actions `Case Study` and `View Website`.
- Sleepiest project: tags `UX/UI Design`, `Illustrations`, `App`, `Motion Design`, `Accessibility`; description `Sleep app that helps millions fall asleep every night`; actions `Case Study` and `View App`.
- Serena & Lily project: title appears as `Serena & Lily / 2022` on some breakpoints and `Serena & Lily` on desktop; tags `UX/UI Research`, `UX/UI Design`, `Accessibility`, `Website`, `Leading`; description `Ecommerce redesign for a leader in luxury home decor`; actions `Case Study` and `View Website`.
- Q2 project: tags `UX/UI Design`, `Website`, `Icons`; description `A website for a major digital banking platform`; action `Coming soon`.
- Footer: `mariiavish@gmail.com`, `Linked in`, `CV`, `Telegram`; Telegram URL is `https://t.me/mary_frizz`.
- Case hero headline source text renders as `A awebsite redesign for the largest custom storage brand in North America`; preserve source copy unless intentionally correcting obvious typo.
- Case metadata: duration `8 months`; tags `Website`, `UX/UI Research`, `UX/UI Design`; role text has two paragraphs.
- Case text flow: `Context`, `Problem`, `Discovery`, navigation example images, `UX Part`, metrics `3 Iterations` and `29 Pages`, UX image, `UI Part`, desktop UI screenshots, mobile screens image, `Design Library and Component System`, design library screenshots, footer.

## FSD Architecture

- `src/shared/ui/*`: small reusable UI elements.
- `src/shared/lib/*`: small utilities for classes, asset metadata, and link helpers if needed.
- `src/entities/project/*`: project entity types, data, and project-card UI.
- `src/entities/case-study/*`: case-study metadata, text blocks, metrics, and image groups.
- `src/widgets/*`: page sections.
- `src/views/home/*`: home page composition, named `views` to avoid Next.js treating FSD `pages` as Pages Router.
- `src/views/case/*`: case page composition, named `views` to avoid Next.js treating FSD `pages` as Pages Router.
- `app/page.tsx`: thin Next route entrypoint for the home page.
- `app/case/page.tsx`: thin Next route entrypoint for the case page.

## Component Tracer Bullets

- [x] TB-C01 `TextLink`: basic text link.
- [x] TB-C02 `ExternalTextLink`: external link with `target`, `rel`, hover, and focus states.
- [x] TB-C03 `IconLink`: link rendered with an icon.
- [x] TB-C04 `ArrowIcon`: CTA arrow icon.
- [x] TB-C05 `CloseIcon`: close/back icon for the case page.
- [x] TB-C06 `PortraitInline`: circular portrait inside the hero line.
- TB-C07 `Tag`: compact project tag.
- TB-C08 `ProjectImage`: single project image with fixed ratio and alt text.
- TB-C09 `ProjectMediaGroup`: grouped project images.
- TB-C10 `ProjectActionLink`: CTA link for `Case Study`, `View App`, or `View Website`.
- TB-C11 `ProjectComingSoon`: non-link CTA text for `Coming soon`.
- TB-C12 `ProjectTitle`: project title.
- TB-C13 `ProjectDescription`: project description.
- TB-C14 `ProjectTagList`: project tag list.
- TB-C15 `ProjectCard`: complete project card composed from ready project components.
- TB-C16 `FooterEmail`: email link.
- TB-C17 `FooterSocialLinks`: LinkedIn, CV, and Telegram link group.
- TB-C18 `CaseMetaItem`: label/value item for duration and categories.
- TB-C19 `CaseMetaGroup`: grouped case metadata.
- TB-C20 `CaseTextBlock`: heading plus one or more paragraphs.
- TB-C21 `Metric`: number plus label.
- TB-C22 `MetricGroup`: grouped metrics.
- TB-C23 `CaseImage`: single case-study image.
- TB-C24 `CaseImageGrid`: case-study image grid.
- [x] TB-C25 `PageContainer`: shared max-width and page padding container.
- TB-C26 `SectionSpacer`: shared vertical rhythm between sections.

## Section Tracer Bullets

- [x] TB-S01 `HeaderSection`: `Maria Kozikova`, `Linked in`, and `CV`.
- [x] TB-S02 `HomeHeroSection`: headline, `PortraitInline`, and linked `UX/UI designer` text.
- TB-S03 `SelectedWorkIntroSection`: `Selected Work` heading and intro copy.
- TB-S04 `HapdayProjectSection`: Hapday project block with `Case Study` and `View App`.
- TB-S05 `CaliforniaClosetsProjectSection`: California Closets project block with `/case` link.
- TB-S06 `SleepiestProjectSection`: Sleepiest project block.
- TB-S07 `SerenaLilyProjectSection`: Serena & Lily project block, including `/ 2022` where the source breakpoint shows it.
- TB-S08 `Q2ProjectSection`: Q2 project block with `Coming soon`.
- TB-S09 `HomeFooterSection`: email plus LinkedIn, CV, and Telegram.
- TB-S10 `CaseCloseNavSection`: close button back to `/`.
- TB-S11 `CaseHeroSection`: case headline and `California Closets.com` link.
- TB-S12 `CaseOverviewSection`: duration, categories, and `My Role`.
- TB-S13 `CaseContextSection`: `Context` text.
- TB-S14 `CaseProblemSection`: `Problem` text.
- TB-S15 `CaseDiscoverySection`: `Discovery` text.
- TB-S16 `CaseNavigationExamplesSection`: navigation example image pair.
- TB-S17 `CaseUXIntroSection`: `UX Part` intro text.
- TB-S18 `CaseUXMetricsSection`: `3 Iterations` and `29 Pages`.
- TB-S19 `CaseUXImageSection`: UX screen image.
- TB-S20 `CaseUIPartTextSection`: `UI Part` text.
- TB-S21 `CaseUIDesktopImagesSection`: desktop UI screenshots.
- TB-S22 `CaseUIMobileImageSection`: mobile screens image.
- TB-S23 `CaseDesignLibraryTextSection`: design library text.
- TB-S24 `CaseDesignLibraryImagesSection`: design library screenshots.
- TB-S25 `CaseFooterSection`: shared footer on `/case`.

## Assembly Tracer Bullets

- TB-A01: connect all home sections in `src/views/home`.
- TB-A02: connect all case sections in `src/views/case`.
- TB-A03: connect `src/views/home` in `app/page.tsx`.
- TB-A04: connect `src/views/case` in `app/case/page.tsx`.
- TB-A05: update metadata in `app/layout.tsx`.
- TB-A06: final responsive pass for `/`.
- TB-A07: final responsive pass for `/case`.
- TB-A08: final link and asset URL verification.
- TB-A09: final `bun run lint` and `bun run build`.

## Rule For Each Bullet

Each tracer bullet must stay small and closed:

- Create or update exactly one component, section, or assembly layer.
- Connect it to the nearest parent so the result is visible in the UI.
- Do not mix multiple new components in one bullet, except importing already completed components.
- Before committing each UI bullet, verify design correspondence against the relevant original `kozikova.com` breakpoint: visible copy, links, spacing, sizing, colors, typography, and asset choice.
- Check TypeScript/import paths after each related group of bullets.
- Leave the project in a compilable state after each bullet whenever feasible.

## Acceptance Criteria

- Every component has its own tracer bullet.
- Every section has its own tracer bullet.
- FSD boundaries are explicit and preserved.
- The final site contains `/` and `/case`.
- Original visible copy, links, and asset URLs from `kozikova.com` are preserved.
- All original image, SVG, and required media assets are downloaded into the project and referenced locally rather than hotlinked from `kozikova.com`.
- Final checks pass with `bun run lint` and `bun run build`.

## Assumptions

- The implementation is a close handcrafted reproduction, not a pixel-perfect Figma export.
- The existing Next.js project is preserved.
- No new dependencies are added unless a concrete implementation blocker appears.
