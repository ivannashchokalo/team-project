(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelectorAll("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);

  refs.closeModalBtn.forEach(btn => {
    btn.addEventListener("click", toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle("subscription-open");
  }
})();
