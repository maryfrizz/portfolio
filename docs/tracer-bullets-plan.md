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

## FSD Architecture

- `src/shared/ui/*`: small reusable UI elements.
- `src/shared/lib/*`: small utilities for classes, asset metadata, and link helpers if needed.
- `src/entities/project/*`: project entity types, data, and project-card UI.
- `src/entities/case-study/*`: case-study metadata, text blocks, metrics, and image groups.
- `src/widgets/*`: page sections.
- `src/pages/home/*`: home page composition.
- `src/pages/case/*`: case page composition.
- `app/page.tsx`: thin Next route entrypoint for the home page.
- `app/case/page.tsx`: thin Next route entrypoint for the case page.

## Component Tracer Bullets

- [x] TB-C01 `TextLink`: basic text link.
- [x] TB-C02 `ExternalTextLink`: external link with `target`, `rel`, hover, and focus states.
- TB-C03 `IconLink`: link rendered with an icon.
- TB-C04 `ArrowIcon`: CTA arrow icon.
- TB-C05 `CloseIcon`: close/back icon for the case page.
- TB-C06 `PortraitInline`: circular portrait inside the hero line.
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

- TB-S01 `HeaderSection`: `Maria Kozikova`, `Linked in`, and `CV`.
- TB-S02 `HomeHeroSection`: headline, `PortraitInline`, and linked `UX/UI designer` text.
- TB-S03 `SelectedWorkIntroSection`: `Selected Work` heading and intro copy.
- TB-S04 `HapdayProjectSection`: Hapday project block.
- TB-S05 `CaliforniaClosetsProjectSection`: California Closets project block with `/case` link.
- TB-S06 `SleepiestProjectSection`: Sleepiest project block.
- TB-S07 `SerenaLilyProjectSection`: Serena & Lily project block.
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

- TB-A01: connect all home sections in `src/pages/home`.
- TB-A02: connect all case sections in `src/pages/case`.
- TB-A03: connect `src/pages/home` in `app/page.tsx`.
- TB-A04: connect `src/pages/case` in `app/case/page.tsx`.
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
- Check TypeScript/import paths after each related group of bullets.
- Leave the project in a compilable state after each bullet whenever feasible.

## Acceptance Criteria

- Every component has its own tracer bullet.
- Every section has its own tracer bullet.
- FSD boundaries are explicit and preserved.
- The final site contains `/` and `/case`.
- Original visible copy, links, and asset URLs from `kozikova.com` are preserved.
- Final checks pass with `bun run lint` and `bun run build`.

## Assumptions

- The implementation is a close handcrafted reproduction, not a pixel-perfect Figma export.
- The existing Next.js project is preserved.
- No new dependencies are added unless a concrete implementation blocker appears.
- Original public assets from `kozikova.com/_assets/v11/...` may be referenced directly unless deployment requirements force local asset hosting.
