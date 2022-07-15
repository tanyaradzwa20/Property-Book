



 $('.currency-container').hide();
$(".dollar").click(function(){
    $(".currency-container").slideToggle();
  });

$('.showcase .item').hover(
       function(){ $(this).addClass('hover') },
      //  function(){ $(this).removeClass('hover')}
)




$('.carousel').carousel({
    interval: false,
  });



document.onscroll = function() {
        if (window.innerHeight + window.scrollY > document.body.clientHeight) {
          $(".fixed-icon").show();
        }
        else{
          $(".fixed-icon").hide();
        }
    }

$(".fixed-icon").click(function() {
    $('html,body').animate({
        scrollTop: $("#nav").offset().top},
        'slow');
});

$('.carousel').carousel();

var owl= $('.owl-carousel');

var carouselOption={
   items:5,
    loop:true,
    margin:10,
    autoplay:false,
    autoplayTimeout:400000,
       nav:true,
    navigation:true,
    navText: ['<span class="fa fa-arrow-left"></span>','<span class="fa fa-arrow-right"></span>'],
    autoplayHoverPause:true,
    responsive:{
        0:{
         
          //  items:1,
          //   nav:true,
          //   navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'], 
        },
        768:{
            
        },
        1440:{
           
         
        },
        576:{
            // items:1,
            // nav:true,
            // 
        }
       
    }

}
owl.owlCarousel(carouselOption);

$(".btnn").click(function() {
  $(".drop-menu").toggle();  
});
