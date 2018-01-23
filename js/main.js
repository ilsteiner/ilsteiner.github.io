$(".theme-toggle .button").click( function() {
    $("body").toggleClass("light-background");
    $("body").toggleClass("dark-text");

    $(".pdf, .word, .theme-toggle").toggleClass("light-text");
    $(".theme-toggle").toggleClass("light");
    $("a.contact, .text").toggleClass("invert");
});

$("#PDF").click( function()  {
    ga('send', {
        hitType: 'event',
        eventCategory: 'Resume',
        eventAction: 'download',
        eventLabel: 'PDF'
    });
});

$("#Word").click(function () {
    ga('send', {
        hitType: 'event',
        eventCategory: 'Resume',
        eventAction: 'download',
        eventLabel: 'Word'
    });
});

$("#Text").click(function () {
    ga('send', {
        hitType: 'event',
        eventCategory: 'Resume',
        eventAction: 'download',
        eventLabel: 'Text'
    });
});