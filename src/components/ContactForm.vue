<template>
  <form data-testid="contact-form" class="flex flex-col gap-5" @submit.prevent="onSubmit">
    <h3 class="font-display font-bold text-lg tracking-tight text-ink">{{ t('contact.form.title') }}</h3>

    <!-- Honeypot: bots fill it, people never see it -->
    <input v-model="botcheck" type="checkbox" name="botcheck" class="hidden" tabindex="-1" autocomplete="off" aria-hidden="true" />

    <div>
      <label for="cf-name" class="block text-xs uppercase tracking-wider text-ink-3 mb-1.5">{{ t('contact.form.name') }}</label>
      <input id="cf-name" v-model.trim="form.name" name="name" type="text" required autocomplete="name"
             :placeholder="t('contact.form.placeholder_name')" :class="fieldClass" />
    </div>
    <div>
      <label for="cf-email" class="block text-xs uppercase tracking-wider text-ink-3 mb-1.5">{{ t('contact.form.email') }}</label>
      <input id="cf-email" v-model.trim="form.email" name="email" type="email" required autocomplete="email"
             :placeholder="t('contact.form.placeholder_email')" :class="fieldClass" />
    </div>
    <div>
      <label for="cf-message" class="block text-xs uppercase tracking-wider text-ink-3 mb-1.5">{{ t('contact.form.message') }}</label>
      <textarea id="cf-message" v-model.trim="form.message" name="message" rows="5" required minlength="10"
                :placeholder="t('contact.form.placeholder_message')" :class="[fieldClass, 'resize-y']"></textarea>
    </div>

    <button type="submit" :disabled="status === 'sending'"
            class="inline-flex items-center justify-center gap-2 bg-accent-fill text-white text-sm font-medium
                   px-7 py-3 hover:bg-accent-dark transition-colors duration-200
                   disabled:opacity-60 disabled:cursor-wait">
      {{ status === 'sending' ? t('contact.form.sending') : t('contact.form.submit') }}
    </button>

    <p data-testid="form-status" aria-live="polite" class="text-sm leading-relaxed min-h-[1.25rem]"
       :class="status === 'error' ? 'text-accent-dark dark:text-accent' : 'text-ink-2'">
      <span v-if="status === 'success'">{{ t('contact.form.success') }}</span>
      <span v-else-if="status === 'error'">{{ t('contact.form.error') }}</span>
    </p>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const ENDPOINT = 'https://api.web3forms.com/submit'
const accessKey = import.meta.env.VITE_WEB3FORMS_KEY

const { t } = useI18n()
const status = ref('idle') // 'idle' | 'sending' | 'success' | 'error'
const form = reactive({ name: '', email: '', message: '' })
const botcheck = ref(false)

const fieldClass =
  'w-full bg-paper-2 border border-ink/15 px-4 py-3 text-sm text-ink placeholder:text-ink-3 ' +
  'focus:outline-none focus:border-accent transition-colors duration-200'

async function onSubmit() {
  if (status.value === 'sending') return
  if (!accessKey) {
    if (import.meta.env.DEV) console.warn('VITE_WEB3FORMS_KEY is not set; the contact form cannot send.')
    status.value = 'error'
    return
  }

  status.value = 'sending'
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: t('contact.form.subject'),
        from_name: form.name,
        name: form.name,
        email: form.email,
        message: form.message,
        botcheck: botcheck.value,
      }),
    })
    const data = await res.json().catch(() => ({}))
    // Web3Forms can answer 200 with success:false (bad key, spam)
    if (!res.ok || !data.success) throw new Error(data.message || `HTTP ${res.status}`)
    status.value = 'success'
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (err) {
    if (import.meta.env.DEV) console.warn('Contact form error:', err)
    status.value = 'error'
  }
}
</script>
