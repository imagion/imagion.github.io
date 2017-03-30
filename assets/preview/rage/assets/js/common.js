$( document ).ready(function() {

	$("#burger").click(function() {
		$("#main-nav").slideToggle();
	});

	$( "#accordion" ).accordion({
		icons: { "header": "io-icon-right-arrow", "activeHeader": "io-icon-down-arrow" },
		heightStyle: "content"
	});

	$('#works-carousel').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		swipeToSlide: true,
		variableWidth: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3,
					swipeToSlide: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1,
					swipeToSlide: true,
				}
			}
		]
	});

	$('#testimonials-carousel').slick({
		swipeToSlide: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					swipeToSlide: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					swipeToSlide: true,
				}
			}
		]
	});

	$( "#progressbar-design" ).progressbar({
		value: 64
	});
	$( "#progressbar-typo" ).progressbar({
		value: 86
	});
	$( "#progressbar-html" ).progressbar({
		value: 72
	});
});
