const hamburger = document.querySelector('.hamburger');
const linksRight = document.querySelector('.links-right');

hamburger.addEventListener('click', () => {
    linksRight.classList.toggle('activee');
});