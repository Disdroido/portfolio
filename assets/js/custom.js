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