const menu = document.querySelector('#menu');
const nav = document.querySelector('nav');
const links = document.querySelectorAll('nav > a'); 
const closeButton = document.querySelector('.close-button'); 
const body = document.body;

menu.addEventListener('click', () => {
    nav.classList.toggle('active'); 
    body.classList.toggle('overflow-hidden'); 
});

menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        nav.classList.remove('active');
        body.classList.remove('overflow-hidden');
    }
});

links.forEach(a => {
    a.addEventListener('click', (e) => {
        nav.classList.remove('active');
        body.classList.remove('overflow-hidden');
    });
})

closeButton.addEventListener('click', (e) => {
    nav.classList.remove('active');
    body.classList.remove('overflow-hidden');
});