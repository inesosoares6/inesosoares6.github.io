const courses = [
  {
    title: "Web Development",
    subtitle: "Udemy, Instructor: Dr. Angela Yu (2024)",
    icon: "code-slash",
    link: "https://kaizen.udemy.com/course/the-complete-web-development-bootcamp/",
    bullets: [
      "Full-Stack Web Developer",
      "Frontend: HTML, CSS, Javascript, React",
      "Backend & DB: Node, PostgreSQL",
    ],
  },
  {
    title: "Figma UI UX",
    subtitle: "Udemy, Instructor: Daniel Scott (2024)",
    icon: "boxes",
    link: "https://kaizen.udemy.com/course/figma-ux-ui-design-user-experience-tutorial-course/",
    bullets: [
      "UX Designer using Figma",
      "Make fully interactive prototypes",
      "Build a UX project from beginning to end",
    ],
  },
  {
    title: "App Marketing",
    subtitle: "Udemy, Instructor: Darius Mora (2024)",
    icon: "body-text",
    link: "https://kaizen.udemy.com/course/app_marketing/",
    bullets: [
      "Get featured in the Apps Store using ASO",
      "Create app icons, screenshots and videos",
      "Monetize the app and pricing strategy",
    ],
  },
  {
    title: "Robotics",
    subtitle: "Coursera, University of Pennsylvania (2021)",
    icon: "robot",
    link: "https://www.coursera.org/programs/ceiia-centro-de-engenharia-e-desenvolvimento-learning-program-059os/specializations/robotics",
    bullets: [
      "Computational Motion Planning, Mobility",
      "Perception, Estimation and Learning",
      "Overall result: 98 %",
    ],
  },
  {
    title: "Kotlin",
    subtitle: "Android Training Program by Google (2020)",
    icon: "android2",
    link: "https://github.com/up201606615/app_SEAI_G",
    bullets: [
      "Foundations, Jetpack, Firebase",
      "10 weeks developing a project",
      "Final project: Electric Car Charging App",
    ],
  },
  {
    title: "Machine Learning",
    subtitle: "Coursera, Stanford University (2019)",
    icon: "cpu-fill",
    link: "https://www.coursera.org/learn/machine-learning",
    bullets: [
      "Regression, SVM, Neural Networks",
      "11 weeks with tests at the end of each week",
      "Overall result: 96 %",
    ],
  },
];

const createAcademicCards = () => {
  // const studiesContainer = document.querySelector(".studies");
  const coursesContainer = document.querySelector(".courses");

  // studies.forEach((course) => {
  //   const cardHTML = ``;

  //   studiesContainer.insertAdjacentHTML("beforeend", cardHTML);
  // });

  courses.forEach((course) => {
    const cardHTML = `<div class="col d-flex align-items-start">
          <div
            class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"
          >
            <img src="./assets/icons/${course.icon}.svg" alt="${
      course.icon
    } icon" width="20" />
          </div>
          <div>
            <h3 class="fs-2 text-body-emphasis">${course.title}</h3>
            <h6 style="color: grey">
              @ ${course.subtitle}
            </h6>
            <ul>
            ${course.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
            </ul>
            <a
              href="${course.link}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              View Details
            </a>
          </div>
        </div>`;

    coursesContainer.insertAdjacentHTML("beforeend", cardHTML);
  });
};

document.addEventListener("DOMContentLoaded", createAcademicCards);
