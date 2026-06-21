# Room for God & Others

A writing-focused static site for essays, poetry, journal notes, aphorisms, and favorite quotations.

Live site: https://gregconradismith.github.io/room-for-god-and-others/

This repository is set up as a small Jekyll site, which GitHub Pages can build directly.

## Writing

- Essays live in `_essays/` as dated Markdown files.
- Poems live in `_poems/` as Markdown files.
- Blurbs live in `_blurbs/` as Markdown files.
- Aphorisms live in `_aphorisms/` as Markdown files.
- Quotations live in `_quotes/` as Markdown files.
- Shared pages live at the repository root, such as `about.md`, `essays.md`, `poetry.md`, `blurbs.md`, `aphorisms.md`, and `quotes.md`.
- `quote-of-the-day.md` selects a quotation from `_quotes/` each time the site builds, and `/quotes/feed.xml` exposes the quotation archive as RSS.

Create a new essay with a file name like:

```text
_essays/2026-06-14-a-new-essay.md
```

Create a new poem with a file name like:

```text
_poems/a-new-poem.md
```

Each file starts with YAML front matter:

```yaml
---
layout: essay
title: "A New Essay"
date: 2026-06-14
category: essay
excerpt: "A short summary for listing pages."
---
```

For poems, use `layout: poem`. For aphorisms, use `layout: aphorism`. For quotations, use `layout: quote`. For blurbs, use `layout: blurb`.

Images are rendered from front matter when `image` is set. Use `image_alt` for accessible alt text, and optionally use `image_position` to adjust thumbnail cropping:

```yaml
image: /assets/images/quotes/a-new-quote.jpg
image_alt: "A concise description of the image."
image_position: "50% 35%"
```

## Build and Deploy

This repository is intended to build through GitHub Actions and GitHub Pages. Do not install or run Jekyll locally for this project; push Markdown changes and let the Pages workflow convert them to static HTML.

The Pages workflow also runs once a day so the static quote-of-the-day page refreshes. To enable privacy-respecting analytics, add the site domain to `analytics.plausible_domain` in `_config.yml` after creating the site in Plausible or a compatible self-hosted endpoint. The reader feedback buttons send a custom event only when that analytics hook is configured; otherwise they record a local acknowledgement in the visitor's browser.

## Codex Coordination

Codex session state is tracked in `.codex/handoff.md`; durable decisions and task history may also appear in `.codex/` when useful.
