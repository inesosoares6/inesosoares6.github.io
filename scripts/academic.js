const studies = [
  {
    title: "Faculdade de Engenharia da Universidade do Porto",
    location: "Porto, Portugal",
    date: "2016-2021",
    image: "feup.png",
    text: "Master Degree in Electrical and Computer Engineering",
    bullets: [
      "Automation branch with Robotics specialization",
      "Integrated Master",
      "Grade 17 out of 20",
    ],
  },
  {
    title: "INESC TEC",
    location: "Porto, Portugal",
    date: "2021",
    image: "inesctec.png",
    id: "thesisModalContent",
    page: "thesis",
    text: "Programming Robots by Demonstration using Augmented Reality",
    bullets: [
      `<span
                    class="text-modal-trigger"
                    data-bs-target="#thesisModal"
                    data-bs-toggle="modal"
                    >Master Thesis</span
                  >: Demonstration of concept
                  <a
                    href="https://www.youtube.com/watch?v=joV-4uArWDw&ab_channel=INESC-TECRobotics"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link-tag"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                      />
                    </svg>
                  </a>`,
      "Grade 19 out of 20 & 2 published articles",
      `Best Master's Thesis in Robotics -
                  <a
                    href="http://www.sprobotica.pt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link-tag"
                    >SPR</a
                  >
                  (2022)`,
    ],
  },
  {
    title: "Wroclaw University of Science and Technology",
    location: "Wroclaw, Poland",
    date: "2019-2020",
    image: "wroclaw.png",
    text: "Erasmus+ Program - Semester abroad",
    bullets: [
      "Artificial Intelligence & Machine Learning",
      "Robotic Programming Environments",
    ],
  },
  {
    title: "University of Cambridge English Language Exams",
    location: "Bristol School Maia, Portugal",
    image: "cambridge.png",
    bullets: [
      "Certificate in Advanced English @ Cambridge <ul><li>Level C2: 206 / 210 (2021)</li></ul>",
      "First Certificate Exam @ Cambridge <ul><li>Level B2: 172 / 190 (2015)</li></ul>",
    ],
  },
];

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
  const studiesContainer = document.querySelector(".studies");
  const coursesContainer = document.querySelector(".courses");

  studies.forEach((course) => {
    const cardHTML = `<div class="col-md-6">
          <div
            class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
          >
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary-emphasis"
                >${course.location}</strong
              >
              <div class="row d-flex justify-content-between">
                <div class="col-9 col-lg-11">
                  <h3 class="mb-0">${course.title}</h3>
                  ${
                    course?.date
                      ? `<div class="mb-1 text-body-secondary">${course.date}</div>`
                      : ""
                  }
                </div>
                <div class="col-auto small-logo">
                  <img
                    src="./assets/${course.image}"
                    alt="${course.title} logo"
                    width="50"
                  />
                </div>
              </div>

              <p class="card-text mb-auto" style="text-align: start">
                ${course?.text ?? " "}
              </p>
              
              <ul>
                ${course.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
              </ul>
            </div>
            <div class="col-auto p-4 work-logo">
              <img
                src="./assets/${course.image}"
                alt="${course.title} logo"
                width="150"
              />
            </div>
          </div>
          <div id="${course?.id}"></div>
        </div>`;

    studiesContainer.insertAdjacentHTML("beforeend", cardHTML);
    if (course?.id) {
      $(`#${course.id}`).load(`./modals/academic/${course.page}.html`);
    }
  });

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
