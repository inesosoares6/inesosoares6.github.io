import { websites, apps } from "./../data/portfolio-data.js";
import { getIconImages } from "./../helpers/utils.js";

const createPortfolioCards = () => {
  const websitesContainer = document.querySelector(".websites");
  const appsContainer = document.querySelector(".apps");

  websites.forEach((website) => {
    const websiteCardHTML = `
        <div class="col portfolio-col">
          <a
            class="card card-cover portfolio-card h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            href="${website.link}"
            target="_blank"
            rel="noopener noreferrer"
            style="
              text-decoration: none;
              color: inherit;
              background-image: url('./assets/${website.image}');
              cursor: pointer;
            "
          >
            <div
              class="d-flex flex-column h-100 p-4 pb-3 text-white text-shadow-1"
            >
              <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">${
                website.name
              }</h3>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                ${getIconImages(website.icons)}
                </li>
              </ul>
            </div>
          </a>
        </div>
      `;

    websitesContainer.insertAdjacentHTML("beforeend", websiteCardHTML);
  });

  apps.forEach((app) => {
    const appCardHTML = `
        <div class="col portfolio-col">
          <div
            class="card-${
              app.id
            } card card-cover portfolio-card h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style="
              background-image: url('./assets/${app.image}');
              cursor: pointer;
            "
          >
            <div
              class="d-flex flex-column h-100 p-4 pb-3 text-white text-shadow-1"
            >
              <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                ${app.name}
              </h3>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                ${getIconImages(app.icons)}
                </li>
                <li class="d-flex align-items-center">
                ${getIconImages(["github"])}
                </li>
              </ul>
            </div>
          </div>
          <div id="${app.id}"></div>
        </div>`;

    appsContainer.insertAdjacentHTML("beforeend", appCardHTML);

    $(`#${app.id}`).load(`./modals/portfolio/${app.page}.html`);
  });
};

document.addEventListener("DOMContentLoaded", createPortfolioCards);
