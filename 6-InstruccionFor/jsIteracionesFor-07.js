function mostrar()
{
	let numero;
	let contador = 0;
	numero = parseInt(prompt("ingrese un numero: "));

	while(isNaN(numero) || numero < 0)
	{
		numero = parseInt(prompt("no es un numero valido, ingrese un numero mayor a 0: "));
	}
	for(let i=1;i<=numero;i++)
	{
		if(numero%i == 0)
		{
		console.log(i);
		contador++;
		}
	}
	
	console.log("la cantidad de divisores es " + contador);


}//FIN DE LA FUNCIÓN