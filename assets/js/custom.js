$(function() {
    //caches a jQuery object containing the header element
    var header = $("nav");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 70) {
            header.removeClass('background-trans').addClass("background-default");
        } else {
            header.removeClass("background-default").addClass('background-trans');
        }
    });
});

$("#open-btn").click(function(){
    $("#body").toggleClass("overflow-none");
});

$("#close-btn").click(function(){
    $("#body").removeClass("overflow-none");
});

$(function() {
    function checkElementLocation() {
        var $window = $(window);
        var bottom_of_window = $window.scrollTop() + $window.height();
    
        $('.fade-elem').each(function(i) {
        var $that = $(this);
        var bottom_of_object = $that.position().top + $that.outerHeight();
    
        //if element is in viewport, add the animate class
        if (bottom_of_window > bottom_of_object) {
            $(this).addClass('fade-in');
        }
        });
    }
    // if in viewport, show the animation
    checkElementLocation();
    
    $(window).on('scroll', function() {
        checkElementLocation();
    });
});