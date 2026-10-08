<template>
  <article :data-testid="`featured-${project.id}`"
           class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-surface-2 p-6 md:p-10">
    <!-- Gallery -->
    <div :class="{ 'lg:order-2': reverse }">
      <div class="aspect-[16/10] overflow-hidden bg-surface-3 border border-on-surface/10">
        <img :src="active.src" :alt="active.alt()" :width="active.width" :height="active.height"
             loading="lazy" decoding="async"
             data-testid="featured-main-image"
             class="w-full h-full object-contain" />
      </div>
      <div class="flex gap-2 mt-3">
        <button v-for="(image, i) in project.images" :key="image.src" type="button"
                class="w-16 h-11 sm:w-20 sm:h-14 overflow-hidden border bg-surface-3 transition-colors duration-200"
                :class="i === activeIndex ? 'border-accent' : 'border-on-surface/15 hover:border-on-surface/40'"
                :aria-label="t('projects.featured.thumb_label', { n: i + 1 })"
                :aria-pressed="i === activeIndex"
                @click="activeIndex = i">
          <img :src="image.src" alt="" loading="lazy" decoding="async" class="w-full h-full object-cover object-top" />
        </button>
      </div>
    </div>

    <!-- Content -->
    <div>
      <span class="inline-block text-xs font-medium uppercase tracking-widest text-accent border border-accent/60 px-3 py-1 mb-5">
        {{ t('projects.featured.personal_tag') }}
      </span>
      <h3 class="font-display font-extrabold text-2xl md:text-3xl tracking-tight text-on-surface mb-3">
        {{ project.title }}
      </h3>
      <p class="text-sm text-on-surface/70 leading-relaxed mb-6">
        {{ project.desc() }}
      </p>
      <ul class="flex flex-col gap-2.5 mb-6 list-none">
        <li v-for="(highlight, i) in project.highlights" :key="i"
            class="flex gap-3 text-sm text-on-surface/80 leading-relaxed">
          <span class="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true"></span>
          {{ highlight() }}
        </li>
      </ul>
      <div class="flex flex-wrap gap-1.5 mb-8">
        <span v-for="tech in project.stack" :key="tech"
              class="text-xs font-medium px-2.5 py-1 border border-on-surface/10 text-on-surface/70">
          {{ tech }}
        </span>
      </div>
      <div class="flex flex-wrap gap-3">
        <a :href="project.demo" target="_blank" rel="noopener"
           class="inline-flex items-center gap-2 bg-accent-fill text-white text-sm font-medium
                  px-6 py-3 hover:bg-accent-dark transition-colors duration-200">
          {{ t('projects.featured.btn_demo') }} ↗
        </a>
        <a :href="project.repo" target="_blank" rel="noopener"
           class="inline-flex items-center gap-2 border border-on-surface/20 text-on-surface text-sm font-medium
                  px-6 py-3 hover:border-on-surface/50 transition-colors duration-200">
          {{ t('projects.featured.btn_code') }}
        </a>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  project: { type: Object, required: true },
  reverse: { type: Boolean, default: false },
})

const { t } = useI18n()
const activeIndex = ref(0)
const active = computed(() => props.project.images[activeIndex.value])
</script>
