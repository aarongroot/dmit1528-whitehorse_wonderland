
const btn = document.querySelector('.toggle-btn');

btn.addEventListener('click', (evt) => {
    document.querySelector('nav').classList.toggle('show-nav');
});

const loadMore = document.querySelector('.load-more');
loadMore.addEventListener('click', (evt) => {
    document.querySelector('.events-flex').classList.toggle('show-events');
    document.querySelector('.load-more').classList.toggle('hide-btn');
});






