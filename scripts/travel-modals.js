import { trips, modals } from "../data/travel-data.js";
import { loadHTML, showModal } from "./../helpers/utils.js";

const fillContent = (id) => {
  const title = document.querySelector(".modal-title");
  title.innerHTML = modals[id].title;

  const countryFlag = document.querySelector(".country-flag");
  countryFlag.setAttribute("src", `./assets/travel/flags/${modals[id].flag}`);

  const tabs = document.querySelector(".nav-pills");
  tabs.innerHTML = "";
  modals[id].tabs.forEach((tab) => {
    tabs.innerHTML += `<li class="nav-item">
                <a class="nav-link" href="#${tab.toLowerCase()}">${tab}</a>
              </li>`;
  });

  loadHTML(`${modals[id].content}.html`).then((html) => {
    if (html) {
      document.querySelector(".travel-content").innerHTML = html;
    }
  });
};

const ids = trips.map((trip) => trip?.id).filter((value) => value);

$(document).ready(() => {
  ids.forEach((id) => {
    document
      .querySelector(`.details-${id}`)
      .addEventListener("click", () =>
        showModal("travelModal", () => fillContent(id))
      );
  });
});
