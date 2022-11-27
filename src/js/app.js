window.addEventListener('DOMContentLoaded', () => {
  // This block will be executed once the page is loaded and ready

  let image = document.querySelector('.image');
  image.addEventListener('click', () => {
    image.style.transform = 'scale(2,2)';
  });
});
