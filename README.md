# HexaClamp Website

This project is deployed to GitHub Pages with GitHub Actions.

## Local development

1. Install dependencies with `npm install`.
2. Start the dev server with `npm run dev`.

## Production build

Run `npm run build` to generate the static export in `out/`.

## GitHub Pages deployment

The repository remote is `Trainvent/website-hexaclamp`, there is no `CNAME` file, and the default branch is `master`, so the current deployment target is the project Pages subpath:

`https://trainvent.github.io/website-hexaclamp/`

For that hosting mode, the GitHub Actions workflow sets:

`PAGES_BASE_PATH=website-hexaclamp`

That keeps asset and route URLs under `/website-hexaclamp/...` so the exported site stays styled on GitHub Pages.

If you later move the site to a custom domain or a root-level Pages site, leave `PAGES_BASE_PATH` empty and add `public/CNAME` if needed.
