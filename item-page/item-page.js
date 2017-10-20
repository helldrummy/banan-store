$(document).ready(function(){
    function sliderInitialize () {
            $('.ware-block__image-container').slick({
                infinite: true,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            });
    }

    if($(window).width() === 768){
        sliderInitialize();
    }
});