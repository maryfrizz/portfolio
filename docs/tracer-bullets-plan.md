# Plan: reusable tracer bullets for the portfolio copy

## Summary

Build the `kozikova.com` copy with Feature-Sliced Design, using tracer bullets that keep the UI reusable instead of creating a one-off component for every content item.

One tracer bullet is one small complete vertical slice:

- data or props shape;
- component or section;
- styles;
- connection to the nearest parent;
- quick render/build verification.

Important correction: selected work projects are the same repeated pattern in the original site. There must be one reusable project component, driven by project data, not separate `HapdayProjectSection`, `CaliforniaClosetsProjectSection`, `SleepiestProjectSection`, `SerenaLilyProjectSection`, and `Q2ProjectSection` implementations.

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
- `src/entities/project/*`: project entity types, selected-work data, and one reusable project-card UI.
- `src/entities/case-study/*`: case-study metadata, text blocks, metrics, and image groups.
- `src/widgets/*`: page sections.
- `src/views/home/*`: home page composition, named `views` to avoid Next.js treating FSD `pages` as Pages Router.
- `src/views/case/*`: case page composition, named `views` to avoid Next.js treating FSD `pages` as Pages Router.
- `app/page.tsx`: thin Next route entrypoint for the home page.
- `app/case/page.tsx`: thin Next route entrypoint for the case page.

## Reuse Rules

- A repeated original-site pattern gets one reusable component plus typed data.
- A project is data, not a widget. Add or change a project by editing `src/entities/project/model`, not by creating a new project-specific component.
- `ProjectCard` owns the responsive layout variations needed by all selected-work items, including the Serena & Lily title/year breakpoint behavior.
- `SelectedWorkProjectsSection` renders the full ordered project list by mapping over data.
- Only create a project-specific branch inside `ProjectCard` when the original site has a real visual exception that cannot be expressed as data or a small variant prop.

## Data Tracer Bullets

- [x] TB-D01 `Project` model: title, optional year, tags, description, media, actions, and variant fields.
- [x] TB-D02 `selectedWorkProjects`: ordered data for Hapday, California Closets, Sleepiest, Serena & Lily, and Q2.
- TB-D03 `CaseStudy` model/data: California Closets case metadata, text blocks, metrics, and image groups.

## Component Tracer Bullets

- [x] TB-C01 `TextLink`: basic text link.
- [x] TB-C02 `ExternalTextLink`: external link with `target`, `rel`, hover, and focus states.
- [x] TB-C03 `IconLink`: link rendered with an icon.
- [x] TB-C04 `ArrowIcon`: CTA arrow icon.
- [x] TB-C05 `CloseIcon`: close/back icon for the case page.
- [x] TB-C06 `PortraitInline`: circular portrait inside the hero line.
- [x] TB-C07 `Tag`: compact project tag.
- [x] TB-C08 `ProjectImage`: single project image with fixed ratio and alt text.
- [x] TB-C09 `ProjectMediaGroup`: grouped project images.
- [x] TB-C10 `ProjectActionLink`: CTA link for `Case Study`, `View App`, or `View Website`.
- [x] TB-C11 `ProjectComingSoon`: non-link CTA text for `Coming soon`.
- [x] TB-C12 `ProjectTitle`: project title.
- [x] TB-C13 `ProjectDescription`: project description.
- [x] TB-C14 `ProjectTagList`: project tag list.
- [x] TB-C15 `ProjectCard`: complete reusable selected-work project card composed from ready project components and driven by one `Project` object.
- [x] TB-C16 `FooterEmail`: email link.
- [x] TB-C17 `FooterSocialLinks`: LinkedIn, CV, and Telegram link group.
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
- [x] TB-S03 `SelectedWorkIntroSection`: `Selected Work` heading and intro copy.
- [x] TB-S04 `SelectedWorkProjectsSection`: maps `selectedWorkProjects` through the single reusable `ProjectCard` for Hapday, California Closets, Sleepiest, Serena & Lily, and Q2.
- [x] TB-S09 `HomeFooterSection`: email plus LinkedIn, CV, and Telegram.
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

- TB-A01: connect home sections in `src/views/home`, including `SelectedWorkProjectsSection`.
- TB-A02: connect all case sections in `src/views/case`.
- TB-A03: connect `src/views/home` in `app/page.tsx`.
- TB-A04: connect `src/views/case` in `app/case/page.tsx`.
- TB-A05: update metadata in `app/layout.tsx`.
- TB-A06: final responsive pass for `/`.
- TB-A07: final responsive pass for `/case`.
- TB-A08: final link and asset URL verification.
- TB-A09: final `bun run lint` and `bun run build`.

## Visual QA Tracer Bullets

Every section tracer bullet must include a total visual correspondence pass before it can be
marked complete.

- Required breakpoints: 375px mobile, 800px tablet, and 1280px desktop, matching the original
  `kozikova.com` breakpoint set.
- For each breakpoint, compare the local section against the original site for visible copy,
  line breaks, spacing, sizing, colors, typography, asset choice, and link targets.
- For interactive sections, compare hover, focus-visible, and any asset/state changes against the
  original site at every breakpoint where those states exist.
- Keep screenshot or measurement artifacts outside the repo unless they are intentionally added as
  documentation.
- Do not mark a section bullet as complete until its breakpoint QA is complete.

- [x] TB-QA-S01 `HeaderSection`: verified against original at 375px, 800px, and 1280px.
- [x] TB-QA-S02 `HomeHeroSection`: verified default and desktop hover states against original at
  375px, 800px, and 1280px.
- [x] TB-QA-S03 `SelectedWorkIntroSection`: verified against original at 375px, 800px, and 1280px.
- [ ] TB-QA-S04 `SelectedWorkProjectsSection`: verify all five rendered `ProjectCard` instances against original at 375px, 800px, and 1280px.
- [x] TB-QA-S09 `HomeFooterSection`: verified against original HTML styles and local browser
  metrics at 375px, 800px, and 1280px.
- [ ] TB-QA-S10 `CaseCloseNavSection`: verify against original at 375px, 800px, and 1280px.
- [ ] TB-QA-S11 `CaseHeroSection`: verify against original at 375px, 800px, and 1280px.
- [ ] TB-QA-S12 `CaseOverviewSection`: verify against original at 375px, 800px, and 1280px.
- [ ] TB-QA-S13 `CaseContextSection`: verify against original at 375px, 800px, and 1280px.
- [ ] TB-QA-S14 `CaseProblemSection`: verify against original at 375px, 800px, and 1280px.
- [ ] TB-QA-S15 `CaseDiscoverySection`: verify against original at 375px, 800px, and 1280px.
- [ ] TB-QA-S16 `CaseNavigationExamplesSection`: verify against original at 375px, 800px, and 1280px.
- [ ] TB-QA-S17 `CaseUXIntroSection`: verify against original at 375px, 800px, and 1280px.
- [ ] TB-QA-S18 `CaseUXMetricsSection`: verify against original at 375px, 800px, and 1280px.
- [ ] TB-QA-S19 `CaseUXImageSection`: verify against original at 375px, 800px, and 1280px.
- [ ] TB-QA-S20 `CaseUIPartTextSection`: verify against original at 375px, 800px, and 1280px.
- [ ] TB-QA-S21 `CaseUIDesktopImagesSection`: verify against original at 375px, 800px, and 1280px.
- [ ] TB-QA-S22 `CaseUIMobileImageSection`: verify against original at 375px, 800px, and 1280px.
- [ ] TB-QA-S23 `CaseDesignLibraryTextSection`: verify against original at 375px, 800px, and 1280px.
- [ ] TB-QA-S24 `CaseDesignLibraryImagesSection`: verify against original at 375px, 800px, and 1280px.
- [ ] TB-QA-S25 `CaseFooterSection`: verify against original at 375px, 800px, and 1280px.

## Rule For Each Bullet

Each tracer bullet must stay small and closed:

- Create or update exactly one component, section, or assembly layer.
- Connect it to the nearest parent so the result is visible in the UI.
- Do not create separate components for repeated project instances; extend the shared data model or `ProjectCard` variant surface instead.
- Do not mix multiple new components in one bullet, except importing already completed components.
- Before committing each UI bullet, verify design correspondence against all relevant original
  `kozikova.com` breakpoints: visible copy, links, spacing, sizing, colors, typography, and asset
  choice.
- Check TypeScript/import paths after each related group of bullets.
- Leave the project in a compilable state after each bullet whenever feasible.

## Acceptance Criteria

- Every reusable component has its own tracer bullet.
- Every real page section has its own tracer bullet.
- Selected work uses one reusable `ProjectCard` and one `SelectedWorkProjectsSection`, with all projects rendered from data.
- No project-specific section/component exists solely to render one project card.
- FSD boundaries are explicit and preserved.
- The final site contains `/` and `/case`.
- Original visible copy, links, and asset URLs from `kozikova.com` are preserved.
- All original image, SVG, and required media assets are downloaded into the project and referenced locally rather than hotlinked from `kozikova.com`.
- Final checks pass with `bun run lint` and `bun run build`.

## Assumptions

- The implementation is a close handcrafted reproduction, not a pixel-perfect Figma export.
- The existing Next.js project is preserved.
- No new dependencies are added unless a concrete implementation blocker appears.
