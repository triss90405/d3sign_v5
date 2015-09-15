$( document ).ready(function() {

   // Responsive navigation
   $(".mobile-nav-toggle").on("click", function() {
      $(".mobile-nav").toggleClass("mobile-nav-show");
      $(".mobile-nav a").on("click", function(){
         $(".mobile-nav").removeClass("mobile-nav-show");
      });
   });

});
