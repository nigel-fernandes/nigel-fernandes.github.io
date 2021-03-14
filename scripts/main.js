$(function () {
    $('console-input').focus();
    var glide = new Glide('.glide', {
        startAt: 0,
        perView: 1,
        autoplay: false,
        animationDuration: 10000,
        rewindDuration: 10000,
        animationTimingFunc: "ease-in",
        keyboard: true,
        gap: 0,
        type: "carousel"
    });
    glide.mount();
    setTimeout(function () {
        glide.settings.autoplay = true;
    }, 5000);
});