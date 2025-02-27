const pages = ["Work", "Academic", "Travel", "Sports", "Contact"];

const socials = [
  {
    icon: "linkedin",
    link: "https://www.linkedin.com/in/inesosoares6",
  },
  {
    icon: "github",
    link: "https://github.com/inesosoares6",
  },
  {
    icon: "file-person-fill",
    link: "https://drive.google.com/drive/folders/19vQcMkU6VvguD7HfsRRtJksrcpaIfRVu?usp=sharing",
  },
];

const createNavBarCards = () => {
  const navBarContainer = document.querySelector(".navbar-nav");
  const socialsContainer = document.querySelector(".socials");

  pages.forEach((page) => {
    const cardHTML = `<li class="nav-item">
          <a class="nav-link" href="./${page.toLowerCase()}.html">${page}</a>
        </li>`;

    navBarContainer.insertAdjacentHTML("beforeend", cardHTML);
  });

  socials.forEach((social) => {
    const cardHTML = `<li class="ms-3">
          <a
            class="text-body-secondary"
            href="${social.link}"
            target="_blank"
            rel="noopener noreferrer"
            ><img
              src="./assets/icons/${social.icon}.svg"
              alt="${social.icon} icon"
              width="20"
            />
          </a>
        </li>`;

    socialsContainer.insertAdjacentHTML("beforeend", cardHTML);
  });
};

$(function () {
  $("#navbar-placeholder").load("./shared/navbar.html", () => {
    createNavBarCards();

    const currentPage = window.location.pathname.split("/").pop();

    // Match with './' prefix
    const activeLink = $(`.nav-link[href="./${currentPage}"]`);

    // Remove active class from all links
    $(".nav-link").removeClass("active");

    // Add active class to matched link
    if (activeLink.length) {
      activeLink.addClass("active");
    }
  });

  $("#footer-placeholder").load("./shared/footer.html", () => {
    document.body.innerHTML = document.body.innerHTML.replace(
      /\{year\}/g,
      new Date().getFullYear()
    );
  });
});
