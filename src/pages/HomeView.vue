<script setup lang="ts">
import AuroraBackground from '../components/AuroraBackground.vue'
import SiteNav from '../components/SiteNav.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import EducationSection from '../components/EducationSection.vue'
import ContactSection from '../components/ContactSection.vue'
</script>

<template>
  <AuroraBackground />
  <SiteNav />
  <main>
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <SkillsSection />
    <EducationSection />
    <ContactSection />
  </main>
</template>
