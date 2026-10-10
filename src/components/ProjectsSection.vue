<template>
  <section id="projects" class="bg-surface text-on-surface px-6 md:px-12 lg:px-16 py-20 md:py-24" ref="sectionRef">
    <div class="section-label before:bg-accent" :class="{ 'animate-fade-up delay-100': isVisible }">
      <span class="font-display font-bold text-xs uppercase tracking-widest2 text-accent">{{ t('projects.label') }}</span>
    </div>
    <h2 class="font-display font-extrabold tracking-tighter leading-tight mb-14 text-on-surface"
        :class="{ 'animate-fade-up delay-220': isVisible }"
        style="font-size: clamp(2rem, 3.5vw, 3rem)">
      {{ t('projects.title') }}
    </h2>

    <!-- Personal projects -->
    <h3 class="font-display font-bold text-xs uppercase tracking-widest text-on-surface/55 mb-6">
      {{ t('projects.personal_label') }}
    </h3>
    <div class="flex flex-col gap-px bg-on-surface/5 mb-20">
      <div v-for="(project, i) in featured" :key="project.id"
           :class="{ 'animate-fade-down': isVisible, 'opacity-0': !isVisible }"
           :style="{ animationDelay: `${i * 0.2}s` }">
        <FeaturedProject :project="project" :reverse="i % 2 === 1" />
      </div>
    </div>

    <!-- Client work -->
    <h3 class="font-display font-bold text-xs uppercase tracking-widest text-on-surface/55 mb-6">
      {{ t('projects.client_label') }}
    </h3>
    <div class="grid md:grid-cols-2 gap-px bg-on-surface/5">
      <div v-for="(project, i) in projects" :key="i"
           data-testid="client-project"
           class="bg-surface-2 p-7 md:p-10 hover:bg-surface-3 transition-colors duration-200 flex flex-col"
           :class="{ 'animate-fade-down': isVisible, 'opacity-0': !isVisible }"
           :style="{ animationDelay: `${(i + featured.length) * 0.2}s` }">
        <div class="flex items-center justify-between gap-4 mb-6">
          <span class="font-display font-bold text-xs tracking-widest text-accent">
            {{ String(i + 1).padStart(2, '0') }} / {{ String(projects.length).padStart(2, '0') }}
          </span>
          <span class="text-xs font-medium uppercase tracking-wider px-2.5 py-1 border border-accent/40 text-accent">
            {{ project.kind() }}
          </span>
        </div>
        <h4 class="font-display font-bold text-xl tracking-tight text-on-surface mb-3 leading-snug">
          {{ project.title() }}
        </h4>
        <p class="text-sm text-on-surface/60 leading-relaxed mb-6">
          {{ project.desc() }}
        </p>
        <div class="flex flex-wrap gap-1.5 mb-7">
          <span v-for="tag in project.tags" :key="tag"
                class="text-xs font-medium px-2.5 py-1 border border-on-surface/10 text-on-surface/70">
            {{ tag }}
          </span>
        </div>
        <p class="text-xs text-on-surface/55 border-t border-on-surface/10 pt-4 leading-relaxed mt-auto">
          <strong class="text-on-surface/80 font-medium">{{ t('projects.my_role') }}</strong>
          {{ project.role() }}
        </p>
        <p class="text-xs text-on-surface/55 mt-3">{{ t('projects.private_note') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import FeaturedProject from './FeaturedProject.vue'

import dulceHome from '../assets/img/projects/dulce-tentacion/home.jpg'
import dulceMenu from '../assets/img/projects/dulce-tentacion/menu.jpg'
import dulceSearch from '../assets/img/projects/dulce-tentacion/mobile-busqueda.jpg'
import dulceLightbox from '../assets/img/projects/dulce-tentacion/mobile-lightbox.jpg'
import nexusHero from '../assets/img/projects/nexus/hero.jpg'
import nexusPricing from '../assets/img/projects/nexus/pricing.jpg'
import nexusDialog from '../assets/img/projects/nexus/dialog.jpg'
import nexusMobile from '../assets/img/projects/nexus/mobile.jpg'

const { t } = useI18n()
const sectionRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  // This section is several screens tall on mobile, so a ratio threshold would never be reached
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0, rootMargin: '0px 0px -120px 0px' }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

const desktop = { width: 1440, height: 900 }
const mobile = { width: 780, height: 1688 }

const featured = [
  {
    id: 'dulce-tentacion',
    title: 'Dulce Tentación',
    desc: () => t('projects.featured.dulce.desc'),
    highlights: [
      () => t('projects.featured.dulce.h1'),
      () => t('projects.featured.dulce.h2'),
      () => t('projects.featured.dulce.h3'),
      () => t('projects.featured.dulce.h4'),
    ],
    stack: ['Vue 3', 'TypeScript', 'Tailwind v4', 'Pinia', 'Vue Router', 'Vitest', 'Playwright'],
    images: [
      { src: dulceHome,     alt: () => t('projects.featured.dulce.alt_home'),     ...desktop },
      { src: dulceMenu,     alt: () => t('projects.featured.dulce.alt_menu'),     ...desktop },
      { src: dulceSearch,   alt: () => t('projects.featured.dulce.alt_search'),   ...mobile },
      { src: dulceLightbox, alt: () => t('projects.featured.dulce.alt_lightbox'), ...mobile },
    ],
    demo: 'https://dulce.leonelrosado.dev',
    repo: 'https://github.com/LeonelRosado2407/dessert-page',
  },
  {
    id: 'nexus',
    title: 'Nexus',
    desc: () => t('projects.featured.nexus.desc'),
    highlights: [
      () => t('projects.featured.nexus.h1'),
      () => t('projects.featured.nexus.h2'),
      () => t('projects.featured.nexus.h3'),
      () => t('projects.featured.nexus.h4'),
    ],
    stack: ['Astro 6', 'TypeScript', 'Tailwind v4', 'Vitest', 'Playwright', 'axe-core', 'Lighthouse CI'],
    images: [
      { src: nexusHero,    alt: () => t('projects.featured.nexus.alt_hero'),    ...desktop },
      { src: nexusPricing, alt: () => t('projects.featured.nexus.alt_pricing'), ...desktop },
      { src: nexusDialog,  alt: () => t('projects.featured.nexus.alt_dialog'),  ...desktop },
      { src: nexusMobile,  alt: () => t('projects.featured.nexus.alt_mobile'),  ...mobile },
    ],
    demo: 'https://nexus.leonelrosado.dev',
    repo: 'https://github.com/LeonelRosado2407/Nexus-Landing-Page',
  },
]

const projects = [
  {
    title: () => t('projects.items.project_1.title'),
    kind:  () => t('projects.items.project_1.kind'),
    desc:  () => t('projects.items.project_1.desc'),
    tags: ['PHP', 'JavaScript', 'MySQL', 'Payments / POS'],
    role:  () => t('projects.items.project_1.role'),
  },
  {
    title: () => t('projects.items.project_2.title'),
    kind:  () => t('projects.items.project_2.kind'),
    desc:  () => t('projects.items.project_2.desc'),
    tags: ['JavaScript', 'Vue.js 3', 'CSS3', 'UI / UX'],
    role:  () => t('projects.items.project_2.role'),
  },
  {
    title: () => t('projects.items.project_3.title'),
    kind:  () => t('projects.items.project_3.kind'),
    desc:  () => t('projects.items.project_3.desc'),
    tags: ['PHP', 'JavaScript', 'MySQL', 'PayPal'],
    role:  () => t('projects.items.project_3.role'),
  },
  {
    title: () => t('projects.items.project_4.title'),
    kind:  () => t('projects.items.project_4.kind'),
    desc:  () => t('projects.items.project_4.desc'),
    tags: ['PHP', 'JavaScript', 'MySQL', 'SCRUM'],
    role:  () => t('projects.items.project_4.role'),
  },
]
</script>
