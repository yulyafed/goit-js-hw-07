import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

const itemMarkup = createGalleryItemMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryItemMarkup(item) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
        </a>
    </div>`;
        })
        .join('');
}

function onGalleryContainerClick(e) {

    e.preventDefault();

    window.addEventListener('keydown', onEscKeyPress);

    const swatchEl = e.target;
    const isItemSwatchEl = swatchEl.classList.contains('gallery__image');

    if (!isItemSwatchEl) {
        return ;
    };
        const instance = basicLightbox.create(`
    <div class="modal">
        <img src = "${swatchEl.dataset.source}"></img>
    </div>
`)
    instance.show();

    function onEscKeyPress(e) {
        if (e.code === 'Escape') {
            instance.close();
        };

    };
}




