<template>
  <div class="page-container">
    <header class="page-header">
      <div class="icon-circle" @click="openWorldMap">🌍</div>
      <h1>Wanderlust</h1>
      <p class="travel-subtitle">{{ subtitle }}</p>
    </header>

    <div class="gallery">
      <div
        v-for="(photo, index) in photos"
        :key="index"
        class="gallery-item"
        @click="selectedPhoto = photo"
      >
        <img :src="photo.url" :alt="photo.location" loading="lazy" />
        <div class="photo-overlay">
          <span>📍 {{ photo.location }}</span>
        </div>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="selectedPhoto" class="lightbox" @click="selectedPhoto = null">
        <img :src="selectedPhoto.url" />
        <p>📍 {{ selectedPhoto.location }}</p>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedPhoto = ref(null);
const subtitle = "3 Continents ∙ 29 Countries";

const photos = ref([
  {
    url: "travel/vietnam.jpeg",
    location: "Vietnam",
  },
  {
    url: "travel/thailand.jpeg",
    location: "Bangkok, Thailand",
  },
  {
    url: "travel/greece.jpg",
    location: "Greece",
  },
  {
    url: "travel/luxembourg.png",
    location: "Luxembourg",
  },
  {
    url: "travel/switzerland.png",
    location: "Switzerland",
  },
  {
    url: "travel/italy.jpg",
    location: "Italy",
  },
  {
    url: "travel/paris.jpg",
    location: "France",
  },
  {
    url: "travel/madrid.jpg",
    location: "Spain",
  },
  {
    url: "travel/albania.jpeg",
    location: "Albania",
  },
  {
    url: "travel/berlin.jpeg",
    location: "Germany",
  },
  {
    url: "travel/copenhagen.png",
    location: "Copenhagen, Denmark",
  },
  {
    url: "travel/malmo.png",
    location: "Malmö, Sweden",
  },
  {
    url: "travel/ireland.jpg",
    location: "Ireland",
  },
  {
    url: "travel/slovenia.jpg",
    location: "Slovenia",
  },
  {
    url: "travel/montenegro.jpg",
    location: "Montenegro",
  },
  {
    url: "travel/croatia.jpg",
    location: "Croatia",
  },
  {
    url: "travel/london.jpg",
    location: "London, UK",
  },
  {
    url: "travel/zakopane.jpg",
    location: "Poland",
  },
  {
    url: "travel/austria.jpg",
    location: "Salzburg, Austria",
  },
  {
    url: "travel/prague.jpg",
    location: "Prague, Czech Republic",
  },
  {
    url: "travel/budapest.jpg",
    location: "Budapest, Hungary",
  },
  {
    url: "travel/oslo.jpg",
    location: "Oslo, Norway",
  },
  {
    url: "travel/amsterdam.jpg",
    location: "The Netherlands",
  },
  {
    url: "travel/belgium.jpg",
    location: "Belgium",
  },
  {
    url: "travel/route66.jpg",
    location: "The Route 66, USA",
  },
]);

const openWorldMap = () => {
  if (selectedPhoto.value) {
    selectedPhoto.value = null;
  } else {
    selectedPhoto.value = {
      url: "travel/world-map.png",
      location: subtitle,
    };
  }
};
</script>

<style scoped>
.gallery {
  column-count: 3;
  column-gap: 20px;
}

.gallery-item {
  position: relative;
  margin-bottom: 20px;
  break-inside: avoid;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.gallery-item img {
  width: 100%;
  display: block;
  transition: transform 0.5s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  display: flex;
  align-items: flex-end;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .photo-overlay {
  opacity: 1;
}

.photo-overlay span {
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
}

/* Lightbox Styles */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.lightbox img {
  max-width: 90%;
  max-height: 80vh;
  border-radius: 10px;
}

.lightbox p {
  color: white;
  margin-top: 20px;
  font-size: 1.2rem;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .gallery {
    column-count: 2;
  }
}
@media (max-width: 480px) {
  .gallery {
    column-count: 1;
  }
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.travel-subtitle {
  letter-spacing: 8px;
  font-weight: 100;
  font-size: 16px;
}

@media (min-width: 1000px) {
  .travel-subtitle {
    letter-spacing: 8px;
    font-size: 20px;
    font-weight: 100;
  }
}

.icon-circle {
  cursor: pointer;
}
</style>
