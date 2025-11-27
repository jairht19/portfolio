<script setup lang="ts">
const sections = [
  { id: 'about', label: 'Sobre mí' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contacto' },
];

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const closeMenu = () => {
  isMenuOpen.value = false;
};

const theme = useState<'light' | 'dark'>('theme', () => 'dark');
const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
};

const themeButtonLabel = computed(() =>
  theme.value === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro',
);
const themeButtonText = computed(() =>
  theme.value === 'dark' ? 'Claro' : 'Oscuro',
);
const themeButtonIcon = computed(() =>
  theme.value === 'dark' ? '☀️' : '🌙',
);

if (process.client) {
  const getPreferredTheme = () => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  };

  theme.value = getPreferredTheme();

  watchEffect(() => {
    const currentTheme = theme.value;
    document.documentElement.dataset.theme = currentTheme;
    localStorage.setItem('theme', currentTheme);
  });
}

useHead(() => ({
  htmlAttrs: {
    'data-theme': theme.value,
  },
}));
</script>

<template>
  <div class="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] antialiased">
    <!-- Header -->
    <header
  class="sticky top-0 z-30 backdrop-blur border-b border-[var(--color-border)] theme-surface"
>
  <nav class="max-w-5xl mx-auto flex items-center justify-between py-3 px-4">
    <!-- Logo + nombre -->
    <div class="flex items-center gap-3">
      <div
        class="h-9 w-9 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-muted)] flex items-center justify-center shadow-lg"
        :style="{
          '--tw-shadow-color':
            'color-mix(in srgb, var(--color-accent) 60%, transparent)',
          '--tw-shadow': 'var(--tw-shadow-colored)',
        }"
      >
        <span class="text-[15px] font-semibold text-[var(--color-on-accent)] tracking-tight">
          JH
        </span>
      </div>

      <div class="flex flex-col leading-tight">
        <span class="text-sm font-semibold text-[var(--color-text)]">
          Jair Hernández
        </span>
        <span class="text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
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
          class="text-[var(--color-text-soft)] hover:text-[var(--color-accent)]"
        >
          {{ section.label }}
        </a>
      </li>
    </ul>

    <div class="flex items-center gap-2">
      <button
        class="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] px-3 py-2 text-xs font-semibold text-[var(--color-text-soft)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
        type="button"
        :aria-label="themeButtonLabel"
        @click="toggleTheme"
      >
        <span aria-hidden="true">
          {{ themeButtonIcon }}
        </span>
        <span>
          {{ themeButtonText }}
        </span>
      </button>

      <button
        class="md:hidden inline-flex items-center justify-center rounded-full border border-[var(--color-border-strong)] px-3 py-2 text-xs font-semibold text-[var(--color-text-soft)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
        type="button"
        aria-label="Abrir menú"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        @click="toggleMenu"
      >
        <span v-if="!isMenuOpen">Menú</span>
        <span v-else>Cerrar</span>
      </button>
    </div>
  </nav>

  <div
    v-if="isMenuOpen"
    id="mobile-menu"
    class="md:hidden border-t border-[var(--color-border)] theme-overlay backdrop-blur px-4 pb-4"
  >
    <ul class="flex flex-col gap-3 text-sm font-medium pt-3">
      <li
        v-for="section in sections"
        :key="section.id"
      >
        <a
          :href="`#${section.id}`"
          class="block rounded-xl border border-transparent px-3 py-2 text-[var(--color-text-soft)] hover:border-[var(--color-accent)] hover:bg-[var(--color-panel)]"
          @click="closeMenu"
        >
          {{ section.label }}
        </a>
      </li>
    </ul>
  </div>
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
