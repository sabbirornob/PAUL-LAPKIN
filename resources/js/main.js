$(document).ready(function(){
    
    // MIXITUP
    var mixer = mixitup('.grid-work-container');
    
    // WOW
    
    new WOW().init();
    
    // SCROLLIFY
    
    $.scrollify({
        section : ".scrollify",
        setHeights: false,
        updateHash: false,
    });
    
    // SCROLLUP
    
    $.scrollUp({
        scrollText: '',
    });
    
    // Smooth Scroll

        $('.menu-item a, .scroll-down a').on('click', function(){
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);

            return false;
        });
    
});

    // HAMBURGER MENU
    
    function openMenu() {
        document.getElementById('navbar').style.height = "100%";
    }
    
    function closeMenu() {
        document.getElementById('navbar').style.height = "0%";
    }