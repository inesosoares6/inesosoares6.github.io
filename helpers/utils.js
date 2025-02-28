export const getIconImages = (icons) =>
  icons
    .map(
      (icon) =>
        `<img src="./assets/icons/${icon}.svg" class="me-2" alt="${icon} logo" width="25" />`
    )
    .join("");