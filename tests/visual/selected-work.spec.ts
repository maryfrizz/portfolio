import { expect, type Page, test } from "@playwright/test";

const baseUrl = process.env.VISUAL_BASE_URL ?? "http://localhost:3100";

const viewports = [
  { height: 2200, name: "mobile", width: 375 },
  { height: 2600, name: "tablet", width: 800 },
  { height: 2600, name: "desktop", width: 1280 },
] as const;

async function selectedWorkClip(page: Page) {
  const selectedWork = page.getByText("Selected Work", { exact: true }).first();
  const footerEmail = page.getByText("mariiavish@gmail.com", { exact: true }).first();
  await expect(selectedWork).toBeVisible();
  await expect(footerEmail).toBeVisible();

  const selectedBox = await selectedWork.boundingBox();
  const footerBox = await footerEmail.boundingBox();

  if (!selectedBox || !footerBox) {
    throw new Error("Unable to measure selected work screenshot region.");
  }

  const viewport = page.viewportSize();
  if (!viewport) {
    throw new Error("Unable to read viewport size.");
  }

  const y = Math.max(0, Math.floor(selectedBox.y - 56));
  const bottom = Math.ceil(footerBox.y - 32);

  return {
    height: bottom - y,
    width: viewport.width,
    x: 0,
    y,
  };
}

async function freezeVideos(page: Page) {
  await page.evaluate(async () => {
    await Promise.all(
      [...document.querySelectorAll("video")].map(
        (video) =>
          new Promise<void>((resolve) => {
            const freeze = () => {
              video.pause();
              if (Math.abs(video.currentTime) < 0.01) {
                resolve();
                return;
              }

              video.addEventListener("seeked", () => resolve(), { once: true });
              video.currentTime = 0;
            };

            if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
              freeze();
              return;
            }

            video.addEventListener("loadedmetadata", freeze, { once: true });
          }),
      ),
    );
  });
}

async function waitForImages(page: Page) {
  await page.evaluate(async () => {
    await Promise.all(
      [...document.images].map(async (image) => {
        if (!image.complete) {
          await new Promise<void>((resolve) => {
            image.addEventListener("load", () => resolve(), { once: true });
            image.addEventListener("error", () => resolve(), { once: true });
          });
        }

        if (image.decode) {
          await image.decode().catch(() => undefined);
        }
      }),
    );
  });
}

test.describe("Selected work visual parity", () => {
  for (const viewport of viewports) {
    test(`${viewport.name} ${viewport.width}px`, async ({ page }) => {
      await page.setViewportSize({ height: viewport.height, width: viewport.width });
      await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
      await waitForImages(page);
      await freezeVideos(page);

      const clip = await selectedWorkClip(page);
      const screenshot = await page.screenshot({
        animations: "disabled",
        caret: "hide",
        clip,
      });

      expect(screenshot).toMatchSnapshot(`selected-work-${viewport.name}-${viewport.width}.png`);
    });
  }
});
