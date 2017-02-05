$(document).ready(function() {
    
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $('[id="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 1000);
        return false;
    });
               
               
}) // document ready
