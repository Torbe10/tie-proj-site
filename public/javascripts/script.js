$(document).ready(function() {
	$('a[href^="#"]').on('click', function (event) {
		event.preventDefault();

		var target = this.hash;
		var $target = $(target);

		//scroll without hash in url
		$('html, body').animate({
			'scrollTop': $target.offset().top-50
		}, 400, 'swing');
	});
});

function topFunction() {
	$('html, body').animate({scrollTop: 0}, 400);
	return false;
}