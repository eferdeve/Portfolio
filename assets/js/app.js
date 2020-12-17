// Navigation
document.addEventListener('DOMContentLoaded', function () {
    let demo = document.querySelector(".card-menu");
    let numOfSections = [...document.querySelectorAll(".card-menu-section")].length;
    let menuActive = document.querySelector(".card-menu.menu-active");
    [...document.querySelectorAll(".card-menu-menu-btn")].forEach(elem => {
        elem.addEventListener("click", function (e) {
            demo.classList.add("menu-active");
            e.stopImmediatePropagation();
        }, false);
    });
    [...document.querySelectorAll(".card-menu-close-menu")].forEach(elem => {
        elem.addEventListener("click", function () {
            demo.classList.remove("menu-active");
        }, false);
    });

    let clickHandler = function (e) {
        let section = e.currentTarget;
        let index = +section.dataset.section;
        demo.querySelectorAll(".card-menu-section.active").forEach(elem => elem.classList.remove("active"));
        demo.querySelectorAll(".card-menu-section.inactive").forEach(elem => elem.classList.remove("inactive"));
        section.classList.add("active");
        demo.classList.remove("menu-active");
        for (let i = index + 1; i <= numOfSections; i++) {
            demo.querySelector(".card-menu-section-" + i).classList.add("inactive");
        }

    };

    [...document.querySelectorAll(".card-menu-section")].forEach(elem =>
        elem.addEventListener("click", function (e) {
            if (e.currentTarget.parentNode.classList.contains('menu-active')) clickHandler(e)
        }, false));

});

//Swiperjs initialisation
var mySwiper = new Swiper('.swiper-container', {
    effect: 'flip',
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

//Appel des objets
let home = new Presentation();
let works = new Works();
let skills = new Skills();
let contactCv = new Contact();


