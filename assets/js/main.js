$(document).ready(function() {
	if ($(window).width() <= 580) {
		$('.related-posts--wrapper').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000
		});
	}
});