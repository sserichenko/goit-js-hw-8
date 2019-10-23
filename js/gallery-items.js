'use strict';
import images from './images.js';
console.log('images :', images);

const lightBoxWindow = document.querySelector('.lightbox');
const gallery = document.querySelector('.gallery');

const renderGallery = (array) =>{
    const frag = document.createDocumentFragment();
      array.forEach(el => {
        const li = document.createElement('li');
        li.className = "gallery__item"
        li.insertAdjacentHTML('beforeend', `<a class="gallery__link"><img class="gallery__image" src="${el.preview}" alt="${el.description}" data-source="${el.original}"></a>`);
        console.log('li :', li);
        frag.appendChild(li);
      });
    gallery.appendChild(frag);
}
renderGallery(images);

gallery.addEventListener('click', function(event){
  if(event.target.nodeName === 'IMG'){
    console.log(event.target.nodeName);
  lightBoxWindow.classList.add('is-open'); 
  const newImage = document.querySelector('.lightbox___image');
  newImage.src = event.target.dataset.source;
  newImage.alt = event.target.alt;
}
});

window.addEventListener('keydown', function(ev){
  const close = document.querySelector('.material-icons');
  if(ev.keyCode === 27 && lightBoxWindow.classList.contains('is-open')){
    lightBoxWindow.classList.toggle('is-open');  
  }
});

lightBoxWindow.addEventListener('click', function(e){

  if(e.target.nodeName === "I" || e.target.nodeName !== 'IMG'){
    console.log('e. :', e.target);
    lightBoxWindow.classList.toggle('is-open'); 
  }
})