jQuery(document).ready(function($){

  
  function smartColumns() {
     
     var w_h = $(window).height();  
     var w_w = $(window).width();

    if(w_w > 991){
     $('.offscreen_menu').removeClass('active');
     $('.offscreen_inner').removeClass('active');
    }
        
  }
  
  smartColumns();
  
  $(window).resize(function () {
      smartColumns();
  }); 
 
 
  $('.menu_toggle').on("click", function(event){
     $('.hide_menu').toggle();
     $('.offscreen_menu').toggleClass('active');
     $('.offscreen_inner').toggleClass('active');
  }); 
  $('.menu_close, .hide_menu').on("click", function(event){
     $('.hide_menu').toggle();
     $('.offscreen_menu').toggleClass('active');
     $('.offscreen_inner').toggleClass('active');
  });
  
  $('.offscreen_menu .menu-item-has-children > a').each(function(){
    $(this).after('<div class="sub_toggle"><i class="fa fa-chevron-down"></i></div>');
  });
  
  $('.sub_toggle').on("click", function(event){
     event.preventDefault();
     $(this).parent().toggleClass('act');
     $(this).next().slideToggle(); 
  }); 

  if($('.slider').length > 0){
    imagesLoaded( $('.slider'), function( instance ) {
      $('.slider').owlCarousel({ 
        items : 1,    
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [1023,1],
        itemsTablet: [767,1],
        itemsMobile : [479,1],
        navigation : true,
        pagination : true,
        autoHeight : true,
        autoPlay : true,
        stopOnHover : true,
        navigationText : ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        afterInit: function(){$('.slider').removeClass('hidden');}
      });
    });
  }

 
});