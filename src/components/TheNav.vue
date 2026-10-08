<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-md border-b border-ink/10">
    <div class="flex justify-between items-center gap-4 px-6 md:px-12 lg:px-16 py-4 md:py-5">
      <a href="#home" class="font-display font-extrabold text-lg tracking-tight text-ink">
        Leonel<span class="text-accent">.</span>
      </a>
      <ul class="hidden lg:flex gap-8 list-none" data-testid="desktop-links">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href"
             class="whitespace-nowrap text-xs font-medium uppercase tracking-widest text-ink-3
                    hover:text-accent transition-colors duration-200">
            {{ link.label() }}
          </a>
        </li>
      </ul>
      <div class="flex items-center gap-2">
        <button type="button" @click="toggleLanguage" data-testid="lang-toggle"
                :aria-label="t('nav.lang_toggle')"
                class="text-xs uppercase tracking-widest hover:text-accent flex items-center gap-1 border border-ink/15 text-ink font-medium px-3 py-1 hover:border-accent transition-colors duration-200 rounded-lg">
          <span class="material-symbols-outlined" aria-hidden="true">g_translate</span>
          {{ locale === 'en' ? 'ES' : 'EN' }}
        </button>
        <button type="button" @click="toggleTheme" data-testid="theme-toggle"
                :aria-label="isDark ? t('nav.theme_to_light') : t('nav.theme_to_dark')"
                class="w-9 h-9 flex items-center justify-center border border-ink/15 text-ink rounded-lg
                       hover:text-accent hover:border-accent transition-colors duration-200">
          <span class="material-symbols-outlined" aria-hidden="true">{{ isDark ? 'light_mode' : 'dark_mode' }}</span>
        </button>
        <button ref="menuButton" type="button" data-testid="menu-toggle"
                class="lg:hidden w-9 h-9 flex items-center justify-center border border-ink/15 text-ink rounded-lg
                       hover:text-accent hover:border-accent transition-colors duration-200"
                aria-controls="mobile-menu"
                :aria-expanded="menuOpen"
                :aria-label="menuOpen ? t('nav.menu_close') : t('nav.menu_open')"
                @click="menuOpen = !menuOpen">
          <span class="material-symbols-outlined" aria-hidden="true">{{ menuOpen ? 'close' : 'menu' }}</span>
        </button>
      </div>
    </div>
    <ul v-show="menuOpen" id="mobile-menu"
        class="lg:hidden flex flex-col list-none border-t border-ink/10 bg-paper px-6 py-2">
      <li v-for="link in links" :key="link.href">
        <a :href="link.href" @click="menuOpen = false"
           class="block py-3 text-sm font-medium uppercase tracking-widest text-ink-2
                  hover:text-accent transition-colors duration-200">
          {{ link.label() }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from '../composables/useTheme'

const { t, locale } = useI18n()
const { isDark, toggleTheme } = useTheme()

const LANGS = ['en', 'es']
const menuOpen = ref(false)
const menuButton = ref(null)

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'es' : 'en'
  try {
    localStorage.setItem('lang', locale.value)
  } catch {
    // preference just won't persist
  }
}

const onKeydown = (event) => {
  if (event.key === 'Escape' && menuOpen.value) {
    menuOpen.value = false
    menuButton.value?.focus()
  }
}

watch(locale, (value) => {
  document.documentElement.lang = value
}, { immediate: true })

const links = [
  { href: '#about',    label: () => t('nav.about')    },
  { href: '#skills',   label: () => t('nav.skills')   },
  { href: '#projects', label: () => t('nav.projects') },
  { href: '#services', label: () => t('nav.services') },
  { href: '#contact',  label: () => t('nav.contact')  },
]

onMounted(() => {
  let savedLang = null
  try {
    savedLang = localStorage.getItem('lang')
  } catch {
    // storage blocked: keep default locale
  }
  if (LANGS.includes(savedLang)) {
    locale.value = savedLang
  }
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>
