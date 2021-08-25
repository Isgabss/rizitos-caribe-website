document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){
  
  document.getElementById("move-content").classList.toggle("move-container-all");
  document.getElementById("show-menu").classList.toggle("show");
}




      // SCROLL REVEAL

ScrollReveal().reveal('.category');
ScrollReveal().reveal('.banner', {delay: 500});
ScrollReveal().reveal('.subtitle', {delay: 500});
ScrollReveal().reveal('.container', {delay: 500});
ScrollReveal().reveal('.category', {delay: 500});
ScrollReveal().reveal('.title-container', {delay: 500});
ScrollReveal().reveal('.img-fondo', {delay: 500});
ScrollReveal().reveal('.container-cards', {delay: 500});
// ScrollReveal().reveal('.container-footer-all', {delay: 500});




        // SCROLL SMOOTH

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });