import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useCvLink() {
  const { locale } = useI18n()
  return computed(() => `/cv/leonel-rosado-cv-${locale.value === 'es' ? 'es' : 'en'}.pdf`)
}
