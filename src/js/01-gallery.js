// import { galleryItems } from './gallery-items.js';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import SimpleLightbox from 'simplelightbox'; // Зверніть увагу, що імпортується SimpleLightbox

// console.log(galleryItems);

// const galleryList = document.querySelector('.gallery');

// const markup = galleryItems.map(el => {
//   return `<li class="gallery__item">
//   <a class="gallery__link" href="${el.original}">
//      <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
//   </a>
// </li>`;
// }).join('\n');

// galleryList.innerHTML = markup;

// let lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });


// Add imports above this line
import simpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line



const refs = {
    galleryList: document.querySelector('.gallery'),
};



function galleryMarkup(array) {
  const markup = array
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join('');

  return markup;
}

function renderGalleryList(galleryArr) {
  const markup = galleryMarkup(galleryArr);
    refs.galleryList.insertAdjacentHTML('beforeend', markup);
}
renderGalleryList(galleryItems);


new simpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250, });