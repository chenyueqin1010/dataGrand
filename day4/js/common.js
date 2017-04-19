$('.top .navbar-toggle').click(function(){
	var fa = $(this).find('.fa');
	var fabars = fa.hasClass('fa-bars');
	if(fabars){
		fa.removeClass('fa-bars').addClass('fa-close');
		$('.top').css({'background-color':'#1976D2'});
		$('.top .navbar-collapse').css('background-color','rgba(0,0,0,0.5)');
	}else{
		fa.removeClass('fa-close').addClass('fa-bars');
		$('.top').css({'background':'black'});
	}
});

$('.top .panel-heading').click(function(){
	var icon = $(this).find('.glyphicon ');
	var arrowRight = icon.hasClass('glyphicon-chevron-right');
	if(arrowRight){
		icon.removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
	}else{
		icon.removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
	}
});
