<template>
  <div>
    <TheNav />
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheNav        from './components/TheNav.vue'
import HeroSection   from './components/HeroSection.vue'
import AboutSection  from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ContactSection  from './components/ContactSection.vue'
import TheFooter     from './components/TheFooter.vue'
</script>
