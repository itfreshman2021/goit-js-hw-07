import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);


function createGalleryItemsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return  `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      title="${description}"
    />
  </a>
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
    let gallery = new SimpleLightbox('.gallery a');
    gallery.on('show.simplelightbox', function () {
       

});
    
    gallery.on('error.simplelightbox', function (e) {
    
	console.log(e); 
});   
}