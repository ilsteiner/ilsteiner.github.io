$(".theme-toggle .button").click( function() {
    $("body").toggleClass("light-background");
    $("body").toggleClass("dark-text");

    $(".pdf, .word, .theme-toggle").toggleClass("light-text");
    $(".theme-toggle").toggleClass("light");
    $("a.contact, .text").toggleClass("invert");
});