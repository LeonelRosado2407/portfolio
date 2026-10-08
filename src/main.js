import { createApp } from 'vue'
import { inject } from '@vercel/analytics'
import App from './App.vue'
import i18n from './i18n'
import '../src/assets/css/style.css'

createApp(App).use(i18n).mount('#app')

// Framework-agnostic API: the Vue component imports vue-router, which this app doesn't use
inject()
