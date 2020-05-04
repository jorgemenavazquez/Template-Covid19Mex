$(document).ready(function() {
$('#aviso').hide(0);


		$(window).scroll(function(){


				var windowHeight = $(window).scrollTop();
				


				if(windowHeight = 200  ){
					

					$('#aviso').fadeIn(500);

				}else{
					$('#aviso').fadeOut(500);

				}


		});

});
