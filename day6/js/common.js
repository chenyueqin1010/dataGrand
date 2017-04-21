$('.top .navbar-toggle').click(function(){
	var fa = $(this).find('.fa');
	var fabars = fa.hasClass('fa-bars');
	if(fabars){
		fa.removeClass('fa-bars').addClass('fa-close');
		$('.top').css({'background-color':'#1976D2'});
		$('.top .navbar-collapse').css({'background-color':'rgba(0,0,0,0.7)','z-index':'9999'});
	}else{
		fa.removeClass('fa-close').addClass('fa-bars');
		$('.top').css({'background':'none'});
	}
});


$('.top .panel-heading>a').click(function(){
	var icon = $(this).find('.glyphicon');
	var aria_expanded = $(this).attr('aria-expanded');
	if(aria_expanded == 'false'){
		icon.removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
	}else{
		icon.removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
	}
})
