/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado = prompt("ingrese f ó m .").toLowerCase();

	while( sexoIngresado != "f" && sexoIngresado != "m")//faltaria validar mayusculas
	{
		sexoIngresado = prompt("ingrese f ó m .");
		if(sexoIngresado == null) //esto es para poder cancelar
		{
			break;
		}
	}
	
	document.getElementById("txtIdSexo").value = sexoIngresado;
	
}//FIN DE LA FUNCIÓN