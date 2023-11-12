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
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.bigImg}" width="800" height="600">
`);
  instance.show();
}
