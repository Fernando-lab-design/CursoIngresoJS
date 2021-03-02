/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero; 
	let total = 0;
	let contador = 0;
	let respuesta;
	do//sirve para cuando al menos se tiene que ejecutar una vez
	{
		numero = parseInt(prompt("ingrese un numero"));
		total =+ numero;
		contador++;
		respuesta = prompt("Quiere ingresar otra respuesta?", "si").toLowerCase();
	}while(respuesta == "si");

	document.getElementById("txtIdSuma").value = total;
	document.getElementById("txtIdPromedio").value = total/contador;


}//FIN DE LA FUNCIÓN