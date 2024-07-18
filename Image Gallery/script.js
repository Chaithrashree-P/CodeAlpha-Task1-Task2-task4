const gallery = document.querySelector('.gallery');
const galleryItems = document.querySelectorAll('.gallery-item');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = galleryItems.length - 1;
    }
    updateGallery();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < galleryItems.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0
