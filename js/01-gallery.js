import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery')

function createMarkup(arr){

    return arr.map(({preview, original, description}) => `<li class = "gallery__item">

    <a href="${preview}">
    <img src="${original}" alt="${description}" class = "gallery__image">
   </a>
    </li>`).join('')
}

list.insertAdjacentHTML('beforeend', createMarkup(galleryItems))

createMarkup(galleryItems)
