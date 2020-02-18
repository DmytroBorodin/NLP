$(document).ready(function(){
  $('.floor-slider').slick({
    infinite: true,
	dots: true,
	nextArrow: '<span class="icon-icon-left r-arrow arrow"></span>',
	prevArrow: '<span class="icon-icon-right l-arrow arrow"></span>',
  });
  $('.cards-container').slick({
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
});