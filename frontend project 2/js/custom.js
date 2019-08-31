$(document).ready(function(){
	$("#open-menu").click(function(){
	if (window.matchMedia('(max-width: 992px)').matches) {
		$(".menu-navbar").css({height: '0', width: '100%'});
        $(".menu-navbar").animate({height: '100%'}, 500);
    } else {
    	$(".menu-navbar").animate({width: '20%'}, 500);
    }
	});

	$("#close-menu").click(function(){
		if (window.matchMedia('(max-width: 992px)').matches) {
		$(".menu-navbar").animate({height: '0%'}, 500);
    } else {
        $(".menu-navbar").animate({width: '0'}, 500);
    }
	});
});