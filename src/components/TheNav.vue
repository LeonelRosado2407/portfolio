<template>
  <nav class="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-16 py-5
              bg-paper/90 backdrop-blur-md border-b border-ink/10">
    <a href="#home" class="font-display font-extrabold text-lg tracking-tight text-ink">
      Leonel<span class="text-accent">.</span>
    </a>
    <ul class="hidden md:flex gap-8 list-none">
      <li v-for="link in links" :key="link.href">
        <a :href="link.href"
           class="text-xs font-medium uppercase tracking-widest text-ink-3
                  hover:text-accent transition-colors duration-200">
          {{ link.label() }}
        </a>
      </li>
    </ul>
    <button @click="toggleLanguage" class="text-xs uppercase tracking-widest">
      {{ locale === 'en' ? 'ES' : 'EN' }}
    </button>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'es' : 'en'
}


const links = [
  { href: '#about',    label: () => t('nav.about')    },
  { href: '#projects', label: () => t('nav.projects') },
  { href: '#services', label: () => t('nav.services') },
  { href: '#contact',  label: () => t('nav.contact')  },
]

console.log(links[0].label()) // Test to ensure labels are functions and return correct values;
</script>
