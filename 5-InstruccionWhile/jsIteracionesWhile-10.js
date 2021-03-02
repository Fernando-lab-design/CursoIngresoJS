/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let respuesta;
	let numeroIngresado;
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let contadorPositivos = 0;
	let contadorNegativos = 0;
	let contadorCeros = 0;
	let contadorPares = 0;
	let negativo;
	let positivo;
	let promedioPositivos = 0;
	let promedioNegativos = 0;
	let diferencia;

	do
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero: "));
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("No es un numero, ingrese un numero: "));
		}
		if(numeroIngresado > 0)
		{
			positivo = numeroIngresado;
			sumaPositivos += positivo;
			contadorPositivos++;
		}
		else if(numeroIngresado < 0)
		{
			negativo = numeroIngresado;
			sumaNegativos += negativo;
			contadorNegativos++;
		}
		else
		{
			contadorCeros++;
		}
		if(numeroIngresado%2 == 0)
		{
			contadorPares++;
		}
		respuesta = prompt("desea continuar?", "si").toLowerCase();
	}while (respuesta == "si");

	
	if(contadorPositivos != 0)
	{
		promedioPositivos = sumaPositivos/contadorPositivos;
	}
	if(contadorNegativos != 0)
	{
		promedioNegativos = sumaNegativos/contadorNegativos;
	}
	diferencia = sumaPositivos - sumaNegativos;

	console.log("El promedio de positivos es: " + promedioPositivos);
	console.log("El promedio de negativos es : " + promedioNegativos);
	console.log("La suma de los negativos es: " + sumaNegativos);
	console.log("La suma de positivos es: " + sumaPositivos);
	console.log("La cantidad de negativos es: " + contadorNegativos);
	console.log("La cantidad de positivos es: " + contadorPositivos);
	console.log("la cantidad de Ceros es: " + contadorCeros);
	console.log("la cantidad de pares es: " + contadorPares);
	console.log("la diferencia de negativos y positivos es: " + diferencia);
}