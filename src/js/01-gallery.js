// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);


const gallerySecond = document.querySelector(".gallery");

function createElements(data) {
    return data.map(({ description, original, preview }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    }).join("")
}

gallerySecond.innerHTML = createElements(galleryItems);


const imgAltOptions = {
    captionsData: "alt",
    captionDelay: 250
}

const lightbox = new SimpleLightbox('.gallery a', imgAltOptions);