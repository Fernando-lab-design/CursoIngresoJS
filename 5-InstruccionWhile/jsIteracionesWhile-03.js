/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada = prompt("ingrese el número clave.");
	

	while(claveIngresada != "utn750") //solo si el dato es invalido hay que entrar
	{
		claveIngresada = prompt("No es la clave, ingrese el número clave.");
	}
	alert("esa es la clave");

	
}//FIN DE LA FUNCIÓN
