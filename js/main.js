$(document).ready(function(){
    
    var internal_height = $(window).innerHeight();
    var internal_width = $(window).innerWidth();
    //set header height
   if(innerWidth > 1100){
    var internal_height = $(window).innerHeight();
    $('header, header .carousel-inner').css('height', internal_height);
   }
   
   //Slider
   $('.carousel').carousel({
    interval: 5000
  })

   //services text
   var i = 1;
   var services = ['Parcels', 'Shop & Ship', 'Personal Shopper', 'Air Freight', 'Sea Freight']
   var last = services.length-1;
   $('.booking .s-up').on('click', function(){
    
    $(this).siblings('h6').text(services[i]);
    i++;
    if(i == 4){
        i = 0;   
    }
   }); 
   $('.booking .s-down').on('click', function(){
    
    $(this).siblings('h6').text(services[last]);
    last--; 
    if(last == -1){
        last = 4;
    }
   });
   
   //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
   
});