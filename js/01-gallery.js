import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);


function createGalleryItemsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return  `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
})
.join("");

}

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  const isGalleryImageEl = evt.target.classList.contains("gallery__image");

  if (!isGalleryImageEl) {
    return;
  }
  const urlBigImageEl = evt.target.getAttribute("data-source");
  const instance = basicLightbox.create(`
    <img  src="${urlBigImageEl}"  >
`)

  instance.show()

  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
     window.removeEventListener("keydown", onEscKeyPress,); 
    }
}

  window.addEventListener("keydown", onEscKeyPress);
}





