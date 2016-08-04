$( document ).ready(function(){	
	
	var header = $('.above');
	var range = 450;
	console.log(range);

	$(window).on('scroll', function () {
	  
	    var scrollTop = $(this).scrollTop();
	    var offset = header.offset().top;
	    var height = header.outerHeight();
	    offset = offset + height / 2;
	    var calc = 1 - (scrollTop - offset + range) / range;
	  
	    header.css({ 'opacity': calc });
	  
	    if ( calc > '1' ) {
	      header.css({ 'opacity': 1 });
	    } else if ( calc < '0' ) {
	      header.css({ 'opacity': 0 });
	    }
	  
	});

	var title = $("#toShowHide");
	var pos = title.position();
	$(window).scroll(function () {
	   	var windowpos = $(window).scrollTop();
	   	if (windowpos >= (pos.top - 500)) {
	   		$(".beforeScroll").fadeIn(500);
	   	}	
	   	else {
	     	$(".beforeScroll").fadeOut(500);
	   	}
	});

	var headerHeight = $('.beneath').height();
	$(window).scroll(function() {
		if( $(this).scrollTop() > headerHeight) {
	    	$('nav').addClass('fixed-nav');
	  	} else {
	    	$('nav').removeClass('fixed-nav');
	  	}
	});

	var naslovnaPos = $("#naslovna").position();
	var miPos = $("#mi").position();
	var trofejiPos = $("#trofeji").position();
	var lovPos = $("#lov").position();
	var galerijaPos = $("#galerija").position();
	var contactPos = $("#contact").position();
	$(window).scroll(function() {
		if( $(this).scrollTop() > naslovnaPos.top-100) {
	  		$('a').removeClass('current');
	    	$('.naslovnaLink').addClass('current');
	  	}
	  	if( $(this).scrollTop() > trofejiPos.top-100) {
	  		$('a').removeClass('current');
	    	$('.trofejiLink').addClass('current');
	  	}
	  	if( $(this).scrollTop() > lovPos.top-100) {
	  		$('a').removeClass('current');
	    	$('.lovLink').addClass('current');
	  	}
	  	if( $(this).scrollTop() > miPos.top-100) {
			$('a').removeClass('current');
	    	$('.miLink').addClass('current');
	  	}
	  	if( $(this).scrollTop() > galerijaPos.top-100) {
	  		$('a').removeClass('current');
	    	$('.galerijaLink').addClass('current');
	  	}
	  	if( $(this).scrollTop() > contactPos.top-100) {
	  		$('a').removeClass('current');
	    	$('.contactLink').addClass('current');
	  	}
	});
/*
	var width = 0;
	$('.huntingImages').each(function() {
	    width += $(this).outerWidth( true );
	});
	$('.huntingSlider').css('width', width + 250);
	console.log($('.huntingSlider').width());
	*/
	$('.fancybox').fancybox();

});