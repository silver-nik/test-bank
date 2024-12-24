new Swiper(".offer__images", {
    fadeEffect: { crossFade: true },
    effect: "fade",
    navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
    },
    breakpoints: {
        1000: {
            navigation: {
                nextEl: ".swiper-btn-next",
                prevEl: ".swiper-btn-prev",
            },
        }
    },
});