//hamburger navbar
window.onscroll = () => {
    menuIcon.classList.remove('fa-close');
    navBar.classList.remove('active');
}


let menuIcon = document.querySelector('#menuIcon');
let navBar = document.querySelector('.navbar');


menuIcon.onclick = () => {

    menuIcon.classList.toggle('fa-close');
    navBar.classList.toggle('active');

}


window.onclick = (event) => {
    if (event.target === navBar) {
        navBar.style.display = 'none'
    }
}


// slider programming
const wrapper = document.querySelector('.wrapper');
const carousel = document.querySelector('.carousel');
const arrowBtns = document.querySelectorAll('.wrapper i');
const firstCardWidth = carousel.querySelector('.card').offsetWidth;
const carouselChildrens = [...carousel.children];

let cardPerview = Math.random(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerview).reverse().forEach(card => {
    carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
});

carouselChildrens.slice(0, cardPerview).forEach(card => {
    carousel.insertAdjacentHTML('beforend', card.outerHTML);
});

let isDragging = false, startX, startScrollLeft;
arrowBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        carousel.scrollLeft += btn.id ===  'left' ? -firstCardWidth : firstCardWidth;
    })
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add('dragging');
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove('dragging');
}

const autoPlay = () => {
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}

const infiniteScroll = () => {
    if(carousel.scrollLeft === 0) {
        carousel.classList.add('no-transition');
        carousel.scrollLeft = carousel.scrollWidth - ( 2 * carousel.offsetWidth);
        carousel.classList.remove('no-transition');
    } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add('no-transition');
        carousel.scrollLeft = carousel.offsetWidth
        carousel.classList.remove('no-transition');
    }
}


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);

// accordion programming
// const accordion = document.querySelectorAll('.toggle-icon');
// const accordionBody = document.querySelectorAll('.panel');
// accordion.forEach(accordion => {
//     accordion.addEventListener('click', e => {
//         accordionBody.classList.toggle('active');
//     });
// })

// const accordion = document.getElementsByClassName('accordion');

// for (i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener('click', function() {
//         this.classList.toggle('active');
//     });
// };