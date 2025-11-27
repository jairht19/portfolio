<script setup lang="ts">
const email = 'contacto.jairhdez@gmail.com';
const linkedin = 'www.linkedin.com/in/jair-hernandez-trejo';
const phone = '+52 771 153 2320';
const phoneLink = '+527711532320';
const location = 'Hidalgo, México';

const contactInfo = [
  {
    label: 'Correo',
    value: email,
    link: `mailto:${email}`,
  },
  {
    label: 'Teléfono',
    value: phone,
    link: `tel:${phoneLink}`,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jair-hernandez-trejo',
    link: linkedin,
  },
  {
    label: 'Ubicación',
    value: location,
  },
];
</script>

<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-2xl font-semibold mb-2">
        Contacto
      </h2>
      <p class="text-sm text-slate-200 max-w-2xl">
        Si estás buscando apoyo con SuiteApps, automatizaciones fiscales,
        integraciones o construir interfaces web alrededor de NetSuite, estaré
        encantado de escuchar tu proyecto y proponer la mejor ruta técnica.
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-[1.2fr,0.8fr]">
      <div class="border border-slate-800 rounded-2xl p-5 bg-slate-900/60 space-y-4">
        <p class="text-sm text-slate-300">
          Respondo rápidamente por correo o LinkedIn, y también puedo agendar
          una llamada si lo prefieres.
        </p>
        <div class="flex flex-wrap gap-3 text-sm">
          <a
            :href="`mailto:${email}`"
            class="px-5 py-2 rounded-full bg-sky-500 text-slate-950 font-semibold hover:bg-sky-400 transition-colors"
          >
            Enviar correo
          </a>
          <a
            :href="linkedin"
            target="_blank"
            class="px-5 py-2 rounded-full border border-slate-700 hover:border-sky-400 hover:text-sky-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            :href="`tel:${phoneLink}`"
            class="px-5 py-2 rounded-full border border-slate-700 hover:border-sky-400 hover:text-sky-300 transition-colors"
          >
            Llamar / WhatsApp
          </a>
        </div>
      </div>

      <div class="border border-slate-800 rounded-2xl p-5 bg-slate-900/60 space-y-4">
        <h3 class="text-sm uppercase tracking-[0.18em] text-slate-400">
          Datos directos
        </h3>
        <dl class="space-y-3 text-sm text-slate-200">
          <div
            v-for="info in contactInfo"
            :key="info.label"
            class="border-b border-slate-800 pb-2 last:border-none last:pb-0"
          >
            <dt class="text-xs uppercase tracking-[0.18em] text-slate-500">
              {{ info.label }}
            </dt>
            <dd>
              <a
                v-if="info.link"
                :href="info.link"
                target="_blank"
                class="hover:text-sky-300 transition-colors"
              >
                {{ info.value }}
              </a>
              <span v-else>
                {{ info.value }}
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
