$(document).ready(function(){
  $('.floor-slider').slick({
    infinite: true,
	dots: true,
	nextArrow: '<span class="icon-right r-arrow arrow"></span>',
	prevArrow: '<span class="icon-left l-arrow arrow"></span>',
  });
  $('.cards-container').slick({
    infinite: true,
	dots: false,
	arrows: false,
	slidesToShow: 3,
	responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
        slidesToShow: 1,
        dotsClass: "features-dots",
        centerMode: true
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
});