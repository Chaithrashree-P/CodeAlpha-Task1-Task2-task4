// Get all images and the wrapper elements
const images = document.querySelectorAll('.img-gallery img');
const imageWrapper = document.querySelector('.imageWrapper');
const wrapperImage = imageWrapper.querySelector('img');
const closeButton = imageWrapper.querySelector('span');

// Add click event listener to each image
images.forEach(img => {
  img.addEventListener('click', () => {
    wrapperImage.src = img.src; // Set the source of the wrapper image to the clicked image
    imageWrapper.classList.add('active'); // Add active class to display the wrapper
  });
});

// Add click event listener to the close button to hide the wrapper
closeButton.addEventListener('click', () => {
  imageWrapper.classList.remove('active');
});
