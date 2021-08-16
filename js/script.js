$(function(){

  $('.faq-list-item').click(function(){
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.slideUp();
    }else{
      $answer.addClass('open');
      $answer.slideDown();
    }
  });

      // swiper
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
          reverseDirection: false,
        
        },

        loop: true,
        initialSlide: 1,
        slidesPerView: 4,
        spaceBetween: 56,
        centeredSlides: true,
        breakpoints: {
          1025:{
            slidesPerView: 4.5,
            spaceBetween: 56,
          },
          600:{
            slidesPerView: 2.5,
          },
          320:{
            slidesPerView: 1.5,
            spaceBetween: 25,
          }

        }
      })

// aos //
AOS.init({
  duration: 1000
});
 

$('a[href^="#contact"]').click(function(){
  var href = $(this).attr('href');
  var target = $(href == '#' || href == "" ? 'html' : href);
  var position = target.offset().top;
  var speed = 500 ;
  $("html,body").animate({
    scrollTop: position
  },speed, "swing");
  return false;
});


 $(document).ready(function(){
   const $submitBtn = $('#js-submit')
    if(
      $('#form input[type="text"]').val() !== ""&&
      $('#form input[type="email"]').val() !== ""&&
      $('#form input[type="message"').val() !== ""&&
      $('#form input[type="checkbox"').val() !== ""&&
      $('#form #privacyCheck').prop('checked') === true
    ){
      $submitBtn.prop('disabled', false);
    } else {
      $submitBtn.prop('disabled', true);
    }
  
 });

 $(document).ready(function() {

        $('#form').submit(function (event) {
          var formData = $('#form').serialize();
          $.ajax({
            url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd2da9vYjwrFE9K8Nx6onzDaM_ExLOfrfDia7YP82jGctIlkw/formResponse",
            data: formData,
            type: "POST",
            dataType: "xml",
            statusCode: {
              0: function () {
                $(".end-message").slideDown();
                $(".submit-btn").fadeOut();
                // window.location.href = "thanks.html";
              },
              200: function () {
                $(".false-message").slideDown();
              }
            }
          });
          event.preventDefault();
        });





   });


 $('.humburger').click(function(){
   $(this).toggleClass('active');
   if($(this).hasClass('active')){
     $('.humburger-nav').addClass('active');
   } else {
     $('.humburger-nav').removeClass('active');
   }
 });


  
});

 

