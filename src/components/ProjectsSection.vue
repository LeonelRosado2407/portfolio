<template>
  <section id="projects" class="bg-ink text-paper px-16 py-24">
    <div class="section-label before:bg-accent">
      <span class="font-display font-bold text-xs uppercase tracking-widest2 text-accent">Featured work</span>
    </div>
    <h2 class="font-display font-extrabold tracking-tighter leading-tight mb-14 text-paper"
        style="font-size: clamp(2rem, 3.5vw, 3rem)">
      Projects I've built
    </h2>

    <div class="grid md:grid-cols-2 gap-px bg-white/5">
      <div v-for="(project, i) in projects" :key="i"
           class="bg-[#191817] p-10 hover:bg-[#201f1d] transition-colors duration-200">
        <span class="font-display font-bold text-xs tracking-widest text-accent block mb-6">
          {{ String(i + 1).padStart(2, '0') }} / {{ String(projects.length).padStart(2, '0') }}
        </span>
        <h3 class="font-display font-bold text-xl tracking-tight text-paper mb-3 leading-snug">
          {{ project.title }}
        </h3>
        <p class="text-sm text-paper/55 leading-relaxed mb-6">
          {{ project.desc }}
        </p>
        <div class="flex flex-wrap gap-1.5 mb-7">
          <span v-for="tag in project.tags" :key="tag"
                class="text-xs font-medium px-2.5 py-1 border border-white/10 text-paper/60">
            {{ tag }}
          </span>
        </div>
        <p class="text-xs text-paper/40 border-t border-white/[0.06] pt-4 leading-relaxed">
          <strong class="text-paper/70 font-medium">My role:</strong>
          {{ project.role }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Custom ERP System',
    desc: 'Full enterprise resource planning application covering inventory, purchasing, and reporting modules. Developed in a team environment with agile sprints and a version-controlled codebase.',
    tags: ['JavaScript', 'PHP', 'MySQL', 'HTML / CSS', 'SCRUM'],
    role: 'Frontend module development — implemented inventory and reporting UIs and integrated them with the backend API.',
  },
  {
    title: 'Accounts Receivable System',
    desc: "Custom-built financial management tool for tracking invoices, payment schedules, and client account balances. Replaced a manual spreadsheet workflow and improved the team's financial visibility.",
    tags: ['PHP', 'JavaScript', 'MySQL', 'CSS3'],
    role: 'Primary developer — designed the DB schema, built all views and logic, delivered as part of my internship.',
  },
  {
    title: 'Customer Self-Service Portal',
    desc: 'A B2B-facing portal allowing clients to check their account status, access documents, and submit requests online. Focused heavily on UX clarity and mobile responsiveness.',
    tags: ['PHP', 'JavaScript', 'MySQL', 'Responsive CSS'],
    role: 'End-to-end development — frontend and backend implementation with a UX-first approach throughout.',
  },
  {
    title: 'Legacy App Redesign & Responsiveness',
    desc: 'Modernization of multiple existing production web applications — migrating desktop-only layouts to mobile-first designs, refactoring CSS architecture, and improving component structure.',
    tags: ['Vue.js 3', 'React', 'CSS3', 'UI / UX'],
    role: 'Led the frontend redesign — assessed existing UIs, proposed improvements, and executed across several live applications.',
  },
]
</script>
