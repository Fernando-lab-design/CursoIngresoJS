function mostrar()
{
	//tomo el mes
	let mes = document.getElementById("txtIdMes").value;
	
	switch(mes){
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 dias");
			break;
		case "Febrero":
			alert("Este mes tiene 28 dias");
			break;
		default:
			alert("Este mes tiene 31 dias");


	}
	
	



}//FIN DE LA FUNCIÓN