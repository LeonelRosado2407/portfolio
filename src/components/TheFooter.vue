<template>
  <footer class="bg-ink flex justify-between items-center px-16 py-8">
    <span class="font-display font-extrabold tracking-tight text-paper">
      Leonel<span class="text-accent">.</span>
    </span>
    <p class="text-xs text-paper/35">
      {{ t('footer.copyright') }}
    </p>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
