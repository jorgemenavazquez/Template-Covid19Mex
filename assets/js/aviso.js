$(document).ready(function() {
$('#aviso').hide(0);


		$(window).scroll(function(){


				var windowHeight = $(window).scrollTop();
				var contenido2 = $("#contenido2").offset();

				contenido2 = contenido2.top;


				if(windowHeight = contenido2  ){
					

					$('#aviso').fadeIn(500);

				}else{
					$('#aviso').fadeOut(500);

				}


		});

});
