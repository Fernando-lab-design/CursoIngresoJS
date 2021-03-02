/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));
	//while( !(numero >= 0 && numero <= 9)) forma acotada para no luchar con el NaN
	while(numeroIngresado < 0 || numeroIngresado > 9 || isNaN(numero))//esta funcion sirve por si no es numero
	{
		
		numeroIngresado = prompt("No es un numero válido, ingrese un número entre 0 y 10.");
	
	}
	
	document.getElementById("txtIdNumero").value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN