import { trips } from "./../data/travel-data.js";

const createTravelCards = () => {
  const container = document.querySelector(".album .container .row");

  trips.forEach((country) => {
    const cardHTML = `
                <div class="col">
                    <div class="card shadow-sm">
                        <img src="./assets/travel/${country.image}" alt="${
      country.country
    } photo" loading="lazy" 
        style="max-height: 200px">
                        <div class="card-body">
                            <h2 class="text-center">${country.country}</h2>
                            <p class="card-text text-center">${
                              country.places
                            }</p>
                            <div class="d-flex justify-content-between align-items-center">
                              ${
                                country?.id
                                  ? `
                                <button
                                type="button"
                                  class="details-${country.id} btn btn-sm btn-outline-secondary"
                                >Details</button>
                              `
                                  : ""
                              }
                              <div id="${country.id}"></div>
                              <small class="text-body-secondary">${
                                country.years
                              }</small>
                            </div>
                        </div>
                    </div>
                </div>
            `;

    container.insertAdjacentHTML("beforeend", cardHTML);

    if (country?.id) {
      $(`#${country.id}`).load(`./modals/travel/travel-modal-template.html`);
    }
  });
};

document.addEventListener("DOMContentLoaded", createTravelCards);
