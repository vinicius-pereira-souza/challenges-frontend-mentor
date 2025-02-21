const button = document.querySelector("button");
const cite = document.querySelector("q");
const id = document.querySelector(".adviceID span");

button.addEventListener("click", async (e) => {
  getRandomAdvice();
});

function getRandomAdvice() {
  const randomNumber = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
  cite.innerText = "Loading...";
  fetch(`https://api.adviceslip.com/advice/${randomNumber}`)
    .then((r) => r.json())
    .then((obj) => {
      id.innerText = obj.slip.id;
      cite.innerText = obj.slip.advice;
    });
}
