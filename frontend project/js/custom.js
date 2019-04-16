$('.home-slider').owlCarousel({
	animateOut: 'fadeOut',
	items: 1,
	loop: true,
	dots: false,
	autoplayHoverPause: false,
	autoplay: true,
	smartSpeed: 1000,
});

$('.owl-courses').owlCarousel({
	animateOut: 'fadeOut',
	autoWidth:true,
	loop: true,
	autoplayHoverPause: false,
	autoplay: true,
	smartSpeed: 1000,
	dots: false,
	nav: true,
	navText: [
	'<i class="fas fa-angle-left"></i>',
	'<i class="fas fa-angle-right"></i>'
	],
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
		},
		1000: {
			items: 3,
		}
	}
	});

$('.owl-client').owlCarousel({
	animateOut: 'fadeOut',
	autoWidth:true,
	loop: true,
	autoplayHoverPause: false,
	autoplay: true,
	smartSpeed: 1000,
	responsiveClass: true,
	responsive: {
		0:{
            items:1,
        },
        1000:{
            items:3,
        }
	}
	});