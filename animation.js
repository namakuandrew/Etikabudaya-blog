window.onload = function () {
  const headerText = document.getElementById("Header-text");

  headerText.style.animation = "fadeSlideIn 2s forwards";
};

const headerBackground = document.querySelector(".Header-background");

headerBackground.classList.add("animate-slide");
