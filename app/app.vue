<script setup lang="ts">
const sections = [
  { id: 'about', label: 'Sobre mí' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contacto' },
];
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 antialiased">
    <!-- Header -->
    <header
  class="sticky top-0 z-30 backdrop-blur border-b border-slate-800 bg-slate-950/70"
>
  <nav class="max-w-5xl mx-auto flex items-center justify-between py-3 px-4">
    <!-- Logo + nombre -->
    <div class="flex items-center gap-3">
      <div class="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-sky-500/30">
        <span class="text-[15px] font-semibold text-slate-950 tracking-tight">
          JH
        </span>
      </div>

      <div class="flex flex-col leading-tight">
        <span class="text-sm font-semibold text-slate-100">
          Jair Hernández
        </span>
        <span class="text-[11px] uppercase tracking-[0.18em] text-slate-400">
          NetSuite & Full-Stack Developer
        </span>
      </div>
    </div>

    <!-- Nav -->
    <ul class="hidden md:flex gap-6 text-xs font-medium">
      <li
        v-for="section in sections"
        :key="section.id"
      >
        <a
          :href="`#${section.id}`"
          class="hover:text-sky-400 text-slate-300"
        >
          {{ section.label }}
        </a>
      </li>
    </ul>
  </nav>
</header>

    <!-- Main -->
    <main class="max-w-5xl mx-auto px-4 pb-16">
      <HeroSection />

      <section id="about" class="pt-20">
        <AboutSection />
      </section>

      <section id="experience" class="pt-20">
        <ExperienceSection />
      </section>

      <section id="projects" class="pt-20">
        <ProjectsSection />
      </section>

      <section id="skills" class="pt-20">
        <SkillsSection />
      </section>

      <section id="contact" class="pt-20">
        <ContactSection />
      </section>
    </main>
  </div>
</template>
