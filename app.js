const ham = document.querySelector('.ham')
const hamBurger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const crossImg = document.querySelector('.close')


ham.addEventListener('click', ()=> {
    navMenu.classList.toggle('active')
    hamBurger.classList.toggle('hamburger-close')
    crossImg.classList.toggle('close-active')
   })

