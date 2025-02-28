import { contacts } from "./../data/contact-data.js";

const createContactCards = () => {
  const contactsContainer = document.querySelector(".contacts");

  contacts.forEach((contact) => {
    const cardHTML = `<a
          class="col d-flex flex-column justify-content-center align-items-center link-no-underline"
          href="${contact.link}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./assets/icons/${contact.icon}.svg"
            class="ms-1"
            alt="${contact.icon} icon"
            width="150"
          />
          <p class="mt-4">${contact.label}</p>
        </a>`;

    contactsContainer.insertAdjacentHTML("beforeend", cardHTML);
  });
};

document.addEventListener("DOMContentLoaded", createContactCards);
