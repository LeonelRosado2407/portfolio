<template>
  <section id="contact" class="border-t border-ink/10 bg-paper-2 grid md:grid-cols-2 gap-24 items-center px-16 py-24">

    <!-- Left -->
    <div>
      <div class="section-label">
        <span class="font-display font-bold text-xs uppercase tracking-widest2 text-accent">Get in touch</span>
      </div>
      <h2 class="font-display font-extrabold tracking-tighter leading-tight mb-5"
          style="font-size: clamp(2rem, 3.5vw, 3rem)">
        Let's build something together
      </h2>
      <p class="text-ink-2 leading-relaxed text-sm mb-8">
        I'm currently available for freelance projects — short or long term. Whether you have
        a detailed brief or just an early idea, reach out and I'll respond within 24 hours.
      </p>
      <a href="mailto:leonelrosado2407@gmail.com"
         class="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium
                px-7 py-3 hover:bg-accent-dark transition-colors duration-200">
        Send me an email →
      </a>
    </div>

    <!-- Right: contact rows -->
    <div class="flex flex-col gap-5">
      <div v-for="item in contactItems" :key="item.label" class="flex items-center gap-4">
        <div class="w-10 h-10 bg-paper border border-ink/10 flex items-center justify-center flex-shrink-0">
          <component :is="item.icon" class="w-3.5 h-3.5 text-accent" />
        </div>
        <div>
          <div class="text-xs uppercase tracking-wider text-ink-3 mb-0.5">{{ item.label }}</div>
          <div class="text-sm font-medium text-ink">
            <a v-if="item.href" :href="item.href" target="_blank"
               class="hover:text-accent transition-colors">{{ item.value }}</a>
            <span v-else>{{ item.value }}</span>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { h } from 'vue'

const IconMail = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { d: 'M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z' }),
  h('polyline', { points: '22,6 12,13 2,6' }),
])
const IconPhone = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { d: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z' }),
])
const IconLocation = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z' }),
  h('circle', { cx: '12', cy: '10', r: '3' }),
])
const IconGithub = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { d: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22' }),
])
const IconLinkedIn = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
  h('path', { d: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' }),
  h('circle', { cx: '4', cy: '4', r: '2' }),
])

const contactItems = [
  { label: 'Email',            icon: IconMail,     value: 'leonelrosado2407@gmail.com', href: 'mailto:leonelrosado2407@gmail.com' },
  { label: 'Phone / WhatsApp', icon: IconPhone,    value: '+52 999 342 7756',           href: null },
  { label: 'Location',         icon: IconLocation, value: 'Mérida, Yucatán · Remote worldwide', href: null },
  { label: 'GitHub',           icon: IconGithub,   value: 'LeonelRosado2407',           href: 'https://github.com/LeonelRosado2407' },
  { label: 'LinkedIn',         icon: IconLinkedIn, value: 'Noé Leonel Rosado Quintal',  href: 'https://www.linkedin.com/in/no%C3%A9-leonel-rosado-quintal-20a701263' },
]
</script>
