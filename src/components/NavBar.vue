<template>
  <nav class="nav-wrapper">
    <div class="nav-pill">
      <router-link to="/" class="nav-link">Home</router-link>
      <div class="divider"></div>
      <router-link to="/work" class="nav-link">Work</router-link>
      <router-link to="/academic" class="nav-link">Academic</router-link>
      <router-link to="/travel" class="nav-link">Travel</router-link>
      <router-link to="/sports" class="nav-link">Sports</router-link>
    </div>
  </nav>
</template>

<style scoped>
.nav-wrapper {
  position: fixed;
  top: 1.5rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
}

.nav-pill {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  padding: 0.5rem 1rem;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  display: flex;
  gap: 0.5rem;
  align-items: center;
  overflow-x: auto;
}

.nav-link {
  text-decoration: none;
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.6rem 1rem;
  border-radius: 100px;
  transition: all 0.3s ease;
}

/* Active Link Styling */
.router-link-active {
  background: var(--accent);
  color: white !important;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}

.nav-link:hover:not(.router-link-active) {
  background: rgba(99, 102, 241, 0.05);
  color: var(--accent);
}

.divider {
  width: 1px;
  height: 20px;
  background: #e2e8f0;
  margin: 0 0.5rem;
}
</style>
