# Portfolio

Next.js project scaffolded with Bun, Tailwind CSS, TypeScript, and Biome.

## Commands

```bash
bun install
bun run dev
bun run lint
bun run format
bun run build
```

## Deploy to Cloudflare

This project is configured as a static Next.js export. The production build
creates a deployable `out/` directory, which Wrangler uploads as Cloudflare
static assets.

In the Cloudflare Git build settings, use:

- Build command: `bun run build`
- Deploy command: `npx wrangler deploy`
- Non-production branch deploy command: `npx wrangler versions upload`

Cloudflare will deploy every commit to the production branch. The deployment
configuration is in `wrangler.jsonc`.
