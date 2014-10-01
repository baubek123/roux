$(function() {
	//Making slideshow for last year photos
    $('.slideShow').each(function(i){
	  	var groupName = 'group'+i;
	  	$('.photogrid a', this).colorbox({
		  	rel:groupName,
		  	'maxWidth' : '50%',
			'scalephotos' : true,
			'transition' : 'fade',
			'opacity' : 0.5,
			'slideshow' : true,
			'slideshowSpeed' : 4000,
		});
	});


	//controlling opening of accordions
	$('#monday.panel-body').addClass('in');
	
	$('#artists #tuesday.panel-body').addClass('in');
	$('#artists #wednesday.panel-body').addClass('in');
	$('#artists #thursday.panel-body').addClass('in');
	$('#artists #friday.panel-body').addClass('in');

	//addbootstrap classes to images
	$('.abouttheartists img').addClass('img-circle');
	$('aside.photosfromlastyear img').addClass('img-thumbnail');
	$('.artistinfo img').addClass('img-circle');

	//activating schedule tabs
	var hash = window.location.hash;
	hash && $("ul.nav a[href=' + hash + ']").tab('show');

	//highlight the current nav
	$("#home a:contains('Home')").parent().addClass("active");
    $("#schedule a:contains('Schedule')").parent().addClass("active");
    $("#artists a:contains('Artists')").parent().addClass("active");
    $("#venuetravel a:contains('Venue/Travel')").parent().addClass("active");
    $("#register a:contains('Register')").parent().addClass("active");

	//make menus drop automatically
	$('ul.nav li.dropdown').hover(function() {
		$('.dropdown-menu', this).fadeIn();
	}, function() {
		$('.dropdown-menu', this).fadeOut('fast');
	});

	//show tooltips
	$("[data-toggle='tooltip']").tooltip({ animation: true });

	
}); //jQuery is loaded