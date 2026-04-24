<template>
  <section id="home" class="min-h-screen grid md:grid-cols-2 pt-20">

    <!-- Left -->
    <div class="flex flex-col justify-center px-16 py-20 border-b md:border-b-0 md:border-r border-ink/10">
      <span class="animate-fade-up inline-block text-xs font-medium uppercase tracking-widest
                   text-accent border border-accent px-3 py-1 w-fit mb-8">
        Open to freelance projects
      </span>

      <h1 class="animate-fade-up delay-100 font-display font-extrabold leading-none tracking-tighter mb-6"
          style="font-size: clamp(2.8rem, 5vw, 4.5rem)">
        Frontend<br />
        <em class="not-italic text-accent font-semibold">Developer</em><br />
        &amp; UI Builder
      </h1>

      <p class="animate-fade-up delay-220 text-ink-2 leading-relaxed max-w-md mb-10">
        I'm Leonel Rosado — a frontend-focused developer from Mérida, México with 2 years of
        professional experience building web apps, ERPs, and client portals. I work with
        React, Vue.js 3, and PHP/Laravel to deliver clean, fast, and usable interfaces.
      </p>

      <div class="animate-fade-up delay-350 flex flex-wrap gap-4">
        <a href="#projects"
           class="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium
                  px-7 py-3 hover:bg-accent-dark transition-colors duration-200">
          View my work →
        </a>
        <a href="#contact"
           class="inline-flex items-center gap-2 border border-ink/15 text-ink text-sm font-medium
                  px-7 py-3 hover:border-ink-2 transition-colors duration-200">
          Get in touch
        </a>
      </div>
    </div>

    <!-- Right -->
    <div class="flex flex-col justify-center px-12 py-20 bg-paper-2">
      <!-- Stats grid -->
      <div class="grid grid-cols-2 border border-ink/10">
        <div v-for="(stat, i) in stats" :key="i"
             class="p-7 border-ink/10"
             :class="{
               'border-r': i % 2 === 0,
               'border-b': i < 2,
             }">
          <div class="font-display font-extrabold text-5xl tracking-tighter text-accent leading-none mb-1">
            {{ stat.value }}
          </div>
          <div class="text-xs uppercase tracking-wide text-ink-3">{{ stat.label }}</div>
        </div>
      </div>

      <!-- Stack -->
      <div class="mt-10">
        <h3 class="font-display font-bold text-xs uppercase tracking-widest text-ink-3 mb-4">
          Core stack
        </h3>
        <div class="flex flex-wrap gap-1.5">
          <span v-for="tech in stack" :key="tech.name"
                class="text-xs font-medium px-2.5 py-1 border"
                :class="tech.accent
                  ? 'bg-accent-light border-accent/20 text-accent'
                  : 'bg-paper border-ink/10 text-ink-2'">
            {{ tech.name }}
          </span>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
const stats = [
  { value: '2+',   label: 'Years of experience'  },
  { value: '3',    label: 'Professional roles'    },
  { value: '5+',   label: 'Projects delivered'    },
  { value: '24h',  label: 'Response time'         },
]

const stack = [
  { name: 'React',          accent: true  },
  { name: 'Vue.js 3',       accent: true  },
  { name: 'JavaScript',     accent: true  },
  { name: 'PHP / Laravel',  accent: false },
  { name: 'HTML5 / CSS3',   accent: false },
  { name: 'MySQL',          accent: false },
  { name: 'Git / GitHub',   accent: false },
  { name: 'SCRUM',          accent: false },
]
</script>
