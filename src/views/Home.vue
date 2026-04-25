<template>
  <div class="page-fade-in">
    <header class="hero">
      <div class="badge">"New challenge, why not?"</div>
      <h1>Inês <span class="gradient-text">Soares</span></h1>
      <p class="subtitle">Software Engineer · Frontend Developer</p>
      <p class="description">
        Building digital experiences that are as functional as they are
        beautiful. Currently focused on Vue.js and modern web architectures.
      </p>
    </header>

    <section id="projects" class="grid-section">
      <div class="section-header">
        <h2 class="section-title">Selected Work</h2>
        <router-link to="/work" class="view-all"
          >View all experience →</router-link
        >
      </div>

      <div class="grid">
        <ProjectCard v-for="p in projects" :key="p.title" :data="p" />
      </div>
    </section>

    <AboutSection />
  </div>
</template>

<script setup>
import { ref } from "vue";
import AboutSection from "../components/AboutSection.vue";
import ProjectCard from "../components/ProjectCard.vue";

const projects = ref([
  {
    title: "Book Library",
    tech: ["Vue", "Vuetify", "Pinia", "Firebase"],
    desc: "A database to track and manage your reading list with a clean, focused UI.",
    link: "https://github.com/inesosoares6/book-library",
  },
  {
    title: "Workouts App",
    tech: ["Vue", "Vuetify", "Pinia", "localStorage"],
    desc: "A tool designed to help users plan and track their fitness journey efficiently.",
    link: "https://github.com/inesosoares6/workouts-app",
  },
  {
    title: "Shopping List",
    tech: ["Vue", "Quasar", "Pinia", "Firebase"],
    desc: "A real-time collaborative list for coordinating groceries and household needs.",
    link: "https://github.com/inesosoares6/shopping-list-v2",
  },
]);
</script>

<style scoped>
.hero {
  padding: 10rem 0 2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.gradient-text {
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  background: #eef2ff;
  color: #4338ca;
  font-size: 0.8rem;
  font-weight: 600;
  font-style: italic;
  margin-bottom: 1.5rem;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 1rem;
}

.description {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.grid-section {
  padding: 4rem 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2.5rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 800;
  margin: 0;
}

.view-all {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .hero {
    padding: 8rem 0 4rem;
  }
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}

/* Local page animation */
.page-fade-in {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
