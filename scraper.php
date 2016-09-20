<?php

	$city = $_GET['city'];

	$city = str_replace(" ","-",$city);

	@$contents = file_get_contents("http://www.eltiempo.es/".$city.".html");

	if($contents==FALSE){
		echo "Algo no ha funcionado, escribe de nuevo la ciudad";
	}else{

	preg_match('/<div id="city-weather" class="cw-14-days general">(.*?)<\/td>
							<\/tr>
			<tr>/s',$contents,$matches);

	
	echo $matches[1];	
}
	
?>