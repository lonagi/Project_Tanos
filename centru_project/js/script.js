$(document).ready(function() {
	if (window.matchMedia('(min-width: 992px)').matches) {
		setTimeout(function(){$(".blank").animate({ width: '800px'}, 1000)}, (2000));
		setTimeout(function(){$(".logo").fadeIn(1000)}, (3000));
	}

	var top1 = $('#about').offset().top;
	var top2 = $('#team').offset().top;
	var top3 = $('#services').offset().top;

	$(document).scroll(function() {
  		var scrollPos = $(document).scrollTop();
  		if (scrollPos >= top1 && scrollPos < top2) {
    		var el = document.getElementsByClassName('active')[0];
    		el.classList.remove('active');
    		var el2 = document.getElementById('about-nav');
    		el2.classList.add('active');
  		} else if (scrollPos >= top2 && scrollPos < top3) {
    		var el = document.getElementsByClassName('active')[0];
    		el.classList.remove('active');
    		var el2 = document.getElementById('team-nav');
    		el2.classList.add('active');
  		} else if (scrollPos >= top3) {
    		var el = document.getElementsByClassName('active')[0];
    		el.classList.remove('active');
    		var el2 = document.getElementById('services-nav');
    		el2.classList.add('active');
  		}
});
});