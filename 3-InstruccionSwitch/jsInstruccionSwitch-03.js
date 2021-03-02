function mostrar() {
  //tomo el mes
  var mes = document.getElementById("txtIdMes").value;
/*
  if (mes == "Febrero") {
    alert("Este mes no tiene mas de 29 dias");
  } else {
    alert("Este mes tiene 30 dias o mas");
  }
  */


 switch (mes) {
	case "Febrero":
		alert("Este mes no tiene mas de 29 dias");
	/*case "Enero":          
    case "Marzo":      
    case "Abril":      
    case "Mayo":      
    case "Junio":      
    case "julio":      
    case "Agosto":      
    case "Septiembre":      
    case "Octubre":      
    case "Noviembre":      
    case "Diciembre":
		alert("Este mes tiene 30 dias o mas");
		break;
*/
	default:
		alert("Este mes tiene 30 dias o mas");
		// el default sirve porque es un "select"
		// el default sirve cuando no se entra en ningun  case
 }	
} //FIN DE LA FUNCIÓN
