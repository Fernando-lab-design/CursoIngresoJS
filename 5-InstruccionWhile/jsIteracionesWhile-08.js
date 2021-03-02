/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let respuesta;
	let totalSuma = 0;
	let totalProducto = 1;
	//let contadorNeg = 0;//esto es por si no ingresa ningun numero negativo y para que de 0 y no 1
	let flag = 0; //variable bandera para conocer si se paso por un cuerpo de codigo o no
	do
	{
		numero = parseInt(prompt("ingrese un numero"));
		while( isNaN(numero))
		{
			numero = parseInt(prompt("No es un numero, por favor ingrese un numero:"));
		}
		if(numero >= 0)
		{
			totalSuma += numero;
		}
		else
		{
			totalProducto *= numero;
			//contadorNeg++;
			flag = 1;
		}
		respuesta = prompt("Quiere ingresar otro numero?", "si").toLowerCase();
	}while(respuesta == "si");

	if(flag == 0)
	{
		totalProducto = 0;
	}
	document.getElementById("txtIdSuma").value = totalSuma;
	document.getElementById("txtIdProducto").value = totalProducto;

}//FIN DE LA FUNCIÓN