function mostrar() 
{
  
	let mes = document.getElementById("txtIdMes").value;

  /*if (mes == "Enero") {
    alert("Que comiences bien el año!!!");
  } else if (mes == "Marzo") {
    alert("a clases!!!");
  } else if (mes == "Julio") {
    alert("se vienen las vacaciones!!");
  } else if (mes == "Diciembre") {
    alert("Felices fiestas!!!");
  }
  */

	  switch(mes)
	  {
		case "Enero":
			alert("Que comiences bien el año");
			break;
		case "Marzo":
			alert("a clases!!!");
			break;
		case "Julio":
			alert("se vienen las vacaciones");
			break;
		case "Diciembre":
			alert("Felices fiestas");
			break;
	  }

} //FIN DE LA FUNCIÓN
