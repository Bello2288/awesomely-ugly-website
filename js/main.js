// (function() {

//     'use strict';

const button = document.querySelector('button');
const image = document.querySelector('.ugly-picture');

button.addEventListener('click', changeImage);
// image.style.backgroundImage = "url('images/up2.jpeg')"


function changeImage() {
  if (image.style.backgroundImage.value === "url('images/up1.jpeg')") {
    image.style.backgroundImage = "url('images/up2.jpeg')";
  } else {
    image.style.backgroundImage = "url('images/up1.jpeg')"
  }
}

// })();