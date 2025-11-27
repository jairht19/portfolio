<script setup lang="ts">
const email = 'contacto.jairhdez@gmail.com';
const linkedinHandle = 'linkedin.com/in/jair-hernandez-trejo';
const linkedin = 'https://www.linkedin.com/in/jair-hernandez-trejo';
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
    value: linkedinHandle,
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
      <p class="text-sm text-[var(--color-text-soft)] max-w-2xl">
        Si estás buscando apoyo con SuiteApps, automatizaciones fiscales,
        integraciones o construir interfaces web alrededor de NetSuite, estaré
        encantado de escuchar tu proyecto y proponer la mejor ruta técnica.
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-[1.2fr,0.8fr]">
      <div class="border border-[var(--color-border)] rounded-2xl p-5 theme-panel space-y-4">
        <p class="text-sm text-[var(--color-text-muted)]">
          Respondo rápidamente por correo o LinkedIn, y también puedo agendar
          una llamada si lo prefieres.
        </p>
        <div class="flex flex-wrap gap-3 text-sm">
          <a
            :href="`mailto:${email}`"
            class="px-5 py-2 rounded-full bg-[var(--color-accent)] text-[var(--color-on-accent)] font-semibold hover:bg-[var(--color-accent-strong)] transition-colors"
          >
            Enviar correo
          </a>
          <a
            :href="linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="px-5 py-2 rounded-full border border-[var(--color-border-strong)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            :href="`tel:${phoneLink}`"
            class="px-5 py-2 rounded-full border border-[var(--color-border-strong)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
          >
            Llamar / WhatsApp
          </a>
        </div>
      </div>

      <div class="border border-[var(--color-border)] rounded-2xl p-5 theme-panel space-y-4">
        <h3 class="text-sm uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
          Datos directos
        </h3>
        <dl class="space-y-3 text-sm text-[var(--color-text-soft)]">
          <div
            v-for="info in contactInfo"
            :key="info.label"
            class="border-b border-[var(--color-border)] pb-2 last:border-none last:pb-0"
          >
            <dt class="text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              {{ info.label }}
            </dt>
            <dd>
              <a
                v-if="info.link"
                :href="info.link"
                :target="info.link.startsWith('http') ? '_blank' : undefined"
                :rel="info.link.startsWith('http') ? 'noopener noreferrer' : undefined"
                class="hover:text-[var(--color-accent)] transition-colors"
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
