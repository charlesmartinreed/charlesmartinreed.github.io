const fadeDiv = document.getElementById("fade-div");
const projectCards = document.querySelectorAll(".project-card");
const modals = document.querySelectorAll(".project-modal");
const contactModalBtn = document.querySelector("#contact-pane-btn");
const contactModal = document.querySelector("#contact-modal");
const modalCloseBtn = document.querySelectorAll(".project-modal-close-btn");

contactModalBtn.addEventListener("click", (e) => {
  e.preventDefault();

  contactModal.classList.toggle("visible");
  fadeDiv.classList.toggle("faded");

  if (fadeDiv.classList.contains("faded")) {
    fadeDiv.addEventListener("click", () => closeModal(contactModal));
  }
});

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
  // disable the contact modal button to prevent displaying atop this modal
  contactModalBtn.disabled = true;

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
  contactModalBtn.disabled = false;
}
