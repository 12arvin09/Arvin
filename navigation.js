const hamburger = document.querySelector('.hamburger');
const linksRight = document.querySelector('.links-right');

hamburger.addEventListener('click', () => {
    linksRight.classList.toggle('activee');
    hamburger.classList.toggle('active');
});

/* A <button> nested in an <a> doesn't always carry the tap through to the link
   on mobile, so navigate explicitly and close the menu on the way out. */
linksRight.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href) {
            e.preventDefault();
            window.location.href = href;
        }
    });
});
