let header = document.querySelector(".header");
let button = document.querySelector(".header__menu-button");
let list = document.querySelector(".header__menu-list");
let hasChild = document.querySelectorAll(".has-child");
let submenu = document.querySelectorAll(".submenu");
let body = document.querySelector("body");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 100);
});
button.addEventListener("click", () => {
  list.classList.toggle("show");
  $(".submenu").removeClass("active");
  body.classList.toggle("overflow-hidden");
});
hasChild.forEach(function (item) {
  item.addEventListener("click", function () {
    $(".has-child").not(this).children(".submenu").removeClass("active");
    this.lastElementChild.classList.toggle("active");
  });
});

$(".owl-slider").owlCarousel({
  loop: true,
  items: 1,
  dots: false,
  nav: false,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>",
  ],
  margin: 0,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    1200: {
      nav: true,
    },
  },
});
$(".owl-testimonials").owlCarousel({
  loop: true,
  items: 1,
  dots: false,
  nav: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
});
