const hamburger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar-nav');
const links = document.querySelectorAll('.navbar-nav li');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('open');
    hamburger.classList.toggle('active');
    links.forEach(link => link.classList.toggle('fade'));
});

function openModule() {
    navbar.classList.remove('open');
    hamburger.classList.remove('active');
    links.forEach( link => link.classList.remove('fade'));
}