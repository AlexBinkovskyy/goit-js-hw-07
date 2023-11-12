import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const key = [];
galleryItems.map((item) => {
  key.push(`<li class="gallery__item"><img class="gallery__image" src="${item.preview}" alt="${item.description}"></li>`);
});
galleryList.insertAdjacentHTML("afterbegin", key.join(""));
