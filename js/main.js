$(document).ready(function(){
    $("#clientes-slider").owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        nav:false,
        dots: true,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        responsive:{
            0:{
                items:2
            },
            768:{
                items:4
            },

            900:{
                items:6
            },

            1200:{
                items:6
            },

            1500:{
                items:6
            }
        }
    });
  });

  