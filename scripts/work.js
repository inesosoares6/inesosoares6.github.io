const jobs = [
  {
    title: "Web Developer",
    company: "Kaizen Gaming",
    date: "2023 - Present",
    images: { small: "kaizen-small.jpg", big: "kaizen.png" },
    text: [
      {
        text: "Software Engineer - Frontend Web Developer",
        children: [
          {
            text: "My Account Project (with markets all over the world):",
            children: [
              {
                text: "Migrate the project from MVC to VueJS 3",
              },
              {
                text: "Redesign website pages from Figma designs",
              },
              {
                text: "Implement new features and write corresponding unit tests",
              },
              {
                text: "Work with different markets",
              },
              {
                text: "Write relevant documentation",
              },
            ],
          },
        ],
      },
      {
        text: "Agile Methodologies - Scrum",
        children: [
          {
            text: "Two weeks sprints",
          },
          {
            text: "Scrum ceremonies: planning, daily, refinement, review and retrospective meetings",
          },
        ],
      },
    ],
    tags: [
      "VueJS",
      "VueX",
      "Vitest",
      "Tailwind",
      "Figma",
      "JIRA",
      "Confluence",
      "draw.io",
      "Miro",
    ],
  },
  {
    title: "Software Engineer",
    company: "CEiiA",
    date: "2021 - 2023",
    images: { small: "ceiia-small.png", big: "ceiia.png" },
    text: [
      {
        text: "Autonomous Systems Developer: worked on the project of developing an Autonomous Surface Vehicle (ASV), especially the software part of the boat.",
        children: [
          {
            text: "Path Planning & Machine Learning",
            children: [
              {
                text: "Developed from scratch the path planning algorithm for the vehicle to avoid obstacles using machine learning. Resulted in a paper publication in <b>ICARSC 2022</b>.",
              },
            ],
          },
          {
            text: "Mission Control Interface",
            children: [
              {
                text: "Using VueJS 3, I worked on the development of the interface that controlled the vehicle. Its functionalities was to plan missions, watch the vehicle live camera, control the vehicle actuators, etc.",
              },
            ],
          },
        ],
      },
      {
        text: "Our team participated in the <b>Oceanology International 2022 (ExCel, London)</b>, showcasing the functionalities and potential of our ASV.",
      },
    ],
    tags: ["VueJS", "VueX", "VuetifyJS", "Python", "JIRA", "draw.io", "Miro"],
  },
];

const publications = [
  {
    title:
      "Obstacle Avoiding Path Planning Pipeline for Marine Surface Vessels",
    text: 'I. Soares, S. Sá, J. Morais and J. Fortuna, "Obstacle Avoiding Path Planning Pipeline for Marine Surface Vessels," 2022 IEEE ICARSC, 2022, pp. 161-166.',
    link: "https://doi.org/10.1109/ICARSC55462.2022.9784810",
    icon: "ieee",
  },
  {
    title: "Programming Robots by Demonstration Using Augmented Reality",
    text: "I. Soares, M. Petry, and A. P. Moreira, “Programming Robots by Demonstration Using Augmented Reality,” Sensors, vol. 21, no. 17, p. 5976, Sep. 2021.",
    link: "https://doi.org/10.3390/s21175976",
    icon: "sensors",
  },
  {
    title: "Accuracy and Repeatability Tests on HoloLens 2 and HTC Vive",
    text: "I. Soares, R. B. Sousa, M. Petry, and A. P. Moreira, “Accuracy and Repeatability Tests on HoloLens 2 and HTC Vive,” MTI, vol. 5, no. 8, p. 47, Aug. 2021.",
    link: "https://doi.org/10.3390/mti5080047",
    icon: "mti",
  },
];

const getBadges = (names) =>
  names
    .map(
      (name) =>
        `<span
              class="badge d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill"
            >
              <img
                class="mx-1"
                width="16"
                src="./assets/icons/${name.toLowerCase().replace(".", "")}.svg"
                alt="${name} icon"
              />${name}
            </span>`
    )
    .join("");

const formatItemHTML = (item) => `
    <li>${item.text}${
  item?.children
    ? `
      <ul>
        ${item.children.map((child) => formatItemHTML(child)).join("")}
      </ul>
    `
    : ""
}</li>`;

const getDescription = (description) =>
  description.map((el) => formatItemHTML(el)).join("");

const createWorkCards = () => {
  const jobsContainer = document.querySelector(".jobs");
  const publicationsContainer = document.querySelector(".publications");

  jobs.forEach((job, index) => {
    const cardHTML = `<div class="row featurette">
        <div class="col-md-7 ${index % 2 ? "order-md-2" : ""}">
          <div class="row">
            <div class="col">
              <h2 class="featurette-heading fw-normal lh-1">
                ${job.title} <br />
                <span class="text-body-secondary">@ ${job.company}</span>
              </h2>
              <p class="lead">${job.date}</p>
            </div>
            <div class="col small-logo">
              <img
                src="./assets/${job.images.small}"
                alt="${job.company} logo"
                width="200px"
                class="logos"
              />
            </div>
          </div>

          <ul>
            ${getDescription(job.text)}
          </ul>

          <div class="d-flex flex-wrap gap-2 justify-content-start py-4">
            ${getBadges(job.tags)}
          </div>
        </div>
        <div class="col-md-5 ${index % 2 ? "order-md-1" : ""} work-logo">
          <img
            src="./assets/${job.images.big}"
            alt="${job.company} logo"
            width="400px"
            class="logos"
          />
        </div>
      </div>

      <hr class="featurette-divider" />`;

    jobsContainer.insertAdjacentHTML("beforeend", cardHTML);
  });

  publications.forEach((publication) => {
    const cardHTML = `
          <div class="col-lg-4">
            <img
              src="./assets/${publication.icon}.png"
              class="rounded-circle mb-2"
              alt="${publication.icon} icon"
              width="140px"
            />
            <h2 class="fw-normal">
              ${publication.title}
            </h2>
            <p>
              ${publication.text}
            </p>
            <p>
              <a
                class="btn btn-outline-light"
                href="${publication.link}"
                target="_blank"
                rel="noopener noreferrer"
                >View »</a
              >
            </p>
          </div>`;

    publicationsContainer.insertAdjacentHTML("beforeend", cardHTML);
  });
};

document.addEventListener("DOMContentLoaded", createWorkCards);
