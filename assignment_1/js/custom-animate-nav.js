 $(document).ready(function() {
     $(window).scroll(function () {
                
        var windowHeight = $(window).height();
        var scrollValue = $(this).scrollTop();

        if ($(this).scrollTop() != 0 && $(this).scrollTop() >= windowHeight - 500) {
  
            updateNavBlue();

        } else { // scrollTop = 0   

            updateNavTransparent();
        }
    }); 

}) // document ready
 
function updateNavBlue() {
    $('.navbar-default').stop().animate({ backgroundColor: 'rgba(3,169,244, 0.9)'}, 500);
} 

function updateNavTransparent() {
    $('.navbar-default').stop().animate({ backgroundColor : 'rgba(0,0,0, 0.1)'}, 500);
}