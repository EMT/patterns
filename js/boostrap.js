$(document).ready(function() {


	$('.markup .tabs li').on('click', function() {
		var name = $(this).html();
		var nameClass = '.' + name;

		$(this).addClass('active');
		$(this).siblings().removeClass('active');

		$(nameClass).addClass('active');
		$(nameClass).siblings().removeClass('active');

	});


});