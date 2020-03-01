$(document).ready(function(){
  $('.floor-slider').slick({
    infinite: true,
	dots: true,
	nextArrow: '<span class="icon-icon-left r-arrow arrow"></span>',
	prevArrow: '<span class="icon-icon-right l-arrow arrow"></span>',
  });
  $('.cards__block').slick({
    infinite: true,
	dots: false,
	arrows: false,
	slidesToShow: 3,
	responsive: [
    {
      breakpoint: 769,
      settings: {
        dots: true,
        slidesToShow: 1,
        dotsClass: "features-dots",
        }
       }
	 ]
  });
  $('footer .navigation h3').click(function () {
            $('.navigation>ul').slideToggle("slow");
             $(this).toggleClass("active");
        });
   $('footer .contact-us h3').click(function () {
            $('.contact-us .adress-block').slideToggle("slow");
            $(this).toggleClass("active");
        });
    $('footer .connected h3').click(function () {
            $('.connected>ul').slideToggle("slow");
             $(this).toggleClass("active");
        });
  $('.burger').click(function(event){
		$('.burger, .menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
  $('.menu__link').click(function(event){
    $('.burger, .menu').removeClass('active');
    $('body').removeClass('lock');
  });
  $(".popup").click(function(){
    $('body').toggleClass('lock');
    $('.overlay').fadeIn();
    $('.overlay').addClass('disabled');
  })
  $(".close-c").click(function(){
    $('body').removeClass('lock');
    $('.overlay').fadeOut();
  })
  $(".send__btn").click(function(){
    $('body').removeClass('lock');
    $('.overlay').fadeOut();
  })
  $(".studio").click(function(){
    $('body').toggleClass('lock');
    $('.first-vid').fadeIn();
    $('.first-vid').addClass('disabled');
  })
  $(".video-close").click(function(){
    $('body').removeClass('lock');
    $('.first-vid').fadeOut();
  })
  $(".incubator").click(function(){
    $('body').toggleClass('lock');
    $('.second-vid').fadeIn();
    $('.second-vid').addClass('disabled');
  })
  $(".video-close").click(function(){
    $('body').removeClass('lock');
    $('.second-vid').fadeOut();
  })
});