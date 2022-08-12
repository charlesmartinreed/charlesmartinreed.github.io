const fadeDiv = document.getElementById("fade-div");
const projectCards = document.querySelectorAll(".project-card");
const modals = document.querySelectorAll(".project-modal");
const modalCloseBtn = document.querySelectorAll(".project-modal-close-btn");

modalCloseBtn.forEach((modalBtn) =>
  modalBtn.addEventListener("click", (e) => {
    closeModal(e.target.parentElement);
  })
);

projectCards.forEach((projectCard) => {
  projectCard.addEventListener("click", (e) => {
    openModal(projectCard);
  });
});

function openModal(card) {
  const [modal] = Array.from(modals).filter(
    (modal) =>
      modal.getAttribute("data-project-name") ===
      card.getAttribute("data-project-name")
  );
  modal.classList.add("visible");
  fadeDiv.classList.add("faded");
  fadeDiv.addEventListener("click", () => closeModal(modal));
}

function closeModal(modal) {
  modal.classList.remove("visible");
  fadeDiv.classList.remove("faded");
  fadeDiv.removeEventListener("click", null);
}
