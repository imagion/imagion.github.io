(function(){
	$('.branding-slider').slick({
		arrows:false,
		dots:true,
		dotsClass:"testimonials-dots"
	});
	$('.testimonials-slider').slick({
		arrows:false,
		dots:true,
		dotsClass:"testimonials-dots"
	});

	function floatLabel(inputType){
		$(inputType).each(function(){
			var $this = $(this);
			// on focus add cladd active to label
			$this.focus(function(){
				$this.prev().addClass("active");
			});
			//on blur check field and remove class if needed
			$this.blur(function(){
				if($this.val() === '' || $this.val() === 'blank'){
					$this.prev().removeClass();
				}
			});
		});
	}
	// just add a class of "floatLabel to the input field!"
	floatLabel(".floatLabel");
})(jQuery);
