const modals = [
  "libraryModal",
  "shoppingModal",
  "workoutsModal",
  "bucketListModal",
];

$(document).ready(() => {
  modals.forEach((id) => {
    // Initialize modal with options
    const modalContainer = document.querySelector(`#${id}`);
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
  });
});
