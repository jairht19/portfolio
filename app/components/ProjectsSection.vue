<script setup lang="ts">
interface Project {
  title: string;
  type: 'NetSuite' | 'Web';
  tech: string[];
  description: string;
  highlight?: string;
}

const projects: Project[] = [
  {
    title: 'SuiteApp · Detalle de Impuestos (DIOT)',
    type: 'NetSuite',
    tech: ['SuiteScript 2.1', 'SuiteQL', 'SuiteAnalytics Workbook', 'SDF'],
    description:
      'Automatización del clasificador de impuestos, generación de información compatible con DIOT y consolidación de transacciones mediante consultas avanzadas.',
    highlight:
      'Reducción de duplicidad en resultados y mejora en la trazabilidad de impuestos por proveedor.',
  },
  {
    title: 'Pipeline CI/CD para SuiteApps',
    type: 'NetSuite',
    tech: ['Bitbucket Pipelines', 'suitecloud CLI', 'Node.js'],
    description:
      'Configuración de pipeline automatizado para deploy de SuiteApps a SB y PROD usando suitecloud project:deploy con validaciones previas.',
    highlight:
      'Disminución de errores manuales en despliegues y estandarización del flujo de cambios.',
  },
  {
    title: 'SPA para gestión de archivos en S3',
    type: 'Web',
    tech: ['Nuxt', 'TypeScript', 'Tailwind', 'AWS S3'],
    description:
      'Aplicación web para administrar archivos en S3 con interfaz moderna, autenticación y operaciones CRUD.',
  },
];
</script>

<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">
      Proyectos destacados
    </h2>

    <div class="grid gap-6 md:grid-cols-2">
      <article
        v-for="p in projects"
        :key="p.title"
        class="border border-slate-800 rounded-xl p-4 bg-slate-900/60"
      >
        <p class="text-xs uppercase tracking-[0.18em] mb-1"
          :class="p.type === 'NetSuite' ? 'text-sky-400' : 'text-emerald-300'">
          {{ p.type }}
        </p>
        <h3 class="font-semibold mb-2">
          {{ p.title }}
        </h3>
        <p class="text-sm text-slate-200 mb-3">
          {{ p.description }}
        </p>
        <p v-if="p.highlight" class="text-xs text-slate-400 mb-3">
          {{ p.highlight }}
        </p>
        <div class="flex flex-wrap gap-2 text-[11px] text-slate-300">
          <span
            v-for="t in p.tech"
            :key="t"
            class="px-2 py-1 rounded-full bg-slate-800 border border-slate-700"
          >
            {{ t }}
          </span>
        </div>
      </article>
    </div>
  </div>
</template>