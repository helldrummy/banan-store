$(document).ready(function () {
    function sliderInitialize() {
        $('.ware-block__image-container').slick({
            infinite: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        });
    }

    if ($(window).width() <= 768) {
        sliderInitialize();
    }

    var sizeItem = $('.ware-block__size-item');
    var sizeText = $('.ware-block__size-text');

    $(sizeItem).on('click', function () {
        $(sizeItem).hide();
        $(this).show().addClass('chosen');
        $(sizeText).hide();
    });

    $('.ware-block__button').on('click', function () {
        if ($(sizeItem).hasClass('chosen')) {
            $('.fade').show();
        }
        else {
            $(sizeText).addClass('ware-block__size-text_alert');
        }
    });

    $('.pop-up__close').on('click', function () {
        $('.fade').hide();
    })

});