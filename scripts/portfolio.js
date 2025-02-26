const websites = [
  {
    name: "TL Nutrition",
    image: "nutri.png",
    link: "https://www.teresalemosnutricao.pt/",
    icons: ["vuejs", "vuetifyjs", "firebase"],
  },
  {
    name: "Invictus Clinic",
    image: "invictus.png",
    link: "https://www.invictusclinic.pt/",
    icons: ["vuejs", "vuetifyjs"],
  },
];

const apps = [
  {
    name: "Book Library",
    image: "library.png",
    target: "libraryModal",
    id: "libraryModalContent",
    page: "bookLibrary",
    icons: ["vuejs", "vuetifyjs", "firebase"],
  },
  {
    name: "Shopping List",
    image: "shopping.png",
    target: "shoppingModal",
    id: "shoppingModalContent",
    page: "shoppingList",
    icons: ["vuejs", "quasar", "firebase"],
  },
  {
    name: "Workouts App",
    image: "workout.png",
    target: "workoutsModal",
    id: "workoutsModalContent",
    page: "workoutsApp",
    icons: ["vuejs", "vuetifyjs"],
  },
  {
    name: "Bucket List App",
    image: "travel.png",
    target: "bucketListModal",
    id: "bucketListModalContent",
    page: "bucketList",
    icons: ["kotlin"],
  },
  {
    name: "Progr(Ch)ess",
    image: "chess.png",
    target: "chessModal",
    id: "chessModalContent",
    page: "chessGame",
    icons: ["unity", "cardboard"],
  },
  {
    name: "Electric Charging",
    image: "electric.png",
    target: "electricModal",
    id: "electricModalContent",
    page: "electricCarsApp",
    icons: ["kotlin", "firebase"],
  },
];

const getIconImages = (icons) =>
  icons
    .map(
      (icon) =>
        `<img src="./assets/${icon}.svg" alt="${icon} logo" width="25" />`
    )
    .join("");

const createPortfolioCards = () => {
  const websitesContainer = document.querySelector(".container .websites");
  const appsContainer = document.querySelector(".container .apps");

  websites.forEach((website) => {
    const cardHTML = `
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

    websitesContainer.insertAdjacentHTML("beforeend", cardHTML);
  });

  apps.forEach((app) => {
    const cardHTML = `
        <div class="col portfolio-col">
          <div
            class="card card-cover portfolio-card h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style="
              background-image: url('./assets/${app.image}');
              cursor: pointer;
            "
            data-bs-toggle="modal"
            data-bs-target="#${app.target}"
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

    appsContainer.insertAdjacentHTML("beforeend", cardHTML);

    $(`#${app.id}`).load(`./modals/portfolio/${app.page}.html`);
  });
};

document.addEventListener("DOMContentLoaded", createPortfolioCards);
