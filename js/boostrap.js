$(document).ready(function() {

	
	$('.markup').each(function(){


		var tabNumData = 1;
		var MarkupNumData = 1;

		// Add in the tabs container.
		$(this).prepend('<ul class="tabs"></ul>');


		$(this).children('div').each(function(){
			
			// For each div add in a data attribute.
			$(this).attr( "data-tab", MarkupNumData);

			// Make the first div active.
			if ( MarkupNumData == 1 ) {
				$(this).addClass('active');
			}

			// Get the class that jekyll adds from its highlighting function.
			var tabType = $(this).find('code').attr('class');

			// Append each tab into the tabs container.
			$(this).parent().children('.tabs').append('<li>'+tabType+'</li>');

			MarkupNumData++;
		});

		$(this).children('.tabs').children('li').each(function(){

			// Add in a data attribute equal to the div's data attribute.
			$(this).attr( "data-tab", tabNumData);
			
			// Make the first tab active.
			if ( tabNumData == 1 ) {
				$(this).addClass('active');
			}

			tabNumData++;
		});


	});

	$('.markup .tabs li').on('click', function() {

		// Swap the active classes around using the numbers data attributes.

		var $tabNumber = $(this).data("tab");
		var $divNumber = $(this).closest('.markup').children('div[data-tab="' + $tabNumber + '"]');

		$(this).addClass('active').siblings().removeClass('active');
		$($divNumber).addClass('active').siblings().removeClass('active');

	});


});

