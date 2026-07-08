<template>
  <section id="projects" class="bg-ink text-paper px-16 py-24" ref="sectionRef">
    <div class="section-label before:bg-accent" :class="{ 'animate-fade-up delay-100': isVisible }">
      <span class="font-display font-bold text-xs uppercase tracking-widest2 text-accent">{{ t('projects.label') }}</span>
    </div>
    <h2 class="font-display font-extrabold tracking-tighter leading-tight mb-14 text-paper"
        :class="{ 'animate-fade-up delay-220': isVisible }"
        style="font-size: clamp(2rem, 3.5vw, 3rem)">
      {{ t('projects.title') }}
    </h2>

    <div class="grid md:grid-cols-2 gap-px bg-white/5">
      <div v-for="(project, i) in projects" :key="i"
           class="bg-[#191817] p-10 hover:bg-[#201f1d] transition-colors duration-200"
           :class="{ 'animate-fade-down': isVisible, 'opacity-0': !isVisible }"
           :style="{ animationDelay: `${i * 0.2}s` }">
        <span class="font-display font-bold text-xs tracking-widest text-accent block mb-6">
          {{ String(i + 1).padStart(2, '0') }} / {{ String(projects.length).padStart(2, '0') }}
        </span>
        <h3 class="font-display font-bold text-xl tracking-tight text-paper mb-3 leading-snug">
          {{ project.title() }}
        </h3>
        <p class="text-sm text-paper/55 leading-relaxed mb-6">
          {{ project.desc() }}
        </p>
        <div class="flex flex-wrap gap-1.5 mb-7">
          <span v-for="tag in project.tags" :key="tag"
                class="text-xs font-medium px-2.5 py-1 border border-white/10 text-paper/60">
            {{ tag }}
          </span>
        </div>
        <p class="text-xs text-paper/40 border-t border-white/[0.06] pt-4 leading-relaxed">
          <strong class="text-paper/70 font-medium">{{ t('projects.my_role') }}</strong>
          {{ project.role() }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const sectionRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

const projects = [
  {
    title: () => t('projects.items.project_1.title'),
    desc:  () => t('projects.items.project_1.desc'),
    tags: ['JavaScript', 'PHP', 'MySQL', 'HTML / CSS', 'SCRUM'],
    role:  () => t('projects.items.project_1.role'),
  },
  {
    title: () => t('projects.items.project_2.title'),
    desc:  () => t('projects.items.project_2.desc'),
    tags: ['PHP', 'JavaScript', 'MySQL', 'CSS3'],
    role:  () => t('projects.items.project_2.role'),
  },
  {
    title: () => t('projects.items.project_3.title'),
    desc:  () => t('projects.items.project_3.desc'),
    tags: ['PHP', 'JavaScript', 'MySQL', 'Responsive CSS'],
    role:  () => t('projects.items.project_3.role'),
  },
  {
    title: () => t('projects.items.project_4.title'),
    desc:  () => t('projects.items.project_4.desc'),
    tags: ['Vue.js 3', 'React', 'CSS3', 'UI / UX'],
    role:  () => t('projects.items.project_4.role'),
  },
]
</script>
