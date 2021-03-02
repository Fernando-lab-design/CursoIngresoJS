/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre = document.getElementById("txtIdNombre").value; 
// toma del html el ID que figura en el imput
//nombre = txtIdNombre.value; tambien funciona

	alert(nombre);

document.getElementById("txtIdNombre").value = "";
//con esto al cerrar el cuadro de alert se vuelve a cero la caja de texto

}


