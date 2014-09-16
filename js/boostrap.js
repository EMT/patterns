$(document).ready(function() {

	
	$('.markup').each(function(){

		var tabNumData = 1;
		var MarkupNumData = 1;

		$(this).children('.tabs').children('li').each(function(){
			$(this).attr( "data-num", tabNumData);
			
			if ( tabNumData == 1 ) {
				$(this).addClass('active');
			}

			tabNumData++;
		});

		$(this).children('div').each(function(){
			$(this).attr( "data-num", MarkupNumData);

			if ( MarkupNumData == 1 ) {
				$(this).addClass('active');
			}

			MarkupNumData++;
		});

	});

	$('.markup .tabs li').on('click', function() {

		var tabNumber = $(this).data("num");
		var divNumber = $(this).closest('.markup').children('div[data-num="' + tabNumber + '"]');

		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		$(divNumber).addClass('active');
		$(divNumber).siblings().removeClass('active');

	});


});