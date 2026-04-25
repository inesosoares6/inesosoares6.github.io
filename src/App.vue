<template>
  <div class="app-layout">
    <Navbar />

    <main class="main-container">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <MainFooter />
  </div>
</template>

<script setup>
import Navbar from "./components/NavBar.vue";
import MainFooter from "./components/MainFooter.vue";
</script>

<style>
/* Global Layout Styles */
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content-wrapper {
  flex: 1; /* Ensures footer stays at bottom even on short pages */
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Page Transition Animations */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

.main-container {
  width: 100%;
  max-width: 1100px; /* This prevents the site from becoming too wide */
  margin: 0 auto; /* This centers the container */
  padding: 0 2rem; /* This adds "breathing room" on mobile/tablets */
}

/* Ensure the Footer matches the same width for alignment */
.bottom-bar {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
