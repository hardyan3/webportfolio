const humberger = document.querySelector('.header .nav-bar .nav-list .humberger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

humberger.addEventListener('click',()=>{
    humberger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})