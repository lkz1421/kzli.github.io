$.vegas('slideshow', {
	delay : 5000,
	backgrounds : [{
			src : './img/nature1.jpg',
			fade : 2000
		}, {
			src : './img/bw1.jpg',
			fade : 2000
		}, {
			src : './img/portrait1.jpg',
			fade : 2000
		}, {
			src : './img/portrait5.jpg',
			fade : 2000
		}, {
			src : './img/portrait2.jpg',
			fade : 2000
		}, {
			src : './img/portrait3.jpg',
			fade : 2000
		}, {
			src : './img/portrait4.jpg',
			fade : 2000
		}, {
			src : './img/forest.jpg',
			fade : 2000
		}
	]
})('overlay', {
	src : './img/overlay.png'
});

$(function () {
	$('#Grid').mixitup();
	$('a[href*=#]:not([href=#])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			 || location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop : target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	$('#nav').scrollToFixed();
	var bp = document.createElement('script');
	var curProtocol = window.location.protocol.split(':')[0];
	if (curProtocol === 'https') {
		bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
	} else {
		bp.src = 'http://push.zhanzhang.baidu.com/push.js';
	}
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(bp, s);
});
