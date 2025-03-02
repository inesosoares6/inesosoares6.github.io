import { jobs, publications } from "./../data/work-data.js";

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
                src="./assets/work/${job.images.small}"
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
            src="./assets/work/${job.images.big}"
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
              src="./assets/work/${publication.icon}.png"
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
