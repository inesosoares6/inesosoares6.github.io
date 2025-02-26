$(function () {
  $("#navbar-placeholder").load("./shared/navbar.html", function () {
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
});

$(function () {
  $("#footer-placeholder").load("./shared/footer.html");
});
