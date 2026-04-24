<template>
  <section id="services" class="border-t border-ink/10 px-16 py-24">
    <div class="section-label">
      <span class="font-display font-bold text-xs uppercase tracking-widest2 text-accent">What I offer</span>
    </div>
    <h2 class="font-display font-extrabold tracking-tighter mb-14"
        style="font-size: clamp(2rem, 3.5vw, 3rem)">
      How I can help
    </h2>

    <div class="grid md:grid-cols-4 border border-ink/10">
      <div v-for="(service, i) in services" :key="i"
           class="p-9 border-ink/10"
           :class="{ 'border-r': i < services.length - 1 }">
        <div class="w-10 h-10 bg-accent-light flex items-center justify-center mb-6">
          <component :is="service.icon" class="w-4.5 h-4.5 text-accent" />
        </div>
        <h3 class="font-display font-bold text-sm mb-3">{{ service.title }}</h3>
        <p class="text-xs text-ink-3 leading-relaxed">{{ service.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

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
    title: 'Frontend development',
    desc: 'Custom UI implementation with React or Vue.js 3. Clean, component-based code that\'s readable, maintainable, and easy for your team to extend.',
  },
  {
    icon: IconResponsive,
    title: 'Responsive UI & redesigns',
    desc: 'Make your existing app look and feel great on any screen. I audit layouts, modernize design, and improve usability without breaking what already works.',
  },
  {
    icon: IconPortal,
    title: 'Web apps & client portals',
    desc: 'Business tools, dashboards, and portals built from scratch. I have direct professional experience with these systems and can deliver them reliably.',
  },
  {
    icon: IconStack,
    title: 'PHP / Laravel backends',
    desc: 'Full-stack when you need it. I can build and connect Laravel APIs, MySQL databases, and auth systems to power your frontend application.',
  },
]
</script>
