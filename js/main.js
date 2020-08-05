$(document).ready(function() {
	$('.acc__link').on('click', function(){
    $('.acc__info').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
  });
  $('.link__phone').click(function(){
    $('.phone__bg-up, .telegram__bg-down, .acc__img-phone, .acc__arrow-phone').toggleClass('active');
    $('.designers__bg-up, .acc__img-designers, .acc__arrow-designers, .playlist__bg-up, .acc__img-playlist, .acc__arrow-playlist').removeClass('active');
  })
  $('.link__designers').click(function(){
    $('.designers__bg-up, .acc__img-designers, .acc__arrow-designers').toggleClass('active');
    $('.phone__bg-up, .telegram__bg-down, .acc__img-phone, .acc__arrow-phone, .playlist__bg-up, .acc__img-playlist, .acc__arrow-playlist').removeClass('active');
  })
  $('.link__playlist').click(function(){
    $('.playlist__bg-up, .acc__img-playlist, .acc__arrow-playlist').toggleClass('active');
    $('.phone__bg-up, .telegram__bg-down, .acc__img-phone, .acc__arrow-phone, .designers__bg-up, .acc__img-designers, .acc__arrow-designers').removeClass('active');
  })

  // слайдер
  $('.analysis__slider').slick({
    arrows: false,
    slidesToShow: 1,
    infinite: false,
    variableWidth: true,
    touchThreshold: 7,
    waitForAnimate: false,
  }); 
  $('.analysis__card-end-button').on('click', function(){
    $('.acc__info').not($(this).next()).slideUp(500);
    $('.link__phone').next().slideToggle(500);
  });
  $('.analysis__card-end-button').click(function(){
    $('.phone__bg-up, .telegram__bg-down, .acc__img-phone, .acc__arrow-phone').toggleClass('active');
    $('.designers__bg-up, .acc__img-designers, .acc__arrow-designers, .playlist__bg-up, .acc__img-playlist, .acc__arrow-playlist').removeClass('active');
  })
    // плавный скролл до якорей
  $("body").on('click', '[href*="#"]', function(e){ // при клике на элементы body содержащие в себе "href=#"  =>
    var fixed_offset = 100; 
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000); // пользователя переведет на указанный в href якорь со скоростью 1000ms и с отступом 100px сверху
    e.preventDefault();
  });
  // figma
  function figma(){
    $('.figma').toggleClass('active');
  }
  setTimeout(figma, 1000);
  $('.figma-close, .figma__link-close').click(function(e) {
    $('.figma').removeClass('active');
  })

  // modal-info
  $('.analysis__title').click(function(){
    $('.info-modal').toggleClass('visible');
    $('.analysis__info').toggleClass('active');
    $('.analysis__info-close').toggleClass('visible');
    
  })
  // $(document).mouseup(function(e){
  //   var modalInfo = $('.info-modal');
  //   if (!modalInfo.is(e.target)
  //     && modalInfo.has(e.target).length === 0) {
  //       modalInfo.removeClass('visible');
  //     }

  // })
});