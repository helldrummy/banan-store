function blocksSwitch() {
    if (!($('.offer-block__switch-item').hasClass('.offer-block__switch-item_active'))) {
        $('.offer-block__switch-item').toggleClass('offer-block__switch-item_active');
        $('.block-container').toggleClass('display-inline-block');
        $('.offer-block__wares').toggleClass('display-inline-block');
    }
}

$('.offer-block__switch-item').on('click', function () {
    blocksSwitch();
});

$(".block-container__button").on('click', function () {
    console.log('asd');
    $($(this).data('edit')).show();
});

$('.cell__button').on('click', function () {
    $('.fade').show();
});