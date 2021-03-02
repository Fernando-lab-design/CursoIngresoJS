function mostrar()
{

	let repetciones;
	repeticiones = parseInt(prompt("ingrese el número de repeticiones"));
	let i = 0;

	while(isNaN(repeticiones) || repeticiones < 0)
	{
		repeticiones = parseInt(prompt("eso no es un numero valido, ingrese un numero: "));
	}

	for(let i=0;i < repeticiones;i++)
	{
		document.write("Hola UTN FRA <br>");
		
	}

}//FIN DE LA FUNCIÓN