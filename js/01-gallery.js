import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class = "gallery__item">

    <a class = "gallery__link" href="${original}">
    <img class = "gallery__image" src="${preview}" data-source = "${original}" alt="${description}">
   </a>
    </li>`
    )
    .join("");
}

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

list.addEventListener("click", handlerClick);

function handlerClick(evt) {
  evt.preventDefault();

  if (evt.target === evt.currentTarget) {
    return;
  }

  const imageLarge = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    
    <img src="${imageLarge}">
  
`);

  instance.show();
}
