# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Vite dev server
npm run build    # production build to dist/
npm run preview  # serve the production build
```

There is no test runner, linter, or formatter configured.

## Architecture

Single-page personal portfolio: Vue 3 (`<script setup>`, plain JavaScript, no TypeScript), Vite 5, Tailwind CSS 3, deployed on Vercel at https://leonelrosado.dev. Analytics uses `inject()` from `@vercel/analytics` in `main.js` (not the `/vue` component, which imports `vue-router` and breaks the build). There is no router or state store: `App.vue` stacks the sections in order (Hero → About → Skills → Projects → Services → Contact), and navigation uses anchor links (`#about`, `#skills`, `#projects`, `#services`, `#contact`) with CSS smooth scrolling. `section[id]` has `scroll-margin-top` so headings clear the fixed nav.

### i18n (all user-facing copy)

- All visible text lives in `src/i18n/lang/en.json` and `es.json`. Components don't hardcode copy. Any key you add or rename must be changed in **both** files.
- `vue-i18n` runs in Composition mode (`legacy: false`), with `en` as both the default and the fallback locale.
- The language toggle in `TheNav.vue` writes the chosen locale to `localStorage` under the `lang` key, restores it on mount, and keeps `<html lang>` in sync. The nav shows desktop links from `lg` and a hamburger menu below.
- Lists such as projects, experience, and services are JS arrays inside each component. Translatable fields are **functions** (`title: () => t('projects.items.project_1.title')`), so they re-evaluate when the locale changes. Non-translated data, such as tech `tags`, stays as plain values. Follow this pattern when adding items.

### Styling and animation

- Design tokens are CSS variables: `tailwind.config.js` maps each color to `rgb(var(--x) / <alpha-value>)` (so opacity modifiers like `border-ink/10` work), and `src/assets/css/style.css` defines the values in `:root` (light) and `.dark` (dark), outside `@layer` so Tailwind doesn't purge `.dark`. Tokens: `accent` / `accent-dark` / `accent-light` / `accent-fill` (primary button background; darker than `accent` in dark mode so white labels pass AA), `ink` / `ink-2` / `ink-3`, `paper` / `paper-2`, plus `surface` / `surface-2` / `surface-3` / `on-surface`, which stay dark in both themes (Projects section and footer). Never use raw hex values or `bg-[#…]`; add a token instead. Fonts: `font-display` / `font-body`, both "Mozilla Text".
- Dark mode: `darkMode: 'class'`. `src/composables/useTheme.js` owns the state (`localStorage.theme`, falls back to `prefers-color-scheme` and follows OS changes until the user picks a theme). An inline script in `index.html` applies the class before first paint and must stay in sync with `useTheme.js`. All `localStorage` access is wrapped in try/catch.
- `prefers-reduced-motion` is handled globally at the end of `style.css`; the hero counter jumps straight to its final values.
- `src/assets/css/style.css` defines the shared utilities `.section-label` (heading with an accent rule) and `.timeline-dot`. It also defines the animation classes `.animate-fade-up`, `.animate-fade-down`, `.animate-bar` and the stagger delays `.delay-100`, `.delay-220`, `.delay-350`, `.delay-480`, `.delay-610`.
- Scroll-reveal pattern used by the sections: a `sectionRef` plus an `isVisible` ref, and an `IntersectionObserver` (threshold 0.2) that sets `isVisible` once and then disconnects. Elements bind `:class="{ 'animate-fade-up delay-XXX': isVisible }"`, and list items use `opacity-0` until they're visible plus an inline `animationDelay` per index.
- `HeroSection.vue` animates its stat counters by hand with an eased counter.
- Tall sections (Projects) use `IntersectionObserver` with `threshold: 0` + `rootMargin`, because a 0.2 ratio is never reached on mobile.
- Icons come from Google Material Symbols. `index.html` loads only the icons listed in its `icon_names=` parameter (currently `close,dark_mode,g_translate,light_mode,menu`, which must be alphabetical), so a new icon has to be added to that URL.

### Projects, CV and contact form

- `ProjectsSection.vue` holds the data for featured personal projects (rendered with the reusable `FeaturedProject.vue`; shape: `id, title, desc(), highlights[], stack[], images[{ src, alt(), width, height }], demo, repo`) and for client work. Screenshots live in `src/assets/img/projects/<project>/` and are imported as modules.
- CVs are static files in `public/cv/leonel-rosado-cv-{en,es}.pdf`; `useCvLink()` picks one by locale.
- `ContactForm.vue` posts to Web3Forms with `import.meta.env.VITE_WEB3FORMS_KEY` (see `.env.example`). Without the key it shows the error state. In i18n messages a literal `@` must be written `{'@'}`.
