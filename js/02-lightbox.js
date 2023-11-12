import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
galleryList.addEventListener("click", onClick);

const key = [];
galleryItems.map(({ preview, original, description }) => {
  key.push(
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
    </a>
 </li>`
  );
});

galleryList.insertAdjacentHTML("afterbegin", key.join(""));

function onClick(event) {
  event.preventDefault();
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
