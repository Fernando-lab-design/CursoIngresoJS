function mostrar()
{
	let estacion = document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;
	let resultado;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					resultado = 15000 * 1.1;
				break;
				case "Cataratas":
				case "Cordoba":
					resultado = 15000 * 0.9;
				break;
				case "Mar del plata":
					resultado = 15000 * 0.8;
				break;
				}
			alert("Costo final $" + resultado);
		break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
				resultado = 15000 * 0.8;
			
				break;
				case "Cataratas":
				case "Cordoba":
					resultado = 15000 * 1.1;
				
				break;
				case "Mar del plata":
					resultado = 15000 * 1.2;
				break;
			}
			alert("Costo final $" + resultado);
		break;
		case "Otoño":
		case "Primavera":
			if(destino != "Cordoba")
			{
				resultado = 15000 * 1.1;
			}
			else
			{	
				resultado = 15000;
			}
			alert("Costo final $" + resultado);
		break;
	}

}//FIN DE LA FUNCIÓN