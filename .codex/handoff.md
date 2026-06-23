# Codex Handoff

Date: 2026-06-23

Repo: `room-for-god-and-others`

Branch: `main`

<!-- codex-transfer-snapshot:start -->
## 2026-06-23 Computer Transfer Snapshot

- Checked on 2026-06-23 from `/Users/gregconradismith/Git` before moving to the office Mac.
- `main` is tracking `origin/main` unless this status says otherwise.
- Origin: `git@github.com:gregconradismith/room-for-god-and-others.git`
- Latest commit at refresh time: `281dc1a 2026-06-23 13:28:00 -0400 Move saying signature below quote text`
- On the next machine, read `AGENTS.md` first, then this handoff.
- The working tree was clean before this handoff refresh; after committing the refresh, `git status --short --branch` should again show only the branch line.

Status before this handoff edit:

```bash
## main...origin/main
```
<!-- codex-transfer-snapshot:end -->

Current Git status after the 2026-06-22 homepage hero image update:

```bash
## main...origin/main
```

## Repository Role

This is the public GitHub Pages repository for the Room for God & Others writing
site:

https://gregconradismith.github.io/room-for-god-and-others/

It contains public essays, poems, thoughts, sayings, favorite voices, shared
pages, images, and small Ruby helper scripts for the Pages workflow.

## High-Value Context

- Read `AGENTS.md` before editing.
- This public repository was recreated with clean public history on 2026-06-18.
  Do not push from older local clones that may still contain pre-reset history.
- Three Greg Conradi Smith sayings were added or updated on 2026-06-20:
  `faith-is-not-credulity.md`,
  `god-is-not-honored-by-simplifying-truth.md`, and
  `writing-is-the-act-of-telling-the-truth.md`.
- Keep this repo public-safe. Do not copy private-only writing, private triage
  inventories, or sensitive material from the paired private repo into this
  public repo unless Greg explicitly asks.
- The trigger phrase `publish from private: move [filename or title] to the
  public site` means Greg has explicitly approved publishing the named item from
  the paired private repo. Keep public notes public-safe, run
  `ruby scripts/validate_content.rb`, then commit and push.
- Do not install or run Jekyll/Bundler locally for this repo.
- GitHub Actions builds and deploys the site from `main`.
- `scripts/update_goodreads.rb` refreshes Goodreads data during the workflow;
  `_data/goodreads.yml` is the committed fallback snapshot.
- `scripts/update_featured_writing.rb` randomizes the homepage writing list
  during the workflow; `_data/featured_writing.yml` is the committed fallback
  snapshot.
- On 2026-06-21, public labels and URLs were changed from
  Sayings/Thoughts/Quotations to Sayings/Thoughts/Voices. The internal
  collection keys and existing asset folders remain `_sayings`, `_thoughts`,
  `_quotes`, `assets/images/quotes`, and `assets/images/thoughts`.
- The site includes a search and category filter browser. Browser result order
  is essays, poetry, sayings, thoughts, voices.
- On 2026-06-21, the search browser moved from the homepage to `/search/`.
  `Search` and `Categories` now appear as matching green controls at the end of
  the main navigation. Category menu items link into `/search/?category=...`.
- Topic categories live in `_data/writing_categories.yml`; content items have
  multi-valued `categories:` front matter for filtering.
- `scripts/validate_content.rb` checks YAML front matter and image references.
- On 2026-06-22, the homepage hero background image at
  `assets/images/reading-room.png` was replaced with a generated literary
  reading-room illustration. `ruby scripts/validate_content.rb` passed after
  the asset replacement.
- On 2026-06-23, the Aphorisms collection was renamed in public UI and
  permalinks to Sayings. Content now lives in `_sayings/`, the collection key
  is `sayings`, and URLs are `/sayings/...`.
- On 2026-06-23, the Saying layout was updated so items whose
  `source: "Greg Conradi Smith"` render the initials logo
  `assets/images/sayings/gdcs-signature.png` directly under the quote text.
  Do not put that logo in the header/left metadata column. Current size is
  controlled by `.signature-logo` in `assets/css/styles.css` and is one-third
  scale via `max-width: min(74px, 33%)`.
- The latest Pages workflow for `281dc1a` completed successfully. Live HTML was
  checked for `/sayings/corporations-are-not-people/` and
  `/sayings/lord-make-me-a-fool-for-christ/`; in both, the logo appears inside
  `<div class="prose quote-body">` after the quote paragraph.
- Greg asked that Codex always commit and push site changes so he can view the
  deployed HTML. After pushing, watch the GitHub Actions Pages workflow until
  the deploy completes whenever possible.
- A title-confirmation pass is paused. It was started across all authored
  Markdown content. Item 1 of 127 was confirmed: `_essays/2018-01-01-why-i-am-perhaps-not-an-evangelical.md`
  with title `Why I Am (Perhaps Not) an Evangelical`. Resume at item 2:
  `_essays/2025-06-11-illusion-of-personhood-generative-ai-and-simulated-communication.md`
  with title `The Illusion of Personhood: Generative AI and Simulated Communication`.

## Useful Commands

Check status:

```bash
git status --short --branch
```

Check whitespace in a scoped diff:

```bash
git diff --check
```

Validate public content references without building locally:

```bash
ruby scripts/validate_content.rb
```

## Migration Readiness Snapshot

- Checked on 2026-06-21 before moving computers.
- Non-interactive `git fetch --all --prune` completed successfully.
- Root `README.md` points to `.codex/handoff.md` when a root README exists.

Pre-edit Git state after fetch:

```bash
## main...origin/main
```

## Notes For The Next Codex

- Keep handoff notes public-safe and workflow-focused.
- Do not add private repo details or private-only writing lists.
- Do not add `vendor/bundle`, `.bundle/`, `Gemfile.lock`, `_site/`, or local
  Jekyll/Bundler artifacts.
- To validate deployment, push to `main` and inspect the GitHub Actions
  Pages/Jekyll workflow run.
- Do not run a local Jekyll build unless Greg explicitly asks; this repo is
  intended to build through GitHub Actions.
- After adding or updating `AGENTS.md` / `.codex/handoff.md`, commit the scoped
  change and push it to `main`.
