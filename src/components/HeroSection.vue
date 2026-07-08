<template>
  <section id="home" class="min-h-screen grid md:grid-cols-2 pt-20">

    <!-- Left -->
    <div class="flex flex-col justify-center px-16 py-20 border-b md:border-b-0 md:border-r border-ink/10">
      <span class="animate-fade-up inline-block text-xs font-medium uppercase tracking-widest
                   text-accent border border-accent px-3 py-1 w-fit mb-8">
        Open to freelance projects
      </span>

      <h1 class="animate-fade-up delay-100 font-display font-extrabold leading-none tracking-tighter mb-6"
          style="font-size: clamp(2.8rem, 5vw, 4.5rem)">
        Frontend<br />
        <em class="not-italic text-accent font-semibold">Developer</em><br />
        &amp; UI Builder
      </h1>

      <p class="animate-fade-up delay-220 text-ink-2 leading-relaxed max-w-md mb-10">
       {{t('hero.description')}}
      </p>

      <div class="animate-fade-up delay-350 flex flex-wrap gap-4">
        <a href="#projects"
           class="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium
                  px-7 py-3 hover:bg-accent-dark transition-colors duration-200">
          {{ t('hero.btn_wacth_my_work') }} →
        </a>
        <a href="#contact"
           class="inline-flex items-center gap-2 border border-ink/15 text-ink text-sm font-medium
                  px-7 py-3 hover:border-ink-2 transition-colors duration-200">
          {{ t('hero.btn_get_in_touch') }}
        </a>
      </div>
    </div>

    <!-- Right -->
    <div class="flex flex-col justify-center px-12 py-20 bg-paper-2">
      <!-- Stats grid -->
      <div class="grid grid-cols-2 border border-ink/10">
        <div v-for="(stat, i) in stats" :key="i"
             class="p-7 border-ink/10"
             :class="{
               'border-r': i % 2 === 0,
               'border-b': i < 2,
             }">
          <div class="font-display font-extrabold text-5xl tracking-tighter text-accent leading-none mb-1">
            {{ formatStatValue(stat, i) }}
          </div>
          <div class="text-xs uppercase tracking-wide text-ink-3">{{ stat.label() }}</div>
        </div>
      </div>

      <!-- Stack -->
      <div class="mt-10">
        <h3 class="font-display font-bold text-xs uppercase tracking-widest text-ink-3 mb-4">
          {{ t('hero.core_stack') }}
        </h3>
        <div class="flex flex-wrap gap-1.5">
          <span v-for="tech in stack" :key="tech.name"
                class="text-xs font-medium px-2.5 py-1 border"
                :class="tech.accent
                  ? 'bg-accent-light border-accent/20 text-accent'
                  : 'bg-paper border-ink/10 text-ink-2'">
            {{ tech.name }}
          </span>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const stats = [
  { target: 3, suffix: '+', label: () => t('hero.experience') },
  { target: 3, suffix: '', label: () => t('hero.professional_role') },
  { target: 5, suffix: '+', label: () => t('hero.projects_delivered') },
  { target: 24, suffix: 'h', label: () => t('hero.response_time') },
]

const animatedValues = ref(stats.map(() => 0))

const formatStatValue = (stat, index) => {
  const value = animatedValues.value[index] ?? 0
  return `${Math.round(value)}${stat.suffix ?? ''}`
}

const animateStatValue = (index, target, duration = 1400) => {
  const startTime = performance.now()

  const step = (currentTime) => {
    const progress = Math.min((currentTime - startTime) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)

    animatedValues.value[index] = target * eased

    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}

onMounted(() => {
  stats.forEach((stat, index) => {
    setTimeout(() => animateStatValue(index, stat.target), index * 140)
  })
})

const stack = [
  { name: 'JavaScript',     accent: true  },
  { name: 'Vue.js 3',       accent: true  },
  { name: 'PHP / Laravel',  accent: true  },
  { name: 'React',          accent: false },
  { name: 'HTML5 / CSS3',   accent: false },
  { name: 'MySQL',          accent: false },
  { name: 'Git / GitHub',   accent: false },
  { name: 'SCRUM',          accent: false },
]
</script>
