<template>
  <footer class="bg-surface flex flex-col sm:flex-row gap-3 justify-between items-center px-6 md:px-12 lg:px-16 py-8">
    <span class="font-display font-extrabold tracking-tight text-on-surface">
      Leonel<span class="text-accent">.</span>
    </span>
    <p class="text-xs text-on-surface/55 text-center sm:text-right">
      {{ t('footer.copyright', { year }) }}
    </p>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>
