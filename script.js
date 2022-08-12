const modals =
  document.querySelectorAll(".project-card").previousElementSibling;
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

function openModal(modal) {
  //   modal.classList.add("visible");
  console.log("modal opening");
}

function closeModal(modal) {
  modal.classList.remove("visible");
}

console.log(modals);
