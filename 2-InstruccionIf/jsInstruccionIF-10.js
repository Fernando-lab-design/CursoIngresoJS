function mostrar()
{
	let nota = Math.floor(Math.random() * 10) + 1;

	if (nota <=4) 
	{
		alert("Vamos, la proxima se puede");	
	}
	else if (nota <= 8) 
	{
		alert("APROBÓ");	
	}
	else
	{
		alert("EXCELENTE");
	}
	
}//FIN DE LA FUNCIÓN