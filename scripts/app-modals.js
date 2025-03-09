import { apps, modals } from "../data/portfolio-data.js";
import { getIconImages, showModal } from "../helpers/utils.js";

const ids = apps.map((app) => app.id);

const fillContent = (id) => {
  const title = document.querySelector(".modal-title");
  title.innerHTML = modals[id].title;

  const appIcon = document.querySelector(".app-icon");
  appIcon.setAttribute(
    "src",
    `./assets/portfolio/${modals[id].appIcon}-icon.png`
  );

  const icons = document.querySelector(".header-icons");
  icons.innerHTML = getIconImages(modals[id].icons);

  const content = document.querySelector(".context-text");
  content.textContent = modals[id].content;

  const requirements = document.querySelector(".requirements-list");
  requirements.innerHTML = modals[id].requirements
    .map((req) => `<li>${req}</li>`)
    .join("");

  const technologies = document.querySelector(".technologies-list");
  technologies.innerHTML = modals[id].technologies
    .map((req) => `<li>${req}</li>`)
    .join("");

  const repo = document.querySelector(".github-link");
  repo.setAttribute(
    "href",
    `https://github.com/inesosoares6/${modals[id].repo}`
  );

  const video = document.querySelector(".video-demo");
  const textCol = document.querySelector(".text-col");
  const textRow = document.querySelector(".text-row");
  if (modals[id]?.video) {
    textCol.setAttribute("class", "text-col col col-lg-8");
    textRow.setAttribute("class", "text-row row row-cols-1 row-cols-lg-2");
    video.setAttribute(
      "class",
      "video-demo col col-lg-4 d-flex justify-content-center"
    );
    if (modals[id].video.split(".").at(-1) === "mp4") {
      video.innerHTML = `<video
                  class="video-demo image-crop"
                  src="./assets/portfolio/videos/${modals[id].video}"
                  loop
                  alt="App demo video"
                ></video>`;
      addVideoEvents();
    } else {
      video.innerHTML = ` <img
                  class="image-crop"
                  src="./assets/portfolio/videos/${modals[id].link}"
                  alt="App demo gif"
                />`;
    }
  } else {
    textCol.setAttribute("class", "text-col");
    textRow.setAttribute("class", "text-row");
    video.setAttribute("class", "video-demo");
    video.innerHTML = "";
  }
};

const addVideoEvents = () => {
  // Initialize modal with options
  const modalContainer = document.getElementById("portfolioModal");
  const video = modalContainer.querySelector("video");

  if (!video) return;

  // Add event listeners to the modal element itself
  modalContainer.addEventListener("show.bs.modal", () => {
    // Play video when modal starts showing
    video.play();
  });

  // Add hide event listener
  modalContainer.addEventListener("hide.bs.modal", () => {
    video.pause();
  });
};

$(document).ready(() => {
  ids.forEach((id) => {
    document
      .querySelector(`.card-${id}`)
      .addEventListener("click", () =>
        showModal("portfolioModal", () => fillContent(id))
      );
  });
});
