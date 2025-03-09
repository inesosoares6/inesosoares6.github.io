export const getIconImages = (icons) =>
  icons
    .map(
      (icon) =>
        `<img src="./assets/icons/${icon}.svg" class="me-2" alt="${icon} logo" width="25" />`
    )
    .join("");

export const loadHTML = async (fileName) => {
  try {
    const response = await fetch(`./modals/travel/content/${fileName}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const htmlContent = await response.text();
    return htmlContent;
  } catch (error) {
    console.error("Error loading HTML:", error);
    return null;
  }
};


export const showModal = (id, callback) => {
  const genericModal = document.getElementById(id);

  // Fill modal with correct content
  callback();

  // Show the modal
  const modalInstance = new bootstrap.Modal(genericModal);
  modalInstance.show();
};