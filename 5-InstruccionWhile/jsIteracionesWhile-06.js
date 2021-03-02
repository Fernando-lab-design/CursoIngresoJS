function mostrar()
{
	
	let numeroIngresado = 0; //contador
	let total = 0;//acumulador
	//let promedio;
	let i = 0;

	while( i < 5)
	{
		numeroIngresado = parseInt(prompt("ingrese un numero"));
		total = total + numeroIngresado;
		
		//i = i + 1;
		i++ ;
	}
	
	
	//promedio = total/5;
	document.getElementById("txtIdSuma").value = total;
	//document.getElementById("txtIdPromedio") = promedio;
	document.getElementById("txtIdPromedio").value = total/5;

	
	
	
}//FIN DE LA FUNCIÓN