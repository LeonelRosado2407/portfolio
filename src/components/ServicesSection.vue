<template>
  <section id="services" class="border-t border-ink/10 px-16 py-24" ref="sectionRef">
    <div class="section-label" :class="{ 'animate-fade-up delay-100': isVisible }">
      <span class="font-display font-bold text-xs uppercase tracking-widest2 text-accent">{{ t('services.label') }}</span>
    </div>
    <h2 class="font-display font-extrabold tracking-tighter mb-14"
        :class="{ 'animate-fade-up delay-220': isVisible }"
        style="font-size: clamp(2rem, 3.5vw, 3rem)">
      {{ t('services.title') }}
    </h2>

    <div class="grid md:grid-cols-4 border border-ink/10">
      <div v-for="(service, i) in services" :key="i"
           class="p-9 border-ink/10"
           :class="{
             'border-r': i < services.length - 1,
             'animate-fade-down': isVisible,
             'opacity-0': !isVisible
           }"
           :style="{ animationDelay: `${i * 0.2}s` }">
        <div class="w-10 h-10 bg-accent-light flex items-center justify-center mb-6">
          <component :is="service.icon" class="w-4.5 h-4.5 text-accent" />
        </div>
        <h3 class="font-display font-bold text-sm mb-3">{{ service.title() }}</h3>
        <p class="text-xs text-ink-3 leading-relaxed">{{ service.desc() }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h, onMounted, ref } from 'vue'
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

// Inline SVG icon components
const IconLayout = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', class: 'w-[18px] h-[18px]' }, [
  h('rect', { x: '3', y: '3', width: '18', height: '18', rx: '2' }),
  h('path', { d: 'M9 9h6M9 12h6M9 15h4' }),
])

const IconResponsive = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', class: 'w-[18px] h-[18px]' }, [
  h('path', { d: 'M4 5h16M4 12h16M4 19h16' }),
])

const IconPortal = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', class: 'w-[18px] h-[18px]' }, [
  h('path', { d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z' }),
  h('circle', { cx: '12', cy: '10', r: '3' }),
])

const IconStack = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', class: 'w-[18px] h-[18px]' }, [
  h('path', { d: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' }),
])

const services = [
  {
    icon: IconLayout,
    title: () => t('services.items.service_1.title'),
    desc:  () => t('services.items.service_1.desc'),
  },
  {
    icon: IconResponsive,
    title: () => t('services.items.service_2.title'),
    desc:  () => t('services.items.service_2.desc'),
  },
  {
    icon: IconPortal,
    title: () => t('services.items.service_3.title'),
    desc:  () => t('services.items.service_3.desc'),
  },
  {
    icon: IconStack,
    title: () => t('services.items.service_4.title'),
    desc:  () => t('services.items.service_4.desc'),
  },
]
</script>
