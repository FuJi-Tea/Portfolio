$(function(){
	$('.wrap div,.wrap h2').css({
		"opacity":"0",
		"transform":"translateY(50%)",
		"-ms-transform":"translateY(50%)"
	});
	$(window).scroll(function (){
		$(".wrap").each(function(){
			var imgPos = $(this).offset().top;    
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > imgPos - windowHeight + windowHeight/5){
				$("div,h2",this).css({
					"opacity":"1",
					"transform":"translateY(0)",
					"-ms-transform":"translateY(0)"
				});
			} else {
				$("div,h2",this).css("opacity","0" );
			}
		});
	});
	$('#nav-open').on('click', function () {
	$('#nav-open, .nav').toggleClass('show');
	});
});