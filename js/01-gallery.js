import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');
// const visible = false;

function createGalleryItems(galleryItems) { 
    return galleryItems.map(({ description, original, preview }) =>
    {
       return `<div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
            <img 
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
            </a>
            </div>` 
        
    }).join('');     
}



gallery.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));


gallery.addEventListener('click', onModal)

let instance = '';

function onModal(event) { 
    event.preventDefault();
    instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    `);
    instance.show();
    document.addEventListener('keydown', closeModal);
    
}

function closeModal({ code }) { 
    if (code !== "Escape" && instance.visible()) { 
         return;
     }
    instance.close()
    document.removeEventListener('keydown', closeModal);
}




