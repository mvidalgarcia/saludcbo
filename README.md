# Salud CBO

Website for [Salud CBO](https://cbosalud.es), a personal training, physiotherapy, nutrition and Reformer Pilates centre in Lugones, Asturias.

It is a static, bilingual site (Spanish at `/`, English under `/en/`) built with Astro, TypeScript and Tailwind CSS, and hosted on Cloudflare Workers with static assets.

## Project structure

```text
src/
├── pages/        # Routes (ES at the root, EN under en/)
├── components/   # Shared and page-level Astro components
├── layouts/      # BaseLayout (head, SEO, header, footer)
├── data/         # Services, team and centres (JSON content collections)
├── content/      # Blog posts (Markdown)
├── i18n/         # es.json / en.json with all user-facing text
└── styles/       # Global Tailwind CSS
public/           # Static assets, Cloudflare _redirects and _headers
```

## Commands

Requires Node 22 (see `.node-version`). Run from the project root:

| Command             | Action                                          |
| :------------------ | :---------------------------------------------- |
| `npm install`       | Install dependencies and the pre-commit hook    |
| `npm run dev`       | Start the dev server at `localhost:4321`        |
| `npm run build`     | Build the production site to `./dist/`          |
| `npm run preview`   | Preview the build locally                       |
| `npm run lint`      | Run ESLint (`lint:fix` to auto-fix)             |
| `npm run format`    | Check Prettier formatting (`format:fix` to fix) |
| `npm run typecheck` | Run `astro check`                               |

## CI and deployment

GitHub Actions runs lint, format, typecheck and build on every pull request and on pushes to `main`. Cloudflare Workers Builds deploys the site and creates a preview for each pull request (see `wrangler.jsonc`).
