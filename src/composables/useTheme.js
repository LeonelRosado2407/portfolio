import { ref } from 'vue'

const STORAGE_KEY = 'theme'
const THEME_COLORS = { light: '#f5f3ef', dark: '#151311' }

const isDark = ref(false)
let initialized = false

// localStorage can throw (Safari private mode, blocked cookies)
function readStored() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function writeStored(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // preference just won't persist
  }
}

function apply(dark) {
  isDark.value = dark
  document.documentElement.classList.toggle('dark', dark)
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', dark ? THEME_COLORS.dark : THEME_COLORS.light)
}

export function useTheme() {
  if (!initialized) {
    initialized = true
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const stored = readStored()
    apply(stored ? stored === 'dark' : media.matches)
    // Follow the OS only while the user hasn't picked a theme
    media.addEventListener('change', (event) => {
      if (!readStored()) apply(event.matches)
    })
  }

  const toggleTheme = () => {
    const next = !isDark.value
    apply(next)
    writeStored(next ? 'dark' : 'light')
  }

  return { isDark, toggleTheme }
}
