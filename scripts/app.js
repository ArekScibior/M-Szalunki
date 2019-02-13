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
    //console.log('y',y)
    //adding class header-fixed on scroll
    if (y < 35) {
        $('.main-slogan').css('margin-top', '110px')
        $(".header").removeClass('fixed-header')
        $('.nav-main a').removeClass('menu-gradient')
        $('.nav-main a').css('color', '#fff')
        $('.logo-text').css('color', '#fff')
        $('.logo-text a').removeClass('gradient-text')
        $('.logo-text a').css('color', '#fff')
    } else {
        $('.main-slogan').css('margin-top', '170px')
        $(".header").addClass('fixed-header')    
        $('.nav-main a').css('color', '#000')
        $('.logo-text a').addClass('gradient-text')
    }
});
var scroll = function(y) {
    if (y < 20) {
        $(".header").removeClass('fixed-header')
        $('.nav-main a').removeClass('menu-gradient')
        $('.nav-main a').css('color', '#fff')
        $('.logo-text').css('color', '#fff')
        $('.logo-text a').removeClass('gradient-text')
        $('.logo-text a').css('color', '#fff')
        $('.burger-nav').removeClass('gradient-text')
        $('.main-slogan').css('margin-top', '110px')
    } else {
        $(".header").addClass('fixed-header')    
        $('.burger-nav').addClass('gradient-text')
        $('.logo-text a').addClass('gradient-text')
        $('.main-slogan').css('margin-top', '210px')
    }
}
$('body').bind('touchmove', function(e) { 
    var y = $(this).scrollTop(); // Replace this with your code.
    //console.log('y', y)
    scroll(y)
});


//set scroll slide
$(".checkItButton").click(function() {
    $(".header").addClass('fixed-header')    
    $('.burger-nav').addClass('gradient-text')
    $('.logo-text a').addClass('gradient-text')
    if($( ".burger-list" ).length == 0) {
        $("html, body").animate({ scrollTop: 608 }, "slow");
    } else {
        $("html, body").animate({ scrollTop: 1200 }, "slow");
        $( ".nav-main" ).toggleClass('burger-list')
        $( ".burger-list ul li a" ).css('color', 'black')
    }
    return false;
});

$(".home").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $( ".nav-main" ).toggleClass('burger-list')
    return false;
});

$(".assortment").click(function() {
    $(".header").addClass('fixed-header')    
    $('.burger-nav').addClass('gradient-text')
    $('.logo-text a').addClass('gradient-text')
    if($( ".burger-list" ).length == 0) {
        $("html, body").animate({ scrollTop: 608 }, "slow");
    } else {
        $("html, body").animate({ scrollTop: 709 }, "slow");
        $( ".nav-main" ).toggleClass('burger-list')
        $( ".burger-list ul li a" ).css('color', 'black')
    }
    
    return false;
});
// $(".assortment").click(function() {
//     $("html, body").animate({ scrollTop: 1200 }, "slow");
//     return false;
// });

$(".price").click(function() {
    $(".header").addClass('fixed-header')    
    $('.burger-nav').addClass('gradient-text')
    $('.logo-text a').addClass('gradient-text')
    if($( ".burger-list" ).length == 0) {
        $("html, body").animate({ scrollTop: 1471 }, "slow");
    } else {
        $("html, body").animate({ scrollTop: 1653 }, "slow");
        $( ".nav-main" ).toggleClass('burger-list')
        $( ".burger-list ul li a" ).css('color', 'black')
    }
    return false;
});

$(".contact").click(function() {
    $(".header").addClass('fixed-header')    
    $('.burger-nav').addClass('gradient-text')
    $('.logo-text a').addClass('gradient-text')
    if($( ".burger-list" ).length == 0) {
        $("html, body").animate({ scrollTop: 2154 }, "slow");
    } else {
        $("html, body").animate({ scrollTop: 2339 }, "slow");
        $( ".nav-main" ).toggleClass('burger-list')
        $( ".burger-list ul li a" ).css('color', 'black')
    }
    return false;
});

// end of set scroll slide

//toogle burger-nav
$( ".burger-nav" ).click(function() {
    $( ".nav-main" ).toggleClass('burger-list', 'slow')
    $( ".burger-list ul li a" ).css('color', 'black')
}) 