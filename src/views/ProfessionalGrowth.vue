<template>
  <div class="page-container">
    <header class="page-header">
      <div class="icon-circle">💼</div>
      <h1>Work & Growth</h1>
      <p>
        My professional journey and the specialized training I've completed.
      </p>
    </header>

    <section class="section">
      <h2 class="sub-title">Professional Experience</h2>
      <div class="timeline">
        <div v-for="job in experience" :key="job.role" class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="date">{{ job.period }}</span>
            <h3>{{ job.role }}</h3>
            <h4 class="institution">{{ job.company }}</h4>
            <p class="details" v-html="job.desc"></p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="sub-title">Courses & Certifications</h2>
      <div class="bento-grid">
        <div
          v-for="(course, index) in courses"
          :key="index"
          :class="['bento-item', `item-${index}`]"
        >
          <div class="bento-content">
            <a :href="course.link" target="_blank" class="course-link">
              <span class="course-platform">{{ course.platform }}</span>
              <h3>{{ course.title }}</h3>
              <p v-html="course.desc"></p>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const experience = [
  {
    period: "2023 — Present",
    role: "Frontend Web Developer",
    company: "Kaizen Gaming",
    desc: "<ul> <li>Software Engineer - Frontend Web Developer <ul> <li>My Account Project (with markets all over the world): <ul> <li>Migrate the project from MVC to VueJS 3</li> <li>Redesign website pages from Figma designs</li> <li>Implement new features and write corresponding unit tests</li><li>Work with different markets</li> <li>Write relevant documentation</li> </ul> </li> </ul> </li> <li>Agile Methodologies - Scrum <ul> <li>Two weeks sprints</li> <li>Scrum ceremonies: planning, daily, refinement, review and retrospective meetings</li>  </ul>  </li>  </ul>",
  },
  {
    period: "2021 — 2023",
    role: "Software Engineer",
    company: "CEiiA - Engineering and Product Development Centre",
    desc: "<ul>   <li>Autonomous Systems Developer: worked on the project of developing an Autonomous Surface Vehicle (ASV), especially the software part of the boat.<ul><li>Path Planning &amp; Machine Learning<ul> <li>Developed from scratch the path planning algorithm for the vehicle to avoid obstacles using machine learning. Resulted in a paper publication in <b>ICARSC 2022</b>.</li></ul></li><li>Mission Control Interface<ul>  <li>Using VueJS 3, I worked on the development of the interface that controlled the vehicle. Its functionalities was to plan missions, watch the vehicle live camera, control the vehicle actuators, etc.</li>   </ul>  </li> </ul> </li>    <li>Our team participated in the <b>Oceanology International 2022 (ExCel, London)</b>, showcasing the functionalities and potential of our ASV.</li></ul>",
  },
];

const courses = [
  {
    title: "Microfrontends Architecture",
    platform: "Udemy, 2025",
    link: "https://kaizen.udemy.com/course/microfrontend-course",
    desc: "Microfrontends with React.js and Vue.js <br/> Module Federation <br/> CI/CD pipelines setup: production-style workflow",
  },
  {
    title: "Web Development",
    platform: "Udemy, 2024",
    link: "https://kaizen.udemy.com/course/the-complete-web-development-bootcamp/",
    desc: "Full-Stack Web Developer <br/> Frontend: HTML, CSS, Javascript, React <br/> Backend & DB: Node, PostgreSQL",
  },
  {
    title: "UI/UX Design",
    platform: "Udemy, 2024",
    link: "https://kaizen.udemy.com/course/figma-ux-ui-design-user-experience-tutorial-course/",
    desc: "Understand the principles of user interface and user experience design.",
  },
  {
    title: "App Marketing",
    platform: "Udemy, 2024",
    link: "https://kaizen.udemy.com/course/app_marketing/",
    desc: "Learn strategies for marketing and promoting mobile applications.",
  },
];
</script>

<style scoped>
.timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding-left: 30px;
}
.timeline::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, var(--accent), transparent);
}
.timeline-item {
  margin-bottom: 50px;
  position: relative;
}
.timeline-dot {
  position: absolute;
  left: -35px;
  top: 5px;
  width: 12px;
  height: 12px;
  background: var(--accent);
  border-radius: 50%;
  border: 4px solid var(--bg);
}
.date {
  font-weight: 800;
  color: var(--accent);
  font-size: 0.8rem;
  text-transform: uppercase;
}
.institution {
  color: var(--text-muted);
  font-weight: 400;
  margin: 5px 0 15px;
}
.details {
  font-size: 0.95rem;
  line-height: 1.6;
}

.section {
  margin-bottom: 80px;
}
.sub-title {
  font-size: 1.8rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

/* Bento Grid Styles */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 180px;
  gap: 15px;
}
.bento-item {
  background: #ffffff;
  padding: 25px;
  border-radius: 24px;
  border: 1px solid #f1f5f9;
  display: flex;
  align-items: flex-end;
  transition: all 0.3s ease;
}
.bento-item:hover {
  background: var(--accent);
  color: white;
  transform: translateY(-5px);
}
.bento-item:hover p,
.bento-item:hover .course-platform {
  color: rgba(255, 255, 255, 0.8);
}

.item-0 {
  grid-column: span 2;
  grid-row: span 2;
  background: #eef2ff;
} /* Featured Course */
.item-1 {
  grid-column: span 2;
}
.item-2 {
  grid-column: span 1;
}
.item-3 {
  grid-column: span 1;
}

.course-platform {
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--accent);
}
.bento-content h3 {
  margin: 5px 0;
  font-size: 1.1rem;
}
.bento-content p {
  font-size: 0.8rem;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .work-card {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.course-link {
  text-decoration: none;
  color: inherit;
}
</style>
