const modalBG = document.querySelector(".modal-background");
const card = document.querySelectorAll(".card");
const imgModal = document.querySelector(".modal>img");
const modalBonjour = document.querySelector(".modal-bonjour");

modalBonjour.addEventListener("click", () => {
  modalBonjour.classList.replace("modal-bonjour", "modalBonjourDesactive");
  setTimeout(() => {
    let modalBonjourDesactive = document.querySelector(
      ".modalBonjourDesactive"
    );
    modalBonjourDesactive.style.display = "none";
  }, 2000);
});

card.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.nextElementSibling.getAttribute("src"));
    modalBG.classList.add("modal-active");
    imgModal.setAttribute("src", item.firstElementChild.getAttribute("src"));
  });
});

window.onclick = function (e) {
  if (e.target == imgModal) {
    modalBG.classList.remove("modal-active");
  }
};
