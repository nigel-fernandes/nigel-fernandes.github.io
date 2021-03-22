$(function () {
    $('console-input').focus();
    var glide = new Glide('.glide', {
        startAt: 0,
        perView: 1,
        autoplay: 10000,
        animationDuration: 3000,
        //rewindDuration: 10000,
        animationTimingFunc: "ease",
        gap: 0,
        type: "carousel",
        touchAngle : 0
    });
    glide.mount();
    //setTimeout(function () {
    //    glide.settings.autoplay = true;
    //}, 5000);
});