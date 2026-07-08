<template>
  <section id="about" class="border-t border-ink/10 grid md:grid-cols-2 gap-16 px-16 py-24" ref="sectionRef">

    <!-- Bio -->
    <div>
      <div class="section-label" :class="{ 'animate-fade-up delay-100': isVisible }">
        <span class="font-display font-bold text-xs uppercase tracking-widest2 text-accent">{{ t('about.title') }}</span>
      </div>
      <h2 class="font-display font-extrabold tracking-tighter leading-tight mb-6" :class="{ 'animate-fade-up delay-220': isVisible }"
          style="font-size: clamp(1.9rem, 3.5vw, 2.8rem)">
        {{ t('about.subtitle') }}
        <em class="not-italic text-accent">{{ t('about.subtitle_2') }}</em>
      </h2>
      <p class="text-ink-2 leading-relaxed text-sm mb-4" :class="{ 'animate-fade-up delay-350': isVisible }">
        {{ t('about.bio_1') }}
      </p>
      <p class="text-ink-2 leading-relaxed text-sm mb-4" :class="{ 'animate-fade-up delay-480': isVisible }">
        {{ t('about.bio_2') }}
      </p>
      <p class="text-ink-2 leading-relaxed text-sm" :class="{ 'animate-fade-up delay-610': isVisible }">
        {{ t('about.bio_3') }}
      </p>
    </div>

    <!-- Timeline -->
    <div>
      <div class="section-label" :class="{ 'animate-fade-up delay-100': isVisible }">
        <span class="font-display font-bold text-xs uppercase tracking-widest2 text-accent">{{t('about.title_2')}}</span>
      </div>
      <div  class="border-l border-ink/10 pl-6 flex flex-col gap-0">
        <div v-for="(item, i) in experience" :key="i"
             class="relative timeline-dot"
             :class="{ 'pb-8': i < experience.length - 1, 'animate-fade-down': isVisible, 'opacity-0': !isVisible }"
             :style="{ animationDelay: `${i * 0.2}s` }">
          <div class="text-xs font-medium uppercase tracking-wider text-accent mb-1">
            {{ item.period() }}
          </div>
          <div class="font-display font-bold text-sm text-ink mb-1.5">
            {{ item.role() }}
          </div>
          <div class="text-xs text-ink-3 leading-relaxed">
            {{ item.desc() }}
          </div>
        </div>
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

const experience = [
  {
    period: () => t('about.experiences.experience_3.period'),
    role: () => t('about.experiences.experience_3.position'),
    desc: () => t('about.experiences.experience_3.description'),
  },
  {
    period: () => t('about.experiences.experience_2.period'),
    role: () => t('about.experiences.experience_2.position'),
    desc: () => t('about.experiences.experience_2.description'),
  },
  {
    period: () => t('about.experiences.experience_1.period'),
    role: () => t('about.experiences.experience_1.position'),
    desc: () => t('about.experiences.experience_1.description'),
  },
]
</script>
