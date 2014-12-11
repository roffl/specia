$(document).ready(function() {
    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        css3: true,
        scrollOverflow: true,
        sectionSelector: '.slide'
    });
});