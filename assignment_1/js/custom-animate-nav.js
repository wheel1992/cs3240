 $(document).ready(function() {
     
     detectNavToggleEvent();
     
     $(window).scroll(function () {
                
        var windowHeight = $(window).height();
        var scrollValue = $(this).scrollTop();

        if ($(this).scrollTop() != 0 && $(this).scrollTop() >= windowHeight - 500) {
  
            //updateNavBlue();

        } else { // scrollTop = 0   

            //updateNavTransparent();
        }
    }); 

}) // document ready
 
function detectNavToggleEvent() {
    
    $('#bs-example-navbar-collapse-1').on('show.bs.collapse', function () {
        // detects open of navbar-collapse
        updateNavBlue();
    });
    
    $('#bs-example-navbar-collapse-1').on('hide.bs.collapse', function () {
        // detects close of navbar-collapse
        updateNavTransparent();
    });
     
}
 

function updateNavBlue() {
    $('.navbar-default').stop().animate({ backgroundColor: 'rgba(3, 169, 244, 1.0)'}, 500);
} 

function updateNavTransparent() {
    $('.navbar-default').stop().animate({ backgroundColor : 'rgba(50, 50, 50, 0.8)'}, 500); // rgba(0,0,0, 0.1)
}