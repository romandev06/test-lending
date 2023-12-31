const swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    speed: 2000,
    delay: 1500,
    parallax: true,
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
    enabled: true,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: false,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});

