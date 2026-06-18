# Repository Instructions for Codex

This site is built by GitHub Actions, not by installing or running Jekyll locally.

- Do not run `bundle install`, install Jekyll gems, or create local Bundler artifacts in this repository.
- Do not add `vendor/bundle`, `.bundle/`, or `Gemfile.lock`.
- Markdown-to-HTML conversion should happen in GitHub Actions after pushing to GitHub Pages.
- To validate deployment, push to `main` and inspect the GitHub Actions Pages/Jekyll workflow run.
