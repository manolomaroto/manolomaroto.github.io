$(function(){
				$('#register').click(function(){
					var formvalid = true;
					
					$('input').each(function(){
						//busca el form group para poner el error/exito
						var formgroup = $(this).parents('.form-group');

						//busca el glyphicon para poner nuestro visto o equis
						var glyphicon = formgroup.find('.glyphicon');

						//usa la funcion de validacion de HTML5 checkValidity
						if (this.checkValidity()){
							//Muestra verde, oculta el rojo
							formgroup.addClass('has-success').removeClass('has-error');
							//muestra validado y oculta la equis
							glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove');
						} else {
							//muestra rojo, oculta el verde
							formgroup.addClass('has-error').removeClass('has-succes');
							//muestra la equis, oculta validado
							glyphicon.addClass('glyphicon-remove').removeClass('glyphicon-ok');
							formvalid = false;
						}

					});
					if (formvalid){
						$('#alerta-correcto').removeClass('hidden');
					}
				});
			});