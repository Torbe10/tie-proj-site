$(document).ready(function() {
	$('a[href^="#"]').on('click', function (event) {
		event.preventDefault();

		var target = this.hash;
		var $target = $(target);

		//scroll without hash in url
		$('html, body').animate({
			'scrollTop': $target.offset().top
		}, 1000, 'swing');
	});
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	//document.body.scrollTop for Chrome, Safari, Opera
	//document.documentElement.scrollTop for IE, Firefox
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("top-button").style.display = "block";
	} else {
		document.getElementById("top-button").style.display = "none";
	}
}

function topFunction() {
	$('html, body').animate({scrollTop: 0}, 1000);
	return false;
}