 $(document).ready(function() {
    /* Handle back-to-top button */
    $(window).scroll(function () {

        if ($(this).scrollTop() != 0) {
            $('#back-to-top').fadeIn();
        } else { // scrollTop = 0   
            $('#back-to-top').fadeOut(); 
        }
    }); 

}) // document ready
 