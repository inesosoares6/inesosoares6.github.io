<template>
  <div class="page-container">
    <header class="page-header">
      <div class="icon-circle">⚡</div>
      <h1>Active Life</h1>
      <p>How I stay energized and focused outside of coding.</p>
    </header>

    <div class="sports-detailed-grid">
      <div v-for="sport in sports" :key="sport.name" class="sport-detail-card">
        <div class="card-header">
          <div class="sport-icon-small">{{ sport.icon }}</div>
          <div>
            <h3>{{ sport.name }}</h3>
            <span class="sport-years">{{ sport.years }}</span>
          </div>
        </div>

        <div class="card-body">
          <p class="sport-bio" v-if="sport.bio" v-html="sport.bio"></p>

          <div
            v-for="section in sport.sections"
            :key="section.title"
            class="sport-sub-section"
          >
            <h4 v-if="section.title">
              {{ section.title }}
            </h4>
            <ul>
              <li v-for="item in section.items" :key="item.text">
                <span class="item-text">{{ item.text }}</span>
                <ul v-if="item.subItems" class="sub-list">
                  <li v-for="sub in item.subItems" :key="sub">{{ sub }}</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const sports = [
  {
    name: "Volleyball",
    icon: "🏐",
    years: "2006 — Present",
    sections: [
      {
        title: "Coaching (Since 2023)",
        items: [
          {
            text: "Ala de Nun'Álvares de Gondomar",
            subItems: ["Sub-13 & Sub-11 (2025/26)"],
          },
          {
            text: "Leixões Sport Club",
            subItems: ["Head Coach Sub-11 (2024/25)"],
          },
        ],
      },
      {
        title: "Athlete Career (2006 - 2024)",
        items: [
          { text: "Last season: Leixões Sport Club (2023/24)" },
          { text: "National Champion twice (2012, 2013)" },
          { text: "Team Captain (2010 - 2016)" },
        ],
      },
    ],
  },
  {
    name: "Running",
    icon: "🏃",
    years: "Since 2024",
    sections: [
      {
        title: "Running Highlights",
        items: [
          { text: "Porto Half Marathon 2025", subItems: ["1h41 @ 4'47\"/km"] },
          { text: "Porto Marathon 2024", subItems: ["3h44 @ 5'17\"/km"] },
        ],
      },
      {
        title: "Next Races",
        items: [
          { text: "Porto Half Marathon 2026" },
          { text: "Porto Marathon 2026" },
        ],
      },
    ],
  },
  {
    name: "Karate",
    icon: "🥋",
    years: "2002 — 2012",
    bio: "Gojo-ryu | Brown belt<br/>Practicing since age 4, Karate taught me discipline, respect, and adaptability—preparing me for adult life challenges.",
    sections: [],
  },
  {
    name: "Gym",
    icon: "🏋️‍♀️",
    years: "Since 2016",
    sections: [
      {
        title: "Strength & Cardio",
        items: [{ text: " Body Pump, Body Attack, RPM, HIIT" }],
      },
    ],
  },
];
</script>

<style scoped>
.sports-detailed-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 25px;
}

.sport-detail-card {
  background: white;
  padding: 35px;
  border-radius: 32px;
  border: 1px solid #f1f5f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}

.sport-icon-small {
  font-size: 2rem;
  background: #f8fafc;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
}

.sport-years {
  font-size: 0.8rem;
  color: var(--accent);
  font-weight: 700;
}

.sport-bio {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 20px;
}

.sport-sub-section h4 {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 20px 0 10px;
  color: var(--text-main);
}

ul {
  padding-left: 18px;
  list-style-type: circle;
}
li {
  margin-bottom: 8px;
  font-size: 0.95rem;
  color: #475569;
}

.sub-list {
  margin-top: 4px;
  list-style-type: none;
  padding-left: 0;
}
.sub-list li {
  font-size: 0.85rem;
  color: var(--text-muted);
  padding-left: 15px;
  position: relative;
}
.sub-list li::before {
  content: "↳";
  position: absolute;
  left: 0;
  color: var(--accent);
}

/* 1. Tighten the flex container */
.card-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
  line-height: 1.1; /* Reduces the line height for the whole group */
}

/* 2. Target the text container and remove the h3's default margin */
.card-header > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px; /* Removes any gap between name and years */
}

.card-header h3 {
  margin: 0; /* Critical: removes browser-default spacing */
  padding: 0;
  font-size: 1.25rem;
  font-weight: 800;
}

.sport-years {
  font-size: 0.8rem;
  color: var(--accent);
  font-weight: 700;
  margin-top: -2px; /* Optional: nudge it up slightly if it still feels far */
}
</style>
