<script setup lang="ts">
interface Experience {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  focus?: string;
  category: string;
}

interface Education {
  title: string;
  school: string;
  years: string;
}

interface Language {
  name: string;
  level: number;
  description: string;
}

const experiences: Experience[] = [
  {
    company: 'Entersol',
    role: 'NetSuite Developer',
    period: 'Abr. 2024 · Presente',
    focus:
      'Base administrativa del ERP + automatizaciones y módulos fiscales para NetSuite.',
    responsibilities: [
      'Gestión integral del ERP Oracle NetSuite',
      'Desarrollo con SuiteScript 1.0 y 2.x',
      'Integraciones de terceros y conectores con AWS S3',
      'Reportes avanzados, Workbooks y módulos DIOT/Desglose de impuestos',
      'Plug-ins para GL Impact y flujos críticos',
    ],
    category: 'NetSuite & ERP',
  },
  {
    company: 'Tekio · Freebug',
    role: 'NetSuite Developer Advance',
    period: '2019 · Abr. 2024',
    focus:
      'SuiteCommerce Advance, SuiteTalk REST y automatización de facturación.',
    responsibilities: [
      'SuiteApps y personalizaciones con SuiteScript 1.0/2.0/2.1',
      'Integraciones REST/SOAP y SuiteTalk Web Services',
      'Plug-ins para SuiteCommerce Advance y GL Impact',
      'Reportes avanzados (Saved Searches + Workbooks)',
      'Diseño de plantillas con FreeMarker y kioscos de facturación',
    ],
    category: 'NetSuite & ERP',
  },
  {
    company: 'SYBIL Integraciones TI',
    role: 'Becario · Full-Stack',
    period: '2018 · 2019',
    focus: 'Desarrollo de la aplicación web Sy-Track y base de datos PostgreSQL.',
    responsibilities: [
      'Diseño de módulos para gestión de información',
      'Implementación de Bootstrap, jQuery, PHP y PostgreSQL',
    ],
    category: 'WEB',
  },
  {
    company: 'Secretaría de Educación Pública Hgo.',
    role: 'Becario · Web Developer',
    period: 'May. 2017 · Ago. 2017',
    focus:
      'Módulos web internos para procesos administrativos con PHP y MySQL.',
    responsibilities: [
      'Construcción de interfaces con Bootstrap y jQuery',
      'Gestión de datos mediante PHP y MySQL',
    ],
    category: 'WEB',
  },
];

const education: Education[] = [
  {
    title: 'Ingeniería en TIC',
    school:
      'Universidad Tecnológica Del Valle Del Mezquital · Ixmiquilpan, Hgo.',
    years: '2017 · 2019',
  },
  {
    title: 'T.S.U. en TIC',
    school:
      'Universidad Tecnológica Del Valle Del Mezquital · Ixmiquilpan, Hgo.',
    years: '2015 · 2017',
  },
];

const languages: Language[] = [
  { name: 'Español', level: 100, description: 'Nativo' },
  { name: 'Inglés', level: 60, description: 'Lectura técnica y comunicación' },
];

const categoryColors: Record<string, string> = {
  'NetSuite & ERP': 'var(--color-category-netsuite)',
  WEB: 'var(--color-category-web)',
};

const getCategoryColor = (category: string) =>
  categoryColors[category] ?? 'var(--color-accent)';
</script>

<template>
  <div class="space-y-10">
    <div>
      <h2 class="text-2xl font-semibold mb-4">
        Experiencia laboral
      </h2>

      <div class="space-y-6">
        <article
          v-for="exp in experiences"
          :key="exp.company"
          class="border border-[var(--color-border)] rounded-2xl p-5 theme-panel"
        >
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
            <div>
              <p class="text-sm font-semibold text-[var(--color-text)]">
                {{ exp.role }} · {{ exp.company }}
              </p>
              <p class="text-xs text-[var(--color-text-muted)]">
                {{ exp.period }}
              </p>
            </div>
            <span
              class="text-[11px] uppercase tracking-[0.18em]"
              :style="{ color: getCategoryColor(exp.category) }"
            >
              {{ exp.category }}
            </span>
          </div>

          <p v-if="exp.focus" class="text-sm text-[var(--color-text-soft)] mb-3">
            {{ exp.focus }}
          </p>

          <ul class="text-sm text-[var(--color-text-soft)] list-disc pl-4 space-y-1">
            <li
              v-for="task in exp.responsibilities"
              :key="task"
            >
              {{ task }}
            </li>
          </ul>
        </article>
      </div>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <div class="border border-[var(--color-border)] rounded-2xl p-5 theme-panel">
        <h3 class="text-lg font-semibold mb-3">
          Educación
        </h3>
        <ul class="space-y-3 text-sm text-[var(--color-text-soft)]">
          <li
            v-for="edu in education"
            :key="edu.title"
          >
            <p class="font-medium">
              {{ edu.title }}
            </p>
            <p class="text-[var(--color-text-muted)]">
              {{ edu.school }}
            </p>
            <p class="text-xs text-[var(--color-text-muted)] opacity-80">
              {{ edu.years }}
            </p>
          </li>
        </ul>
      </div>

      <div class="border border-[var(--color-border)] rounded-2xl p-5 theme-panel">
        <h3 class="text-lg font-semibold mb-3">
          Idiomas
        </h3>
        <div class="space-y-4">
          <div
            v-for="lang in languages"
            :key="lang.name"
          >
            <div class="flex items-center justify-between text-sm">
              <p class="font-medium text-[var(--color-text)]">
                {{ lang.name }}
              </p>
              <span class="text-[var(--color-text-muted)] text-xs">
                {{ lang.description }}
              </span>
            </div>
            <div
              class="h-2 theme-progress-track rounded-full overflow-hidden mt-2"
              role="progressbar"
              :aria-valuenow="lang.level"
              aria-valuemin="0"
              aria-valuemax="100"
              :aria-label="`Nivel de ${lang.name}`"
            >
              <div
                class="h-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-muted)]"
                :style="{ width: `${lang.level}%` }"
              />
            </div>
            <p class="text-xs text-[var(--color-text-muted)] mt-1">
              {{ lang.level }}%
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
