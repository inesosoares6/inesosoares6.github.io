const highlights = ["marathon", "half_marathon"];

const sports = [
  {
    title: "Gym & Running",
    icon: "gym",
    sections: [
      {
        header: "Since 2024 - Running",
        bullets: [
          "Porto Marathon 2024 <ul><li>42km - 3h44 @ 5'19''/km</li></ul>",
          "Famalicão Half Marathon 2024",
          "Porto Half Marathon 2024 <ul><li>21km - 1h41 @ 4'48''/km</li></ul>",
        ],
      },
      {
        header: "Since 2016 - Gym",
        bullets: [
          "Strength & Cardio Training",
          "Favorite group classes:<ul><li>Body Pump</li><li>Body Attack</li><li>RPM</li><li>HIIT (High-Intensity Interval Training)</li></ul>",
        ],
      },
    ],
  },
  {
    title: "Volleyball",
    icon: "volleyball",
    sections: [
      {
        header: "Since 2023 - <b>Coach</b>",
        bullets: [
          "Leixões Sport Club<ul><li>Head Coach Sub-11 (2024/25)</li><li>Assistance Coach Sub-11 (2023/24)</li></ul>",
        ],
      },
      {
        header: "2006-2024 - <b>Athlete</b>",
        bullets: [
          "Leixões Sport Club (2023/2024)",
          "Ala de Nun'Álvares de Gondomar (2021-2023)",
          "Grupo Desportivo e Cultural de Gueifães (2020/2021)",
          "Ginásio Clube de Santo Tirso (2017-2019)",
          "Boavista Futebol Clube (2016/2017)",
          "Associação Académica de São Mamede (2006-2016)<ul><li>Team caption (2010-2015)</li><li>National champion twice (2012, 2013)</li></ul>",
        ],
      },
    ],
  },
  {
    title: "Karate",
    icon: "karate",
    sections: [
      {
        header: "2002-2012",
        bullets: ["Gojo-ryu | Brown belt"],
      },
    ],
    paragraph:
      "I started practicing Karate from a very young age (4 years old). This sport taught me much more than just self-defense, I learnt about respect, concentration, self-awareness, adaptability and creativity. It was not just an entrance to the world of sport, but a preparation to the future adult life that I would encounter.",
  },
];

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
