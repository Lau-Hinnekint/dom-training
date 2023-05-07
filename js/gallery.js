const imgThumbs = document.querySelectorAll('#gallery-thumbs li img');
const galTtl = document.getElementById('gallery-title');
const galTxt = document.getElementById('gallery-description');
const imgMain = document.getElementById('gallery-picture');


imgThumbs.forEach(function (img) {
    img.addEventListener('mouseover', function () {
        imgMain.src = img.src;
        imgMain.alt = img.alt;
        galTtl.innerText = img.dataset.title;
        galTxt.innerText = img.dataset.description;
    });
});
