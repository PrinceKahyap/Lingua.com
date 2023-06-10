$(".carousel").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 3,
            nav: false
        },
        600: {
            items: 6,
            nav: false
        },
        1000: {
            items: 9,
            nav: true
        },
    }
});