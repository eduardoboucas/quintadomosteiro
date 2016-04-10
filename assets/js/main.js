window.main = (function ($) {
	var videosInteraction = false;
	var $homepageTiles = $('.js-homepage-tile');
	var $videos = $('.js-homepage-video');
	var $map = $('.js-map');

	function init() {
		bindUiEvents();
		autoplayFirstVideo();
	}

	function bindUiEvents() {
		$homepageTiles.hover(function () {
			stopAllVideos();
			$(this).find('.js-homepage-video').get(0).play();
		}, function () {
			stopAllVideos();
		});

		$('.js-map-container').one('click', function () {
			$(this).removeClass('map-container--block-scroll');
		});

		$('.js-map-link').click(function () {
			$map.attr('src', $(this).attr('data-src'));
		});
	}

	function autoplayFirstVideo() {
		if (!$videos.length) {
			return;
		}
		
		$videos.first().get(0).play();
	}

	function stopAllVideos() {
		$videos.each(function (index, element) {
			$(element).get(0).pause();
		});
	}

	$(document).ready(init);
})(jQuery);
