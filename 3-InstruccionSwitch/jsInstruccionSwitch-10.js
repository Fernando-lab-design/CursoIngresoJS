function mostrar()
{
	let estacion = document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;
	let respuesta = false; //cuando las opciones son dos posibles respuestas se usa booleano. 
	//let respuesta = 0 o 1; // con esta posibilidad no se usa booleano pero es similar. sirve para lenguaje C:

	
	switch (estacion) 
	{
		case "Invierno":
			if(destino == "Bariloche")
			{
				respuesta = true;
			}			
			break;
		case "Verano":
			if(destino == "Mar del plata" || destino == "Cataratas")
			{
				respuesta = true;
			}			
			break;
		case "Primavera":
			if(destino != "Bariloche")
			{
				respuesta = true;
			}
		break;
		case "Otoño":
			respuesta = true;
		break;
		
	}
	if(respuesta)
	{
		alert("Se viaja");
	}
	else
	{
		alert("No se viaja");
	}
}//FIN DE LA FUNCIÓN