////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Slick initialization
$(document).ready(function () {
    // Initialize slick in header
    $('.header').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000
                }
            }
        ]
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Expandable menu script
    $(".bar").on('click', function () {
        $(this).toggleClass("bar_active");
        $('.menu-collapsed').toggleClass("menu-expanded");
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $("#dropdown").on("click", function (e) {
        e.preventDefault();
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(this).children("ul").slideUp("fast");
        } else {
            $(this).addClass("open");
            $(this).children("ul").slideDown("fast");
        }
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Hide block on click
    $('.offer-block__delete-button').on('click', function () {
        $($(this).closest('.offer-block__ware-item')).hide();
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Hide pop-up on click
    $('.pop-up__close').on('click', function () {
        $('.fade').hide();
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $('.support-info__header, .info__header').on('click', function () {
        $($(this).siblings()).toggleClass('display-block');
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Add animation class on scroll
    var infoBlockOffsetTop = $('.ware-block__info-block').offset().top;

    function elementAnimation(elementClassName, animationClass, elementInitialTop) {
        var element = $(elementClassName);

        if (!element.hasClass(animationClass)) {
            var isHigher = $(window).scrollTop() > element.offset().top - 55;

            if (isHigher) {
                element.addClass(animationClass);
            }
        } else if (element.offset().top < elementInitialTop) {
            element.removeClass(animationClass);
        }
    }

    //animation class on scroll initialization
    if ($(window).width() >= 768 || $(window).height() >= 570) {
        $(window).on('scroll', function () {
            elementAnimation('.ware-block__info-block', 'absolute-top', infoBlockOffsetTop);
        });
    }
    //animation class on scroll initialization
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //popup script
    function popupShow(popupTrigger, popupEl, showClass) {
        $(popupTrigger).on('click', function () {
            $(popupEl).toggleClass(showClass);
        })
    }

    function popupHide(popupCloseButton, popupEl, showClass) {
        $(popupCloseButton).on('click', function () {
            $(popupEl).toggleClass(showClass);
        })
    }

    //popup script

    //popup script initialization
    popupShow('.ware-block__size-popup', '.overlay', 'block');
    popupHide('.close-btn', '.overlay', 'block');
//popup script initialization
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});
//YouTube background video script
var Page = {
    checkMobile: function () {
        if ($(window).width() <= 800 && $(window).height() <= 800) {
            return true;
        } else {
            return false;
        }
    },
    checkScreenSize: function (size) {
        if ($(window).width() <= size) {
            return true;
        }
        else {
            return false;
        }
    },
    Youtube: {
        getQuality: function (width) {
            if (width > 1920) {
                q = 'medium';
            } else if (width < 1920 && width >= 1280) {
                q = 'medium';
            } else if (width < 1280 && width >= 853) {
                q = 'medium';
            } else if (width < 853 && width >= 640) {
                q = 'medium';
            } else if (width < 640 && width >= 480) {
                q = 'medium';
            } else if (width < 480) {
                q = 'small';
            }
            return q;
        },
        ajaxVideoBlockLoad: function (loop, elid, width, height) {
            player = new YT.Player(elid, {
                height: Page.videoResize(width, height, loop) * height / width,
                width: Page.videoResize(width, height, '#' + elid),
                videoId: loop,
                playerVars: {
                    autoplay: 0,
                    autohide: 1,
                    loop: 1,
                    controls: 0,
                    modestbranding: 0,
                    cc_load_policy: 0,
                    iv_load_policy: 3,
                    fs: 0,
                    rel: 0
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }
    },
    videoResize: function (width, height, video) {
        if ($(window).width() / $(window).height() > width / height) {
            if ($(window).width > width) {
                $(video).css({'margin-top': -height * ($(window).width() / width - 1) / 2 + 'px'});
            }
            else {
                $(video).css({'margin-top': -(height * ($(window).width() / width) - $(window).height()) / 2 + 'px'});
            }
            return $(window).width();
        } else {
            if ($(window).height() > height) {
                $(video).css({'margin-left': -width * ($(window).height() / height - 1) / 2 + 'px'});
            }
            else {
                $(video).css({'margin-left': -(width * ($(window).height() / height) - $(window).width()) / 2 + 'px'});
            }
            return width * ($(window).height() / height);
        }
    },
    videoSound: function (trigger, video) {
        $(trigger).on('click', function () {
            console.log('mute');
            $(video).muted();
        })
    },
    init: function () {
        Page.videoSound('.main-block', '#player');
    }
};
//run youtube player
if (Page.checkMobile()) {
    $('#player').remove();
} else {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;
}
function onYouTubePlayerAPIReady() {
    Page.Youtube.ajaxVideoBlockLoad('Un3i-HCG2w0', 'player', 1920, 1080);
}

//on player ready
function onPlayerReady(event) {
    console.log(event);
    console.log(event.target);
    event.target.setPlaybackQuality(Page.Youtube.getQuality($(window).width()));
    //event.target.mute();
    event.target.playVideo();
}

//on play end
function onPlayerStateChange(event) {
    if (event.data == 0) {
        //event.target.mute();
        event.target.playVideo();
    }
}

Page.init();