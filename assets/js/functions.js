$( document ).ready(function() {

   // Responsive navigation
   $(".mobile-nav-toggle").on("click", function() {
      $(".mobile-nav").toggleClass("mobile-nav-show");
      $(".mobile-nav a").on("click", function(){
         $(".mobile-nav").removeClass("mobile-nav-show");
      });
   });

   // Wiggly Services icons
   setInterval(function(){
      var random = Math.floor(Math.random()*4);
      $(".service-icon").removeClass("wiggle");
      $(".service-icon").eq(random).addClass("wiggle");
   }, 3000);

   // Fade in work items
   $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if(scroll > 750) {
         $("section.work .item").each(function(i){
            var $item = $(this);
            setTimeout(function(){
               $item.addClass("item-fade-in");
            }, i*200);
         });
      }
   });

});
