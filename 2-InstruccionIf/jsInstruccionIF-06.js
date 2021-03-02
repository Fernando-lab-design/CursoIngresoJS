function mostrar()
{
	let edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad <13)
	{
		
		alert("Es un niño");
	
	} else 
	{

		if (edad <18)
		{
			alert("es un adolesente");

		}else 
		{
			alert("Es mayor de edad");
		}
		/*else if (edad <18) posibilidad de hacer lo mismo
	{
			alert("es un adolesente");

		}else 
		{
			alert("Es mayor de edad");
		}*/ 

	} 

	

}//FIN DE LA FUNCIÓN