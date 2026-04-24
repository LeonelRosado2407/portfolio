<template>
  <section id="about" class="border-t border-ink/10 grid md:grid-cols-2 gap-16 px-16 py-24">

    <!-- Bio -->
    <div>
      <div class="section-label">
        <span class="font-display font-bold text-xs uppercase tracking-widest2 text-accent">{{ t('about.title') }}</span>
      </div>
      <h2 class="font-display font-extrabold tracking-tighter leading-tight mb-6"
          style="font-size: clamp(1.9rem, 3.5vw, 2.8rem)">
        Building web experiences that
        <em class="not-italic text-accent">actually work</em>
      </h2>
      <p class="text-ink-2 leading-relaxed text-sm mb-4">
        I'm a software engineer specializing in frontend development, based in Mérida, México.
        My degree in Digital Business and Virtual Environments gives me a broader view of how
        technology drives real business outcomes — not just how to write code.
      </p>
      <p class="text-ink-2 leading-relaxed text-sm mb-4">
        Over 2 years I've worked on custom web applications, ERPs, accounts-receivable systems,
        and client portals — always in professional, collaborative environments using agile
        methodologies.
      </p>
      <p class="text-ink-2 leading-relaxed text-sm">
        I'm now taking on freelance projects through Upwork. I work autonomously, communicate
        proactively, and bring the same attention to detail from my professional work to every
        client engagement.
      </p>
    </div>

    <!-- Timeline -->
    <div>
      <div class="section-label">
        <span class="font-display font-bold text-xs uppercase tracking-widest2 text-accent">Experience</span>
      </div>
      <div class="border-l border-ink/10 pl-6 flex flex-col gap-0">
        <div v-for="(item, i) in experience" :key="i"
             class="relative timeline-dot"
             :class="{ 'pb-8': i < experience.length - 1 }">
          <div class="text-xs font-medium uppercase tracking-wider text-accent mb-1">
            {{ item.period() }}
          </div>
          <div class="font-display font-bold text-sm text-ink mb-1.5">
            {{ item.role() }}
          </div>
          <div class="text-xs text-ink-3 leading-relaxed">
            {{ item.desc() }}
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const experience = [
  {
    period: () => t('about.experiences.experience_3.period'),
    role: () => t('about.experiences.experience_3.position'),
    desc: () => t('about.experiences.experience_3.description'),
  },
  {
    period: () => t('about.experiences.experience_2.period'),
    role: () => t('about.experiences.experience_2.position'),
    desc: () => t('about.experiences.experience_2.description'),
  },
  {
    period: () => t('about.experiences.experience_1.period'),
    role: () => t('about.experiences.experience_1.position'),
    desc: () => t('about.experiences.experience_1.description'),
  },
]
</script>
