$(document).ready(function() {
	$(".menu1").click(function() {
		var $ul = $(".nav ul");
		if ($ul.hasClass("menu-click") ) {
			$ul.removeClass("menu-click");
			$ul.slideUp();
		} else {
			$ul.addClass("menu-click");
			$ul.slideDown();
			return false;
		}
	});
});