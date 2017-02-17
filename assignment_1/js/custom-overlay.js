$(document).ready(function() {
                         
    var overlay = document.getElementById('overlay');
    var closeObj = document.getElementById("overlay-close");

    // When the user clicks on close, close the overlay
    closeObj.onclick = function() {
        overlay.style.display = "none";
    }

    overlay.onclick = function() {
        overlay.style.display = "none";
    }


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == overlay) {
            overlay.style.display = "none";
        }
    }


}) // document ready