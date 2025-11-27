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
        <p class="text-xs uppercase tracking-[0.2em] text-sky-400 font-semibold">
          Oracle NetSuite · Full-Stack
        </p>
        <h1 class="text-3xl md:text-4xl font-semibold text-slate-50 leading-tight">
          Jair Hernández · desarrollo soluciones escalables sobre NetSuite y la
          web.
        </h1>
        <p class="text-sm md:text-base text-slate-200 leading-relaxed">
          Soy Desarrollador Senior de NetSuite con más de seis años dentro del
          ecosistema ERP. Construyo SuiteApps, automatizaciones, reportes
          financieros y conectores con terceros usando las mejores prácticas de
          SuiteScript, SuiteQL, SuiteTalk y CI/CD.
        </p>
        <p class="text-sm md:text-base text-slate-200 leading-relaxed">
          Complemento el backend de NetSuite con interfaces modernas en Vue/Nuxt
          y servicios en la nube, conectando procesos de negocio con productos
          digitales que aportan datos claros y experiencias simples.
        </p>

        <div class="flex flex-wrap gap-3 text-sm">
          <a
            href="#projects"
            class="px-5 py-2 rounded-full bg-sky-500 text-slate-950 font-semibold hover:bg-sky-400 transition-colors"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            class="px-5 py-2 rounded-full border border-slate-700 text-slate-100 hover:border-sky-400 hover:text-sky-300 transition-colors"
          >
            Hablemos
          </a>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 text-sm">
          <div
            v-for="stat in heroStats"
            :key="stat.label"
            class="border border-slate-800 rounded-xl p-4 bg-slate-900/60"
          >
            <p class="text-2xl font-semibold text-slate-50">
              {{ stat.value }}
            </p>
            <p class="text-xs uppercase tracking-[0.18em] text-slate-400">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>

      <div class="relative">
        <div
          class="absolute inset-0 bg-gradient-to-tr from-sky-500/20 via-fuchsia-500/10 to-emerald-400/10 blur-3xl"
        />
        <div
          class="relative border border-slate-800 rounded-2xl p-4 bg-slate-900/70"
        >
          <p class="text-xs text-slate-400 mb-2">
            Stack principal
          </p>
          <div class="flex flex-wrap gap-2 text-xs">
            <span
              class="px-3 py-1 rounded-full border border-slate-700 bg-slate-900 text-slate-200"
            >
              SuiteScript 2.1
            </span>
            <span
              class="px-3 py-1 rounded-full border border-slate-700 bg-slate-900 text-slate-200"
            >
              SuiteAnalytics Workbook
            </span>
            <span
              class="px-3 py-1 rounded-full border border-slate-700 bg-slate-900 text-slate-200"
            >
              SuiteQL
            </span>
            <span
              class="px-3 py-1 rounded-full border border-slate-700 bg-slate-900 text-slate-200"
            >
              SDF
            </span>
            <span
              class="px-3 py-1 rounded-full border border-slate-700 bg-slate-900 text-slate-200"
            >
              Vue / Nuxt
            </span>
            <span
              class="px-3 py-1 rounded-full border border-slate-700 bg-slate-900 text-slate-200"
            >
              TypeScript
            </span>
            <span
              class="px-3 py-1 rounded-full border border-slate-700 bg-slate-900 text-slate-200"
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
