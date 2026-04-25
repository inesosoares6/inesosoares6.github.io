<template>
  <div class="card">
    <div class="tags">
      <span v-for="t in data.tech" :key="t" class="tag">{{ t }}</span>
    </div>
    <h3>{{ data.title }}</h3>
    <p>{{ data.desc }}</p>
    <a
      :href="data.link"
      class="arrow-link"
      target="_blank"
      rel="noopener noreferrer"
      >View Project <span>→</span></a
    >
  </div>
</template>

<script setup>
defineProps(["data"]);
</script>

<style scoped>
.card {
  background: white;
  padding: 2rem;
  border-radius: 24px;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.05),
    0 2px 4px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #f1f5f9;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  border-color: #6366f1;
}

.tag {
  font-size: 0.7rem;
  color: var(--text-muted);
  margin-right: 0.5rem;
  border: 1px solid #e2e8f0;
  padding: 2px 8px;
  border-radius: 4px;
}

h3 {
  margin: 1rem 0 0.5rem;
}

p {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

.arrow-link {
  margin-top: 1.5rem;
  display: block;
  color: var(--accent);
  font-weight: 600;
  text-decoration: none;
}
</style>
