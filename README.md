# [laVelada.es Landing Rework](https://ferranjs.github.io/astro-tailwind-landing-1/) ⬅

This landing is a reimagining of the original one a made in a few days with [Tailwind](https://tailwindcss.com/) as an improvement for faster CSS coding and [Astro](https://astro.build/) for good performance (packs with [Vite](https://vitejs.dev/)) and comfortable web development.

Features:

- Complex starting and hover animations
- **Responsive** design
- Only 800kB bundle size including images
- Optimized images using **WebP**, **Avif** formats and **fetchpriority** loading
- "Clip-pathed" images for best hover experience
- **SEO** friendly

[PageSpeed Insights](https://pagespeed.web.dev/analysis/https-ferranjs-github-io-astro-tailwind-landing-1/k34j9xr5ds?form_factor=desktop)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/ferranJS/astro-tailwind-landing-1)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/ferranJS/astro-tailwind-landing-1)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/ferranJS/astro-tailwind-landing-1?devcontainer_path=.devcontainer/basics/devcontainer.json)

<img src="https://github.com/ferranJS/astro-tailwind-landing-1/blob/main/public/landing-screenshot.gif" height="434px" alt="landing page screenshot">

## Setup roadmap

>     npm create astro@latest
>     npx astro add tailwind
>     npm i -D prettier prettier-plugin-astro
>     npm i -D prettier-plugin-tailwindcss // for prettier automatic tailwind class sorting
>     npm i -D ts-standard // for linting

- Activate Github Actions in settings and add _.github/workflows/_[_deploy.yml_ configuration](https://github.com/ferranJS/astro-tailwind-landing-1/blob/main/.github/workflows/deploy.yml) to the root of the project.

- Configure _astro.config.mjs_ following the [official docs](https://docs.astro.build/en/guides/deploy/github/) and add the base to all src in the project.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
