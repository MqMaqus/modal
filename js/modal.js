//Get modal box
const modal = document.querySelector(".modal");
//Get site button
const siteButton = document.querySelector(".siteButton");
//Get modal buttons
const modalButtons = document.querySelectorAll(".closeButton, .btn__modal");
//Get modal content
const modalContent = document.querySelector("modal__content");

//Event listener for opening click --> modal megnyitása == a modal style-ján belül a display property-t "flex"-re állítjuk ("none") helyett.
const openModal = (e) => {
  modal.style.display = "flex";
  modalContent.focus();
};
siteButton.addEventListener("click", openModal);

//Event listener for closing click --> modal bezárása == a modal style-ján belül a display property-t visszaállítjuk "none"-ra.
const closeModal = (e) => {
  modal.style.display = "none";
};
modalButtons.forEach((element) => {
  element.addEventListener("click", closeModal);
});

//Event listener for overlay -- a window-ra kell tenni, de csak arra a részére, ami csak a "modal" (és nem ami belül van)
const closeModalWindow = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
window.addEventListener("click", closeModalWindow);

//Get focus és lose focus click eseményre:
const getFocus = (e) => {
  if ((modal.style.display = "flex")) {
    modalContent.focus();
  }
};
