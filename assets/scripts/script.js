window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})

function toggleMenu() {
    var menuToogle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToogle.classList.toggle('active');
    menu.classList.toggle('active');

}