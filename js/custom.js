
$(document).ready(function(){
  $('.banner-carousel').slick({
    arrows:true,
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
  
 $(document).ready(function ($) {
            $('.packageSlider').owlCarousel({
                items: 3,
                loop: true,
                autoplay: true,
                nav: true,
                dots: true,
                margin: 10,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    }

                }
            });
   });

$(document).ready(function(){
$('.card-header').click(function() {
  $(this).next().collapse('toggle');
  $(this).children().toggleClass('well-card-ico-chnge');
  $('.card-header').not(this).next().collapse('hide');
  $('.card-header').not(this).children().removeClass('well-card-ico-chnge');
});

});

 $(document).ready(function ($) {
            $('.ourTestimonialSlider').owlCarousel({
                items: 3,
                loop: true,
                autoplay: true,
                nav: false,
                dots: true,
                margin: 10,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }

                }
            });
        });

//Videos popup jQuery
        $(document).ready(function () {
            var popupvideos = $('.popup-videos');
            if (popupvideos.length) {
                $('.popup-videos').magnificPopup({
                    disableOn: 10,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: true,
                    fixedContentPos: false
                });
            }
			
			});

//faq script
		$(document).ready(function () {
			var acc = document.getElementsByClassName("accordion1");
			var i;
			
			for (i = 0; i < acc.length; i++) {
			  acc[i].addEventListener("click", function() {
			    this.classList.toggle("active");
			    var panel = this.nextElementSibling;
			    if (panel.style.maxHeight) {
			      panel.style.maxHeight = null;
			    } else {
			      panel.style.maxHeight = panel.scrollHeight + "px";
			    } 
			  });
			}
});

//$(document).scroll(function() {
//  var y = $(this).scrollTop();
//  if (y > 500) {
//    $('.mob-footer').fadeIn(1000);
//  } else {
//    $('.mob-footer').fadeOut(1000);
//  }
//});