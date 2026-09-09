import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  expect: {
    toMatchSnapshot: {
      maxDiffPixelRatio: 0.04,
      threshold: 0.2,
    },
  },
  testDir: "./tests/visual",
  use: {
    colorScheme: "light",
    launchOptions: {
      headless: true,
    },
  },
  webServer: process.env.VISUAL_BASE_URL
    ? undefined
    : {
        command: "bun run start -- -p 3100",
        reuseExistingServer: true,
        timeout: 120_000,
        url: "http://localhost:3100",
      },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
