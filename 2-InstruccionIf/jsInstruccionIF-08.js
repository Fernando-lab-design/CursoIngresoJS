function mostrar()
{
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	let estado = document.getElementById("estadoCivil").value;

	if (estado == "Soltero" && edad >= 18) 
	{
		alert("Es soltero y no es menor");
	}


}//FIN DE LA FUNCIÓN