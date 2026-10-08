<template>
  <section id="skills" class="border-t border-ink/10 px-6 md:px-12 lg:px-16 py-20 md:py-24" ref="sectionRef">
    <div class="section-label" :class="{ 'animate-fade-up delay-100': isVisible }">
      <span class="font-display font-bold text-xs uppercase tracking-widest2 text-accent">{{ t('skills.label') }}</span>
    </div>
    <h2 class="font-display font-extrabold tracking-tighter mb-14"
        :class="{ 'animate-fade-up delay-220': isVisible }"
        style="font-size: clamp(2rem, 3.5vw, 3rem)">
      {{ t('skills.title') }}
    </h2>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
      <div v-for="(group, i) in groups" :key="group.id"
           data-testid="skill-group"
           class="bg-paper p-7 md:p-9"
           :class="{ 'animate-fade-down': isVisible, 'opacity-0': !isVisible }"
           :style="{ animationDelay: `${i * 0.15}s` }">
        <h3 class="font-display font-bold text-xs uppercase tracking-widest text-ink-3 mb-5">
          {{ group.title() }}
        </h3>
        <ul class="flex flex-wrap gap-1.5 list-none">
          <li v-for="skill in group.items" :key="skill"
              class="text-xs font-medium px-2.5 py-1 border border-ink/10 bg-paper-2 text-ink-2">
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const sectionRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

const groups = [
  {
    id: 'frontend',
    title: () => t('skills.groups.frontend'),
    items: ['JavaScript', 'TypeScript', 'Vue 3', 'React', 'Astro', 'HTML5 / CSS3', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    title: () => t('skills.groups.backend'),
    items: ['PHP', 'Laravel', 'Node.js / Express', 'Slim 4', 'MySQL / MariaDB', 'REST APIs'],
  },
  {
    id: 'testing',
    title: () => t('skills.groups.testing'),
    items: ['Vitest', 'Playwright', 'axe-core', 'Lighthouse CI', 'ESLint / Prettier', 'GitHub Actions'],
  },
  {
    id: 'tools',
    title: () => t('skills.groups.tools'),
    items: ['Git / GitHub', 'Vite', 'Vercel', 'SCRUM'],
  },
]
</script>
