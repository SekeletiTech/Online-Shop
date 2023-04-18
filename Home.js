const hamburger=document.querySelector('.hamburger');
const navLink=document.querySelector('.lists');
hamburger.addEventListener('click', () => {
    navLink.classList.toggle('hide');
});