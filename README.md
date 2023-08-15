# [laVelada.es Landing Rework](https://ferranjs.github.io/lavelada-remake/) ⬅

Features:

- Complex starting and hover animations
- Only **750kB bundle size (550kB in mobile)** including images
- **Responsive** design
- **SEO** friendly
- Optimized images using **Avif** and **WebP** formats
- "Clip-pathed" images for best hover experience
- Pre-commit Hooks with Husky & Lint-staged for a Prettier write

Perfect [Google PageSpeed Insights Score](https://pagespeed.web.dev/analysis/https-ferranjs-github-io-lavelada-remake/2gsa2cexd2?form_factor=desktop)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/ferranJS/lavelada-remake)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/ferranJS/lavelada-remake)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/ferranJS/lavelada-remake?devcontainer_path=.devcontainer/basics/devcontainer.json)

<p float="left">
  <a href="https://ferranjs.github.io/lavelada-remake">
    <img src="https://github.com/ferranJS/lavelada-remake/blob/main/public/landing-screenshot-2.gif" width="197px" alt="desktop view of ferranjs landing page screenshot">
  </a>
  <a href="https://ferranjs.github.io/lavelada-remake">
    <img src="https://github.com/ferranJS/lavelada-remake/blob/main/public/landing-screenshot.gif" width="627px" alt="mobile view of ferranjs landing page screenshot">
  </a>
</p>

This landing is a remake of the [original one](https://lavelada.es/), made in a few days with [Tailwind](https://tailwindcss.com/) as an improvement for faster CSS coding and [Astro](https://astro.build/) for good performance (packs with [Vite](https://vitejs.dev/)) and comfortable web development.

## Setup roadmap

>     npm create astro@latest
>     npx astro add tailwind
>     npm i -D prettier prettier-plugin-astro
>     npm i -D prettier-plugin-tailwindcss // for prettier automatic tailwind class sorting
>     npm i -D ts-standard // for linting

- Set up Github Actions in settings and add _.github/workflows/_[_deploy.yml_ configuration](https://github.com/ferranJS/lavelada-remake/blob/main/.github/workflows/deploy.yml) to the root of the project.

- Configure _astro.config.mjs_ following the [official docs](https://docs.astro.build/en/guides/deploy/github/) and add the base to all src in the project.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
