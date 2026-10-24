const hero = document.getElementById("hero");
const mainDrink = document.getElementById("mainDrink");
const thumbs = document.querySelectorAll(".thumb");

function selectDrink(thumb) {
  if (thumb.classList.contains("active")) return;

  thumbs.forEach(t => t.classList.remove("active"));
  thumb.classList.add("active");

  // change the colour of the circle
  hero.dataset.theme = thumb.dataset.theme;

  // swap the big drink with a short fade
  mainDrink.classList.add("swap");
  setTimeout(() => {
    mainDrink.src = thumb.dataset.img;
    mainDrink.alt = thumb.getAttribute("aria-label") + " Frappuccino";
    mainDrink.onload = () => mainDrink.classList.remove("swap");
  }, 300);
}

thumbs.forEach(thumb => {
  thumb.addEventListener("click", () => selectDrink(thumb));
  thumb.addEventListener("mouseenter", () => selectDrink(thumb)); // hover also switches, like the recording
});
