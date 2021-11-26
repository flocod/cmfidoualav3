
// activate loader animation on load 

$(window).bind("beforeunload", function () {
    $("body").css("overflow", "hidden");
    $(".loader").css("display", "flex");
  });

  
  $(window).on("load", function () {
    $(".loader").css("display", "none");
  
    $("body").css("overflow-y", "auto");
  });
//   end script


$('.book_box').on('click',function(){
    window.location.replace('view.html');
});
$('.categorie_box .box').on('click',function(){
    window.location.replace('categorie.html');
});



// categories slider
$(document).ready(function () {
    categorie_owl= $('.categorie_owl');
    categorie_owl.owlCarousel({
        loop:true,
        nav:false,
        margin:15,
        center:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
              
            },
           
            500:{
                items:2,
             
            },
            654:{
                items:3,
             
            },
            1046:{
                items:4,
            },
            1254:{
                items:5,
            }
        }
    });


    $(".categorie_owl_btn_left").click(function () {
        categorie_owl.trigger("prev.owl.carousel");
      });
    
      $(".categorie_owl_btn_right").click(function () {
        categorie_owl.trigger("next.owl.carousel");
      });
});
// Books slider
$(document).ready(function () {
    books_owl= $('.books_owl');
    books_owl.owlCarousel({
        loop:true,
        nav:false,
        margin:15,
        center:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                center:false,
              
            },
            534:{
                items:2,
             
            },
            929:{
                items:3,
            },
            1200:{
                items:4,
            }
        }
    });


    $(".books_owl_btn_left").click(function () {
        books_owl.trigger("prev.owl.carousel");
      });
    
      $(".books_owl_btn_right").click(function () {
        books_owl.trigger("next.owl.carousel");
      });
});

// load more animation
$(".load_more").on('click',function(){
    $(this).find('.ico').toggleClass("loading");
});