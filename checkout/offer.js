function checkBoxIsActive(checkElement, elementActiveClass, hidingElement, showElement) {
    if ($(checkElement).hasClass(elementActiveClass)) {
        $(hidingElement).toggleClass('display-none');
        $(showElement).toggleClass('display-none');
    }
}

function checkboxActivation(checkboxElement, checkboxActiveClass) {
    $(checkboxElement).on('click', function () {
        $(this).toggleClass(checkboxActiveClass);
        checkBoxIsActive('.offer-block__place_checkbox', 'active', '.offer-block__input_shipping', '.offer-block__input_address');
    });
}

checkboxActivation('.offer-block__place_checkbox', 'active');

function blockSwitch(element1, element2, element3, toggledClass) {
    event.preventDefault();
    event.stopPropagation();
    $(element1).hide();
    $(element2).css('display', 'inline-block');
    $(element3).toggleClass(toggledClass)
}

$('.offer-block__button').on('click', function () {
    blockSwitch('.offer-block__toggle', '.offer-block__wares', '.offer-block__switch-item', 'offer-block__switch-item_active');
});

$('.cell-button_back').on('click', function () {
    blockSwitch('.offer-block__wares', '.offer-block__toggle', '.offer-block__switch-item', 'offer-block__switch-item_active');
});
