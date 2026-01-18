(() => {
  const refs = {
    form: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelectorAll("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };
    
  refs.form.addEventListener("submit", handleOpenModal);
  refs.closeModalBtn.forEach(btn => btn.addEventListener('click', handleCloseModal));
  refs.modal.addEventListener('click', handleBackdropClick);

  function handleOpenModal(e) {
    e.preventDefault()
    refs.modal.classList.add("subscription-open");
    window.addEventListener('keydown', handleEscPress);
    document.body.style.overflow = "hidden";
  }

  function handleCloseModal() {
    refs.modal.classList.remove("subscription-open");
    window.removeEventListener('keydown', handleEscPress);
    document.body.style.overflow = "";
  }

  function handleEscPress(e) {
    if (e.code !== 'Escape') return;
    handleCloseModal();
  }

  function handleBackdropClick(e) {
    if (e.target !== e.currentTarget) return;
    handleCloseModal();
  }
})();
