const ctaBtn = document.getElementById("cta__btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close__btn");
const overlay = document.getElementById("overlay");

ctaBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
