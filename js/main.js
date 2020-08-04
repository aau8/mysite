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
  $(document).mouseup(function(e){
    var modalInfo = $('.info-modal');
    if (!modalInfo.is(e.target)
      && modalInfo.has(e.target).length === 0) {
        modalInfo.removeClass('visible');
      }
    $('.analysis__title').click(function(){
      $('.info-modal').toggleClass('visible');
    })
  })
});