
function checkboxActivation(checkboxElement, checkboxActiveClass) {
    $(checkboxElement).on('click', function () {
        $(this).toggleClass(checkboxActiveClass)
    });
}


function checkBoxIsActive(checkElement, ElementActiveClass, hidingElement, showElement) {
    if ($(checkElement).hasClass(ElementActiveClass)) {
        $(hidingElement).hide();
        $(showElement).show();
    }
}

checkBoxIsActive('.offer-block__place_checkbox', 'offer-block__place_checkbox_active', '.offer-block__input_toggle', '.offer-block__input_hide');
checkboxActivation('.offer-block__place_checkbox', 'offer-block__place_checkbox_active');