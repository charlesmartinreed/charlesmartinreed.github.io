const fadeDiv = document.getElementById("fade-div");
const projectCards = document.querySelectorAll(".project-card");
const modals = document.querySelectorAll(".project-modal");
const modalCloseBtn = document.querySelectorAll(".project-modal-close-btn");

// modals.forEach((modal) => {
//   modal.addEventListener("click", (e) => {
//     // openModal(e);
//     console.log(e.target);
//   });
// });

modalCloseBtn.forEach((modalBtn) =>
  modalBtn.addEventListener("click", (e) => {
    closeModal(e.target.parentElement);
  })
);

projectCards.forEach((projectCard) => {
  projectCard.addEventListener("click", (e) => {
    // if (e.target.children !== 0) {
    //   console.log(e.target);
    // }
    // console.log(e.target);
    openModal(projectCard);
  });
});

function openModal(card) {
  const [modal] = Array.from(modals).filter(
    (modal) =>
      modal.getAttribute("data-project-name") ===
      card.getAttribute("data-project-name")
  );
  //   modal.classList.add("visible");
  modal.classList.add("visible");
  fadeDiv.classList.add("faded");
  //   console.log("modal opening");
}

function closeModal(modal) {
  modal.classList.remove("visible");
  fadeDiv.classList.remove("faded");
}

console.log(projectCards);
