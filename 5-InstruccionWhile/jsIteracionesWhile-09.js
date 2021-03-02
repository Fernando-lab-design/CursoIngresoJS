/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	/* 
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
*/
	let numero;
	let respuesta;
	let flag = 1;//en C: 0 es false y lo demas es true
	let numMax = 0;
	let numMin;

	do
	{
		numero = parseInt(prompt("ingrese un numero: "));
		while ( isNaN(numero))
		{
			numero = parseInt(prompt("no es un numero, por favor ingrese un numero: "));
		}
		if(flag || numero > numMax)
		{
			numMax = numero;
		}
		if (flag || numero < numMin) 
		{
			numMin = numero;
			flag = 0;	
		}

		respuesta = prompt("Quiere ingresar otro numero", "si").toLowerCase();
	}while(respuesta == "si");
	
	document.getElementById("txtIdMinimo").value = numMin;
	document.getElementById("txtIdMaximo").value = numMax;
		/*if(flag == "0") otra opcion mas larga pero correcta
		{
			numMax = numero;
			numMin = numero;
			flag = 1;
		}
		else if(numero > numMax)
			{
				numMax = numero;
				flag = 1;
			}
			else if (numero < numMin) 
			{
				numMin = numero;
				flag = 1;
			}*/
	
		
	
}//FIN DE LA FUNCIÓN