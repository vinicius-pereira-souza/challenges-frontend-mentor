const buttons = document.querySelectorAll(".accordion-button-container button");
const accordionsContainer = document.querySelectorAll(
  ".accordion-button-container",
);

function openAccordionOnlick(e) {
  this.parentNode.dataset.accordion = "open";

  alternateAccordion(this);
}

function alternateAccordion(buttonSelected) {
  accordionsContainer.forEach((container) => {
    if (container.dataset.accordion === "open") {
      if (container !== buttonSelected.parentNode) {
        container.dataset.accordion = "close";
      }
    }
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", openAccordionOnlick);
});
