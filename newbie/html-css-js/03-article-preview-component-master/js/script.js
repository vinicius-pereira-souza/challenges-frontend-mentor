const btn = document.querySelector(".icon");
const redes = document.querySelector(".redesShare");

btn.addEventListener("click", (e) => {
  btn.classList.toggle("active");
  redes.classList.toggle("active");
});
