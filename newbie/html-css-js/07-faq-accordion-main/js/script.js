const buttons = document.querySelectorAll(".accordion-button-container button");

buttons.forEach((button) => {
  button.addEventListener("click", openAccordionOnlick);
});

function openAccordionOnlick(e) {
  e.target.parentNode.parentNode.dataset.accordion = "open";

  alternateAccordion(e.target);
}

function alternateAccordion(clickedElement) {
  const accordionsContainer = document.querySelectorAll(
    ".accordion-button-container",
  );

  accordionsContainer.forEach((container) => {
    if (
      container.dataset.accordion ===
      clickedElement.parentNode.parentNode.dataset.accordion
    ) {
      if (container !== clickedElement.parentNode.parentNode) {
        container.dataset.accordion = "close";
      }
    }
  });
}
