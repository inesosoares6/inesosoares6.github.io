import { highlights, sports } from "./../data/sports-data.js";

const createSportsCards = () => {
  const highlightsContainer = document.querySelector(".highlights");
  const sportsContainer = document.querySelector(".sports");

  highlights.forEach((highlight) => {
    const cardHTML = `<img src="./assets/medals/${highlight}.svg" alt="${highlight.replace(
      "_",
      " "
    )} medal" />`;

    highlightsContainer.insertAdjacentHTML("beforeend", cardHTML);
  });

  sports.forEach((sport) => {
    const cardHTML = `<div class="feature col">
          <div
            class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
          >
            <img
              src="./assets/icons/${sport.icon}.svg"
              alt="${sport.icon} icon"
              width="40px"
            />
          </div>
          <h3 class="fs-2 text-body-emphasis">${sport.title}</h3>
          ${sport.sections
            .map(
              (section) => `<p class="lead">${section.header}</p>
          <ul>
            ${section.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>`
            )
            .join("")}
          
          ${
            sport?.paragraph
              ? `<p class="paragraph">
            ${sport.paragraph}
          </p>`
              : ""
          }
        </div>`;

    sportsContainer.insertAdjacentHTML("beforeend", cardHTML);
  });
};

document.addEventListener("DOMContentLoaded", createSportsCards);
