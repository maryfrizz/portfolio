import type { Project } from "./types";

const projectAssetPath = "/assets/projects/";

export const selectedWorkProjects = [
  {
    actions: [
      {
        href: "https://apps.apple.com/us/app/hapday-ai-life-coach/id1498572982",
        kind: "link",
        label: "View App",
      },
    ],
    description:
      "An AI Life Coaching mobile application that helps people change their everyday habits",
    media: [
      {
        alt: "Hapday app interface on a phone",
        height: 3000,
        src: `${projectAssetPath}b37798d8e0043016372648dc9f629209d7fc0374.png`,
        type: "image",
        width: 4000,
      },
      {
        alt: "Hapday app dashboard and breathing exercise screens",
        height: 720,
        src: `${projectAssetPath}videos/hapday-dashboard.mp4`,
        type: "video",
        variant: "wide-overlap",
        width: 960,
      },
      {
        alt: "Hapday app habit interface",
        height: 2478,
        src: `${projectAssetPath}9722abb09a7360f9371310d54a28f0639d287ca4.png`,
        type: "image",
        variant: "after-wide-overlap",
        width: 2572,
      },
    ],
    slug: "hapday",
    tags: ["App", "UX/UI Research", "UX/UI Design", "Motion Design", "Icons"],
    title: "Hapday",
  },
  {
    actions: [
      { href: "/case", kind: "link", label: "Case Study" },
      { href: "https://www.californiaclosets.com/", kind: "link", label: "View Website" },
    ],
    description: "A website redesign for the largest custom storage brand in North America",
    media: [
      {
        alt: "California Closets product page redesign",
        height: 2160,
        src: `${projectAssetPath}24b98fd052db573f669a3f56ebbc19c2116be7f9.png`,
        type: "image",
        width: 3840,
      },
      {
        alt: "California Closets interior page redesign",
        height: 2160,
        src: `${projectAssetPath}0e057ce9408c7cd0b2028274250feb83dcd712d4.png`,
        type: "image",
        width: 3840,
      },
      {
        alt: "California Closets home page redesign",
        height: 2160,
        src: `${projectAssetPath}489b6c04437865a5b50a6ea26ddeaa0bb391146a.png`,
        type: "image",
        width: 3840,
      },
    ],
    slug: "california-closets",
    tags: ["Website", "UX/UI Research", "UX/UI Design"],
    title: "California Closets",
  },
  {
    actions: [
      { href: "https://cuberto.com/projects/sleepiest/", kind: "link", label: "Case Study" },
      {
        href: "https://apps.apple.com/us/app/sleepiest-sleep-meditations/id1244690083",
        kind: "link",
        label: "View App",
      },
    ],
    description: "Sleep app that helps millions fall asleep every night",
    media: [
      {
        alt: "Sleepiest meditation screen",
        height: 1128,
        src: `${projectAssetPath}95046d6f3c616531c6b0ca1d6d1640a4b61f96be.png`,
        type: "image",
        width: 1504,
      },
      {
        alt: "Sleepiest sleep statistics screen",
        height: 720,
        src: `${projectAssetPath}videos/sleepiest-stats.mp4`,
        type: "video",
        width: 650,
      },
      {
        alt: "Sleepiest bedtime interface",
        height: 2980,
        src: `${projectAssetPath}7a089b532f50feb027a4146fdfe8c78497aadca7.png`,
        type: "image",
        width: 1980,
      },
    ],
    slug: "sleepiest",
    tags: ["UX/UI Design", "Illustrations", "App", "Motion Design", "Accessibility"],
    title: "Sleepiest",
  },
  {
    actions: [
      { href: "https://clay.global/work/serenaandlily", kind: "link", label: "Case Study" },
      { href: "https://www.serenaandlily.com/", kind: "link", label: "View Website" },
    ],
    description: "Ecommerce redesign for a leader in luxury home decor",
    media: [
      {
        alt: "Serena and Lily ecommerce redesign",
        height: 720,
        src: `${projectAssetPath}videos/serena-lily-home.mp4`,
        type: "video",
        width: 650,
      },
      {
        alt: "Serena and Lily inspiration collection",
        height: 3072,
        src: `${projectAssetPath}cb876029cdca44414d9409724b9ae6bf4f05a0b0.png`,
        type: "image",
        width: 4096,
      },
      {
        alt: "Serena and Lily shopping interface",
        height: 2700,
        src: `${projectAssetPath}836bdc38fc36a44cc4e614bde7f16b36ba1f098c.png`,
        type: "image",
        width: 2160,
      },
    ],
    slug: "serena-lily",
    tags: ["UX/UI Research", "UX/UI Design", "Accessibility", "Website", "Leading"],
    title: "Serena & Lily",
    titleYear: "2022",
  },
  {
    actions: [{ kind: "disabled", label: "Coming soon" }],
    description: "A website for a major digital banking platform",
    media: [
      {
        alt: "Q2 banking platform icon grid",
        height: 2700,
        src: `${projectAssetPath}0fcc033b81a04c88697cf850ed79b18f1d880e2e.png`,
        type: "image",
        width: 2160,
      },
      {
        alt: "Q2 banking platform commercial screen",
        height: 2700,
        src: `${projectAssetPath}17ee4a2f614ecb4ab794baa926939d9c3e12af36.png`,
        type: "image",
        width: 2160,
      },
      {
        alt: "Q2 banking platform product layers",
        height: 2160,
        src: `${projectAssetPath}bc25acea11d5166d5366b4bc8d97d59d8416500a.png`,
        type: "image",
        width: 3840,
      },
    ],
    slug: "q2",
    tags: ["UX/UI Design", "Website", "Icons"],
    title: "Q2",
  },
] satisfies Project[];
