<?php
	/**$destino = "manuelgmaroto@gmail.com";
	$asunto = "comentario";

	$comentario = "
		Email: $_POST['email']
		Comentario: $_POST['comentario']
	";

	$headers = 'From':.$destino."\r\n".
	'Reply-To:'.$_POST['email']."\r\n".
	'X-Mailer: PHP/'.php.version();

	mail($destino,$asunto,$comentario,$headers);

	echo "Enviado";
	

	mail('manuelgmaroto@gmail','Contacto desde mi web','Hola');
	**/
	$email_to = "manuelgmaroto@gmail.com";
	$email_subject = "Mensaje desde tu web";
	$email_from = $_POST['mail'];

	$email_message = "Email: " . $_POST['mail'] . "\n";
	$email_message .= "Mensaje:" . $_POST['comentario'];

	$headers = 'From:'.$email_from."\r\n".
	'Reply-To:'.$email_to."\r\n".
	'X-Mailer: PHP/' . phpversion();

	@mail($email_to,$email_subject,$email_message,$headers);

	?>

<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Title Page</title>

		<!-- Bootstrap CSS -->
		<link href="css/bootstrap.min.css" rel="stylesheet">

		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
			<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
		<![endif]-->
	</head>
	<body>
		<div class="container">
			<div class="row">
				<h3>Mensaje enviado correctamente</h3>
				<p><a href="index.html">Volver a inicio</a></p>
			</div>
		</div>

		<script src="js/jquery-2.1.3.min.js"></script>
		<!-- Bootstrap JavaScript -->
		<script src="js/bootstrap.min.js"></script>
	</body>
</html>