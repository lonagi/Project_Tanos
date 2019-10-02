$(document).ready(function() {
	if (window.matchMedia('(min-width: 992px)').matches) {
		setTimeout(function(){$(".blank").animate({ width: '800px'}, 1000)}, (2000));
		setTimeout(function(){$(".logo").fadeIn(1000)}, (3000));
	}
});