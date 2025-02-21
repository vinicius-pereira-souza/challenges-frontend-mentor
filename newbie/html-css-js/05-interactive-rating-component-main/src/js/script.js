const optButtons = document.querySelectorAll("li button");
const submitButtton = document.querySelector("#submit");
const container = document.querySelector(".container");
const spanButtonSelected = document.querySelector("p > span");

function handleClickSubmit(e) {
  optButtons.forEach((button) => {
    if (!button.classList.contains("selected")) {
      return;
    } else {
      spanButtonSelected.textContent = button.textContent;
      container.dataset.selected = "true";
    }
  });
}

function selectButton(e) {
  e.target.classList.add("selected");
  toggleSelectedButton(e.target);
}

function toggleSelectedButton(buttonSelected) {
  optButtons.forEach((button) => {
    if (button.classList.contains("selected")) {
      if (button !== buttonSelected) {
        button.classList.remove("selected");
      }
    }
  });
}

submitButtton.addEventListener("click", handleClickSubmit);
optButtons.forEach((button) => {
  button.addEventListener("click", selectButton);
});
