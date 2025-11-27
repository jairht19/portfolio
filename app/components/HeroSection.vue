<script setup lang="ts">
const heroStats = [
  { label: 'Experiencia NetSuite', value: '6+ años' },
  { label: 'SuiteScript', value: '1.0 · 2.0 · 2.1' },
  { label: 'Integraciones', value: 'SuiteTalk · AWS S3' },
];
</script>

<!-- HeroSection.vue -->
<template>
  <section class="pt-12 md:pt-20">
    <div class="grid md:grid-cols-[1.4fr,1fr] gap-10 items-center">
      <div class="space-y-6">
        <p class="text-xs uppercase tracking-[0.2em] text-[var(--color-accent-muted)] font-semibold">
          Oracle NetSuite · Full-Stack
        </p>
        <h1 class="text-3xl md:text-4xl font-semibold text-[var(--color-text)] leading-tight">
          Jair Hernández · desarrollo soluciones escalables sobre NetSuite y la
          web.
        </h1>
        <p class="text-sm md:text-base text-[var(--color-text-soft)] leading-relaxed">
          Soy Desarrollador Senior de NetSuite con más de seis años dentro del
          ecosistema ERP. Construyo SuiteApps, automatizaciones, reportes
          financieros y conectores con terceros usando las mejores prácticas de
          SuiteScript, SuiteQL, SuiteTalk y CI/CD.
        </p>
        <p class="text-sm md:text-base text-[var(--color-text-soft)] leading-relaxed">
          Complemento el backend de NetSuite con interfaces modernas en Vue/Nuxt
          y servicios en la nube, conectando procesos de negocio con productos
          digitales que aportan datos claros y experiencias simples.
        </p>

        <div class="flex flex-wrap gap-3 text-sm">
          <a
            href="#projects"
            class="px-5 py-2 rounded-full bg-[var(--color-accent)] text-[var(--color-on-accent)] font-semibold hover:bg-[var(--color-accent-strong)] transition-colors"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            class="px-5 py-2 rounded-full border border-[var(--color-border-strong)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
          >
            Hablemos
          </a>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 text-sm">
          <div
            v-for="stat in heroStats"
            :key="stat.label"
            class="border border-[var(--color-border)] rounded-xl p-4 theme-panel-card"
          >
            <p class="text-2xl font-semibold text-[var(--color-text)]">
              {{ stat.value }}
            </p>
            <p class="text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>

      <div class="relative">
        <div
          class="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent)]/30 via-[var(--color-accent-muted)]/20 to-[var(--color-border-strong)]/20 blur-3xl"
        />
        <div
          class="relative border border-[var(--color-border)] rounded-2xl p-4 theme-panel-alt"
        >
          <p class="text-xs text-[var(--color-text-muted)] mb-2">
            Stack principal
          </p>
          <div class="flex flex-wrap gap-2 text-xs">
            <span
              class="px-3 py-1 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-chip)] text-[var(--color-text-soft)]"
            >
              SuiteScript 2.1
            </span>
            <span
              class="px-3 py-1 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-chip)] text-[var(--color-text-soft)]"
            >
              SuiteAnalytics Workbook
            </span>
            <span
              class="px-3 py-1 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-chip)] text-[var(--color-text-soft)]"
            >
              SuiteQL
            </span>
            <span
              class="px-3 py-1 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-chip)] text-[var(--color-text-soft)]"
            >
              SDF
            </span>
            <span
              class="px-3 py-1 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-chip)] text-[var(--color-text-soft)]"
            >
              Vue / Nuxt
            </span>
            <span
              class="px-3 py-1 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-chip)] text-[var(--color-text-soft)]"
            >
              TypeScript
            </span>
            <span
              class="px-3 py-1 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-chip)] text-[var(--color-text-soft)]"
            >
              CI/CD Bitbucket
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- sin <style> -->
