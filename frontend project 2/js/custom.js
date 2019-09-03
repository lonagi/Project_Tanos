$(document).ready(function(){
	$("#open-menu").click(function(){
	if (window.matchMedia('(max-width: 992px)').matches) {
		$(".menu-navbar").css({height: '0', width: '100%'});
        $(".menu-navbar").animate({height: '100%'}, 500);
    } else {
    	$(".menu-navbar").animate({width: '20%'}, 500);
    	$(".space").fadeIn(500);
    }
	});
	$("#close-menu").click(function(){
		if (window.matchMedia('(max-width: 992px)').matches) {
		$(".menu-navbar").animate({height: '0%'}, 500);
    } else {
        $(".menu-navbar").animate({width: '0'}, 500);
        $(".space").fadeOut(500);
    }
	});
	$(".space").click(function(){
		$(".menu-navbar").animate({width: '0%'}, 500);
		$(".space").fadeOut(500);
	})
});