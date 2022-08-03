// Owl Carosel
$(function () {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 6,
        margin: 10,
        loop: true,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 6,
                nav: true,
                loop: false
            }
        }
    });
});