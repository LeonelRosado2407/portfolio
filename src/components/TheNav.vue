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
    <button @click="toggleLanguage" class="text-xs uppercase tracking-widest hover:text-accent flex items-center gap-1 border border-ink/15 text-ink font-medium px-3 py-1 hover:border-accent transition-colors duration-200 rounded-lg">
        <span class="material-symbols-outlined">g_translate</span>
        {{ locale === 'en' ? 'ES' : 'EN' }}
    </button>
  </nav>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'es' : 'en'
  localStorage.setItem('lang', locale.value)
}


const links = [
  { href: '#about',    label: () => t('nav.about')    },
  { href: '#projects', label: () => t('nav.projects') },
  { href: '#services', label: () => t('nav.services') },
  { href: '#contact',  label: () => t('nav.contact')  },
]
onMounted(() => {
  //get the localStorage language preference and set it on the i18n locale
  const savedLang = localStorage.getItem('lang')
  if (savedLang) {
    locale.value = savedLang
  }
})
</script>