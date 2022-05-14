function scrollEvent() {
    var $animationElements = $('.award-list>li, .container section');
    var $window = $(window);

    var winHeight = $window.height();
    var winTopPos = $window.scrollTop();
    var winBtmPos = (winTopPos + winHeight);

    $.each($animationElements, function(q) {
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
function btnTop() {
    $('.btn-top').on("click", function(){
        $('html, body').animate({scrollTop: '0'}, 300);
    });   
}
$(window).on({
    "load":function(){
        scrollEvent();
        btnTop();
    },
    "resize":function(){
        scrollEvent();
    },
    "scroll":function(){
        scrollEvent();
    }
});