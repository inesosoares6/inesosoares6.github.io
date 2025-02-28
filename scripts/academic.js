import { studies, courses } from "./../data/academic-data.js";

const createAcademicCards = () => {
  const studiesContainer = document.querySelector(".studies");
  const coursesContainer = document.querySelector(".courses");

  studies.forEach((course) => {
    const cardHTML = `<div class="col-md-6">
          <div
            class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style="min-height: 264px"
          >
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary-emphasis"
                >${course.location}</strong
              >
              <div class="row d-flex justify-content-between">
                <div class="col-9 col-lg-11">
                  <h3 class="mb-0">${course.title}</h3>
                  <div class="mb-1 text-body-secondary">${
                    course?.date ?? ""
                  }</div>
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
                ${course?.text ?? ""}
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

          ${course?.id ? `<div id="${course.id}"></div>` : ""}
          
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
