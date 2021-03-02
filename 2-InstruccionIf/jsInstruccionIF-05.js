function mostrar()
{
	let edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad <= 13 || edad >=17) //se cumplen las dos condiciones, se usa "&&"
	{
		alert("NO es adolescente");
	}
	/*if ( !(edad <=13 && edad >=17))
	{
		alert("NO es adolescente");
	} todo eso es otra opcion usando el operador "not" con el simbolo "!"
	*/
}//FIN DE LA FUNCIÓN