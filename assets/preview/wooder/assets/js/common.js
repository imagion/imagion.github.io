$(".toggle").click(function() {
	$(this).toggleClass("on");
	$("#menu").slideToggle();
});
$("#homeLink").click(function() {
	$('html, body').animate({
		scrollTop: $("header").offset().top
	}, 1000);
});
$("#productsLink").click(function() {
	$('html, body').animate({
		scrollTop: $("#furniture").offset().top
	}, 1000);
});
$("#aboutLink").click(function() {
	$('html, body').animate({
		scrollTop: $("#about").offset().top
	}, 1000);
});
$(function() {
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 50) {
				$('header .top-line').addClass('fixed');
			} else {
				$('header .top-line').removeClass('fixed');
			}
		});
	});
