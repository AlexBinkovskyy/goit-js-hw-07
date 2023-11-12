import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
galleryList.addEventListener("click", onClick);

const key = [];
galleryItems.map((item) => {
  key.push(
    `<li class="gallery__item"><img class="gallery__image" data-big-img="${item.original}" src="${item.preview}" alt="${item.description}"></li>`
  );
});

galleryList.insertAdjacentHTML("afterbegin", key.join(""));

function onClick(event) {
  if (event.target !== event.currentTarget) {
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.bigImg}" width="800" height="600">`);

    instance.show();

    window.addEventListener("keydown", closeModal);
    const modal = document.querySelector(".basicLightbox");
    modal.addEventListener("click", closeModal);

    function closeModal(event) {
      if (event.code === "Escape" || event.currentTarget === modal) {
        window.removeEventListener("keydown", closeModal);
        modal.removeEventListener("click", closeModal);
        instance.close();
      }
    }
  }
}
