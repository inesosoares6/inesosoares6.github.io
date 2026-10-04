<template>
  <section id="about" class="about-container">
    <div class="about-content">
      <div class="text-justify">
        <h2 class="section-title">Beyond the Code</h2>
        <p>
          Hey there, I'm Inês and I love creating new things. I've been working
          as a Software Engineer since 2021. I'm a very active person and from a
          young age, I learned how to define priorities and manage time.
        </p>
        <p>
          After 18 years of playing volleyball, I now coach the under-14 and
          under-11 teams, supporting around 80 children. I also love challenging
          myself with marathons and HYROX competitions. When I'm not coding,
          coaching, or training, I enjoy traveling and building mobile apps to
          simplify everyday life.
        </p>
      </div>

      <div class="skills-side">
        <h3>My Stack</h3>
        <div class="skill-grid">
          <span v-for="skill in skills" :key="skill" class="skill-pill">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  "Vue.js",
  "VueX",
  "Pinia",
  "Vite",
  "Vitest",
  "Tailwind CSS",
  "TypeScript",
  "Git",
  "Figma",
  "JIRA",
  "Confluence",
  "draw.io",
  "Miro",
  "Python",
];
</script>

<style scoped>
.text-justify {
  text-align: justify;
}
.about-container {
  padding: 50px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}
.about-content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 60px;
  align-items: center;
}
.section-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
}
.skill-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}
.skill-pill {
  background: white;
  padding: 10px 20px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);
  border: 1px solid #f1f5f9;
}
@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }
}
</style>
