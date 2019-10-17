$(document).ready(function() {
	if (window.matchMedia('(min-width: 992px)').matches) {
		setTimeout(function(){$(".blank").animate({ width: '800px'}, 1000)}, (2000));
		setTimeout(function(){$(".logo").fadeIn(1000)}, (3000));
	}
	$('.owl-carousel').owlCarousel({
	dots: true,
	dotsEach: true,
	responsiveClass:true,
	responsive:{
        500:{
            items:1,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:false
        }
    }
	});
});