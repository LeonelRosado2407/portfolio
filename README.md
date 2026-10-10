# Leonel Rosado — Portfolio

Personal portfolio of **Leonel Rosado**, full-stack developer focused on interfaces. Built with **Vue 3**, **Vite** and **Tailwind CSS**, bilingual (EN/ES) with light and dark themes.

**Live:** [leonelrosado.dev](https://leonelrosado.dev)

## Features

- Featured personal projects with screenshot galleries, live demos and source links ([Dulce Tentación](https://dulce.leonelrosado.dev), [Nexus](https://nexus.leonelrosado.dev))
- Professional experience and client work synced with my CV
- English / Spanish (`vue-i18n`), remembered per visitor
- Light / dark theme that follows the OS until the visitor picks one, with no flash on load
- Downloadable CV in the active language
- Contact form powered by [Web3Forms](https://web3forms.com) (no backend)
- Responsive from 375px, mobile menu, `prefers-reduced-motion` support, Open Graph meta

## Tech Stack

- [Vue 3](https://vuejs.org/) with `<script setup>` (JavaScript)
- [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/) with design tokens as CSS variables
- [vue-i18n](https://vue-i18n.intlify.dev/)
- Font: Mozilla Text (Google Fonts) · Icons: Material Symbols
- Deployed on Vercel with `@vercel/analytics`

## Project Structure

```
src/
├── components/
│   ├── TheNav.vue          # Fixed nav, mobile menu, language + theme toggles
│   ├── HeroSection.vue     # Title, stats, core stack, CTAs
│   ├── AboutSection.vue    # Bio and experience timeline
│   ├── SkillsSection.vue   # Skills grouped by area
│   ├── ProjectsSection.vue # Featured personal projects + client work
│   ├── FeaturedProject.vue # Reusable featured project card with gallery
│   ├── ServicesSection.vue # Services offered
│   ├── ContactSection.vue  # Contact info, CV, form
│   ├── ContactForm.vue     # Web3Forms contact form
│   └── TheFooter.vue
├── composables/
│   ├── useTheme.js         # Light/dark theme state
│   └── useCvLink.js        # CV URL for the active locale
├── i18n/                   # vue-i18n setup + en.json / es.json
└── assets/                 # CSS, logos, project screenshots
public/
├── cv/                     # Downloadable CVs (EN/ES)
└── og.jpg                  # Social sharing image
```

## Setup

```bash
npm install
cp .env.example .env   # add your Web3Forms access key
npm run dev
npm run build
npm run preview
```

| Variable             | Purpose                                                          |
| -------------------- | ---------------------------------------------------------------- |
| `VITE_WEB3FORMS_KEY` | Web3Forms access key for the contact form. Set it in Vercel too. |

Without the key the site works, but the contact form shows an error on submit.

## Contact

- **Email:** leonelrosado2407@gmail.com
- **GitHub:** [LeonelRosado2407](https://github.com/LeonelRosado2407)
- **LinkedIn:** [Noé Leonel Rosado Quintal](https://www.linkedin.com/in/no%C3%A9-leonel-rosado-quintal-20a701263)
- **Location:** Mérida, Yucatán · Available for remote work worldwide
