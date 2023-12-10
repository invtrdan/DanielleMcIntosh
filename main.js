const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

const typed = new Typed('.multiple', {
    strings: ["Software Engineer", "Data Scientist", "Coffee Lover", "Jamaican Innovator"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});