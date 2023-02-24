import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createGalleryItems(galleryItems) { 
    return galleryItems.map(({ description, original, preview }) =>
    {
       return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>` 
        
    }).join('');     
}



gallery.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay:250 });