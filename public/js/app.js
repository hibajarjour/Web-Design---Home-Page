 $(".slick-slider").slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     dots: true,
     infinite: true,
     prevArrow: false,
     nextArrow: false,
     adaptiveHeight: true,
     mobileFirst: true,
     adaptiveWidth: true
 });

 var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
 var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
     this.addEventListener('hide.bs.tooltip', function () {
         new bootstrap.Tooltip(tooltipTriggerEl)
     })
     return new bootstrap.Tooltip(tooltipTriggerEl)
 });


 $('.multi-item-slider').slick({
     dots: false,
     infinite: false,
     speed: 300,
     slidesToShow: 4,
     slidesToScroll: 1,
     mobileFirst: true,
     responsive: [
         {
             breakpoint: 1024,
             settings: {
                 slidesToShow: 4,
                 slidesToScroll: 1
             }
                            }
         , {
             breakpoint: 600,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1
             }
                            },
         {
             breakpoint: 480,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
                            }, {
             breakpoint: 200,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
             }
                            }
     ]
 });
