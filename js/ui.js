function scrollEvent() {
    var $animationElements = $('.award-list>li, .container section');
    var $window = $(window);

    var winHeight = $window.height();
    var winTopPos = $window.scrollTop();
    var winBtmPos = (winTopPos + winHeight);

    $.each($animationElements, function() {
        var $element = $(this);
        var elementHeight = $element.outerHeight();
        var elementTopPos = $element.offset().top;
        var elementBtmPos = (elementTopPos + elementHeight);

        if ((elementBtmPos >= winTopPos) && (elementTopPos <= winBtmPos)) {
            $element.addClass('active');
        } else {
            $element.removeClass('active');
        }
    });
}
function pageTop() {
    var btnTop = $('.btn-top');

    btnTop.addClass('move');
    btnTop.on("click", function(){
        $('html, body').animate({scrollTop: '0'}, 300);
    });
}
$(window).on({
    "load":function(){
        scrollEvent();
        pageTop();
    },
    "resize":function(){
        scrollEvent();
    },
    "scroll":function(){
        scrollEvent();
        if ($(window).scrollTop() == 0) {
            $('.btn-top').addClass('move');
        } else {
            $('.btn-top').removeClass('move');
        }
    }
});