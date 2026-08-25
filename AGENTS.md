## Critical Rules

- **NEVER commit or push anything without explicit user confirmation.**
  - Before any `git commit` or `git push`, stop and ask the user for approval.
  - Even for small/simple changes. Even if the user just said "go" or "do it".
  - Wait for a clear affirmative response like "yes, commit" or "go ahead" before proceeding.
  - `git add` is fine to do autonomously — just don't commit or push without asking first.
- **Branch is `main`, not `master` — workflows are configured for `main`.**
- **Always use i18n files (`src/i18n/es.json`, `src/i18n/en.json`) for all user-facing text.** Never hardcode strings in components — add keys to the JSON files and reference them via `t()`. This includes hero text, feature labels, FAQs, meta tags, and any other visible copy.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
