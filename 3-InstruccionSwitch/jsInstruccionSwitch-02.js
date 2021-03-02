function mostrar() {
  //tomo el mes
  let mes = document.getElementById("txtIdMes").value;

  switch (mes) {
    case "Enero":      
    case "Febrero":      
    case "Marzo":      
    case "Abril":      
    case "Mayo":      
    case "Junio":
      alert("Falta para el invierno");
      break;
    case "julio":      
    case "Agosto":
      alert("Abrigate que hace frio");
      break;
    case "Septiembre":      
    case "Octubre":      
    case "Noviembre":      
    case "Diciembre":
      alert("Ya pasamos el frio, ahora hace calor");
      break;
  }
  
} //FIN DE LA FUNCIÓN
