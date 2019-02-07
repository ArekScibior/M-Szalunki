(function($) {

    $.fn.visible = function(partial) {
            
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };
})(jQuery);


$(document).scroll(function() {
    var y = $(this).scrollTop();
    //adding class header-fixed on scroll
    if (y < 35) {
        $(".header").removeClass('fixed-header')
        $('.nav-main a').removeClass('menu-gradient')
        $('.nav-main a').css('color', '#fff')
        $('.logo-text').css('color', '#fff')
        $('.logo-text a').removeClass('gradient-text')
        $('.logo-text a').css('color', '#fff')
    } else {
        $(".header").addClass('fixed-header')    
        $('.nav-main a').css('color', '#000')
        $('.logo-text a').addClass('gradient-text')
    }
});


//set scroll slide
$(".checkItButton").click(function() {
    $("html, body").animate({ scrollTop: 720 }, "slow");
    return false;
});

$(".home").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

$(".assortment").click(function() {
    $("html, body").animate({ scrollTop: 608 }, "slow");
    return false;
});
// $(".assortment").click(function() {
//     $("html, body").animate({ scrollTop: 1200 }, "slow");
//     return false;
// });

$(".price").click(function() {
    $("html, body").animate({ scrollTop: 1471 }, "slow");
    return false;
});

$(".contact").click(function() {
    $("html, body").animate({ scrollTop: 2233 }, "slow");
    return false;
});

// end of set scroll slide
