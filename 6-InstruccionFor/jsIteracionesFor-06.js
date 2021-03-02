function mostrar()
{
	let numero;
	let resultado;
	numero = parseInt(prompt("ingrese un numero: "));
	
	while(isNaN(numero) || numero < 0)
	{
		numero = parseInt(prompt("no es un numero valido, ingrese un numero mayor a 0: "));
	}
	
	for(i=1;i <= numero;i++)
	{
		
		if(i%2 == 0)
		{
			console.log(i);
		}

	}



}//FIN DE LA FUNCIÓN