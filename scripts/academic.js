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
                    <img class="ms-1" src="./assets/icons/youtube.svg" alt="youtube logo" width="18" />
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
