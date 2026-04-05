# HexaClamp Website

This project is deployed to GitHub Pages with GitHub Actions.

## Local development

1. Install dependencies with `npm install`.
2. Start the dev server with `npm run dev`.

## Production build

Run `npm run build` to generate the static export in `out/`.

## GitHub Pages deployment

The repository remote is `Trainvent/website-hexaclamp`, the default branch is `master`, and the site is configured for the custom domain:

`https://hexaclamp.com/`

For custom-domain hosting, `PAGES_BASE_PATH` must be left empty so the exported site uses root asset paths such as `/assets/...` and `/proto_center.png`.

The custom domain is published through `public/CNAME`.

If you later move the site back to GitHub project Pages at `https://trainvent.github.io/website-hexaclamp/`, set `PAGES_BASE_PATH=website-hexaclamp` in the workflow again.
