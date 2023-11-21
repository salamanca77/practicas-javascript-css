const header = document.querySelector("#idHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.backgroundColor = "green";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
