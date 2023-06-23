document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        pagination: false,
        perPage: 2,
        gap: "0.75rem",
        padding: "1.5rem",
        arrows: false,

        mediaQuery: 'min',
        breakpoints: {
            990: {
                arrows: true,
                gap: "2rem",
                padding: "5.5rem",
            },
            1200: {
                arrows: true,
                gap: "2rem",
                padding: "6.5rem",
            },
            1400: {
                arrows: true,
                gap: "2rem",
                padding: "7.5rem",
            },
        }

    });
    splide.mount();
});