
const btn = document.querySelector('.toggle-btn');

btn.addEventListener('click', (evt) => {
    document.querySelector('nav').classList.toggle('show-nav');
});