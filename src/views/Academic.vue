<template>
  <div class="page-container">
    <header class="page-header">
      <div class="icon-circle">🎓</div>
      <h1>Academic Path</h1>
      <p>My journey through formal education and research publications.</p>
    </header>

    <section class="section">
      <h2 class="sub-title">Education</h2>
      <div class="work-list">
        <div v-for="item in education" :key="item.degree" class="work-card">
          <div class="work-info">
            <span class="work-date">{{ item.year }}</span>
            <h3>{{ item.degree }}</h3>
            <h4 class="company">{{ item.school }}</h4>
          </div>
          <div class="work-desc" v-html="item.description"></div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="sub-title">Published Articles</h2>
      <div class="pub-grid">
        <div v-for="pub in publications" :key="pub.title" class="pub-card">
          <div class="pub-icon-wrapper">
            <img :src="pub.logo" :alt="pub.publisher" class="pub-logo" />
          </div>
          <h3>{{ pub.title }}</h3>
          <p class="pub-authors">{{ pub.authors }}</p>
          <p class="pub-citation">{{ pub.citation }}</p>
          <a :href="pub.link" target="_blank" class="view-link">View »</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const education = [
  {
    year: "2016 — 2021",
    degree: "Master Degree",
    school: "Faculdade de Engenharia da Universidade do Porto",
    description:
      "<p>Electrical and Computer Engineering</p> <p> Automation branch with Robotics specialization <p/><p>Integrated Master - Grade 17 out of 20</p>",
  },
  {
    year: "2021",
    degree: "Master Thesis",
    school: "INESC TEC",
    description:
      "<p>Programming Robots by Demonstration using AR</p> <p>Grade 19 out of 20 & 2 published articles<p>Best Master's Thesis in Robotics - SPR (2022)</p>",
  },
  {
    year: "2019 — 2021",
    degree: "Erasmus+ Program",
    school: "Wroclaw University of Science and Technology",
    description:
      "<p>Artificial Intelligence & Machine Learning</p> <p>Robotic Programming Environments</p>",
  },
  {
    year: "2021",
    degree: "English Certification",
    school: "University of Cambridge",
    description:
      "<p>Certificate in Advanced English</p> <ul><li>Level C2: 206 out of 210</li></ul>",
  },
];

const publications = [
  {
    title:
      "Obstacle Avoiding Path Planning Pipeline for Marine Surface Vessels",
    authors: "I. Soares, S. Sá, J. Morais and J. Fortuna",
    citation: "2022 IEEE ICARSC, 2022, pp. 161-166.",
    publisher: "IEEE Xplore",
    logo: "/logos/ieee.png",
    link: "https://ieeexplore.ieee.org/document/9784810",
  },
  {
    title: "Programming Robots by Demonstration Using Augmented Reality",
    authors: "I. Soares, M. Petry, and A. P. Moreira",
    citation: "Sensors, vol. 21, no. 17, p. 5976, Sep. 2021.",
    publisher: "Sensors",
    logo: "/logos/sensors.png",
    link: "https://www.mdpi.com/1424-8220/21/17/5976",
  },
  {
    title: "Accuracy and Repeatability Tests on HoloLens 2 and HTC Vive",
    authors: "I. Soares, R. B. Sousa, M. Petry, and A. P. Moreira",
    citation: "MTI, vol. 5, no. 8, p. 47, Aug. 2021.",
    publisher: "MTI",
    logo: "/logos/mti.png",
    link: "https://www.mdpi.com/2414-4088/5/8/47",
  },
];
</script>

<style scoped>
/* Work Experience Styles */
.work-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.work-card {
  background: white;
  padding: 30px;
  border-radius: 24px;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
  border: 1px solid #f1f5f9;
  transition: border-color 0.3s ease;
}
.work-card:hover {
  border-color: var(--accent);
}
.work-date {
  color: var(--accent);
  font-weight: 700;
  font-size: 0.8rem;
}
.company {
  color: var(--text-muted);
  font-weight: 500;
  margin: 5px 0;
}

.section {
  margin-top: 60px;
}

.sub-title {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 30px;
}

/* Existing Work Card Styles */
.work-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.work-card {
  background: white;
  padding: 30px;
  border-radius: 24px;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
  border: 1px solid #f1f5f9;
}

/* Publication Grid Styles */
.pub-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.pub-card {
  background: #ffffff; /* Pure white or #f8fafc for off-white */
  color: #1a1f26; /* Dark text for readability */
  padding: 40px 30px;
  border-radius: 24px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #f1f5f9; /* Subtle border */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03); /* Soft, airy shadow */
}

.pub-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border-color: var(--accent); /* Highlights with your indigo color on hover */
}

.pub-icon-wrapper {
  width: 120px;
  height: 120px;
  background: #ffffff;
  border-radius: 50%;
  margin: 0 auto 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 15px;
  /* Add a thin border to the circle so it doesn't disappear on the white card */
  border: 1px solid #f1f5f9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
}

.pub-logo {
  max-width: 100%;
  height: auto;
  /* Optional: if logos are too bright, add a slight opacity */
  filter: grayscale(10%) contrast(110%);
}

.pub-card h3 {
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 15px;
  line-height: 1.4;
  color: #1e293b;
}

.pub-authors {
  font-size: 0.85rem;
  color: #64748b; /* Muted slate color */
  margin-bottom: 10px;
}

.pub-citation {
  font-size: 0.85rem;
  color: #94a3b8; /* Lighter slate */
  margin-bottom: 25px;
  font-style: italic;
}

.view-link {
  display: inline-block;
  padding: 10px 24px;
  background: #1e293b; /* Dark button for high contrast */
  color: #ffffff;
  border-radius: 12px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.view-link:hover {
  background: var(--accent); /* Switches to indigo on hover */
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .work-card {
    grid-template-columns: 1fr;
    gap: 10px;
  }
}
</style>
