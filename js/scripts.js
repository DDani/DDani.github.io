//Page Loading
$("body").queryLoader2({
	barColor: "#fff",
	backgroundColor: "#2f3133",
	percentage: true,
	barHeight: 1,
	completeAnimation: "fade",
	minimumTime: 100
});

//Back To Top
// hide #back-top first
$("#back-top").hide();

// fade in #back-top
$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1000) {
			$('#back-top').fadeIn();
		} else {
			$('#back-top').fadeOut();
		}
	});
});

//FIT TEXT SCRIPT
$(".fittext").fitText(1.1, { minFontSize: '24px', maxFontSize: '60px' });
$(".fittext-p").fitText(1.1, { minFontSize: '14px', maxFontSize: '18px' });
$(".fit-h1").fitText(1.1, { minFontSize: '30px', maxFontSize: '80px' });
$(".fit-h2").fitText(1.1, { minFontSize: '24px', maxFontSize: '48px' });
$(".fit-h3").fitText(1.1, { minFontSize: '18px', maxFontSize: '36px' });
$(".fit-h4").fitText(1.1, { minFontSize: '18px', maxFontSize: '30px' });
$(".fit-h5").fitText(1.1, { minFontSize: '18px', maxFontSize: '24px' });
$(".fit-h6").fitText(1.1, { minFontSize: '14px', maxFontSize: '16px' });

//Subscription Form
$(document).ready(function() {
	$('#invite').submit(function() {
			var action = $(this).attr('action');
			$.ajax({
				url: action,
				type: 'POST',
				data: {
					email: $('#address').val()
				},
				success: function(data){
					$('#result').html(data);
				},
				error: function() {
					$('#result').html('Sorry, an error occurred.');
				}
			});
		return false;
	});
});

//PARALLAX SCROLL
$(document).ready(function(){
//.parallax(xPosition, speedFactor, outerHeight) options:
//xPosition - Horizontal position of the element
//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport

$('.parallax-background').parallax("50%", 0.3);
$('.parallax-subscribe').parallax("50%", 0.3);
$('.parallax-testimonials').parallax("50%", 0.3);

})

//OWL SLIDER
$(document).ready(function() {

//Gallery Slider
$("#gallery-slides").owlCarousel({
autoPlay: false, 
items : 4,
itemsDesktop : [1199,3],
itemsDesktopSmall : [979,3],
afterInit : function(elem){
	var that = this
	that.owlControls.prependTo(elem)
  }
});

//Testimonials Slider
var owl = $("#testimonials-slides");
owl.owlCarousel({
navigation : true, // Show next and prev buttons
slideSpeed : 300,
paginationSpeed : 400,
singleItem:true,
items : 1,
navigationText : ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
pagination : false
});

//Head Style 3 Slider
var owl = $(".head-slider");
owl.owlCarousel({
navigation : false, // Show next and prev buttons
slideSpeed : 300,
paginationSpeed : 400,
singleItem:true,
items : 1,
pagination : false,
autoPlay: 3000
});

});

//CSS Animations Onload
$(window).scroll(function() {
	$('.fadeIn-onload').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+600) {
			$(this).addClass("fadeIn");
		}
	});

	$('.slideLeft-onload').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+600) {
			$(this).addClass("slideLeft");
		}
	});

	$('.slideRight-onload').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+600) {
			$(this).addClass("slideRight");
		}
	});

	$('.slideUp-onload').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+600) {
			$(this).addClass("slideUp");
		}
	});

	$('.slideDown-onload').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+600) {
			$(this).addClass("slideDown");
		}
	});

});

/*//Gallery Slider
$('#gallery-slider').bxSlider({
    slideWidth: 316,
    minSlides: 1,
    maxSlides: 4,
    slideMargin: 0
  });*/
 
//Scroll Navigation
$('a').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint  = $('[data-anchor="'+scrollAnchor+'"]').offset().top - 0;
                      
   $('body,html').animate({
       scrollTop: scrollPoint
   }, 900);
   return false;
});

