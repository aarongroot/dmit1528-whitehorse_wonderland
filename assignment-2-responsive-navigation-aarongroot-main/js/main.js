const btn = document.querySelector('.toggle-button');

btn.addEventListener('click', (evt) => {
    document.querySelector('nav').classList.toggle('show-nav');
});