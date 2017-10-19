function checkBoxIsActive(checkElement, elementActiveClass, hidingElement, showElement) {
    if ($(checkElement).hasClass(elementActiveClass)) {
        $(hidingElement).toggleClass('display-none');
        $(showElement).toggleClass('display-none');
    }
}

function checkboxActivation(checkboxElement, checkboxActiveClass) {
    $(checkboxElement).on('click', function () {
        $(this).toggleClass(checkboxActiveClass);
        checkBoxIsActive(
            '.offer-block__place_checkbox',
            'active',
            '.offer-block__input_shipping',
            '.offer-block__input_address'
        );
    });
}

checkboxActivation('.offer-block__place_checkbox', 'active');

function blockSwitch() {
    $('offer-block__button').on('click', function () {
        event.preventDefault();
        event.stopPropagation();
        $('.offer-block__toggle').hide();
        $('.offer-block__wares').show();
    })
}