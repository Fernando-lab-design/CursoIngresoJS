/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre = document.getElementById("txtIdNombre").value;

	let edad = document.getElementById("txtIdEdad").value;

//no olvidar poner ".value" para que tome el valor del cuadro 

	//alert("Usted se llama " + nombre + " y tiene " + edad + " años.");
	// el espacio tambien es un caracter y hay que ponerlo entre comillas para que no salga todo junto

	alert(`Usted se llama ${nombre} y tiene ${edad} años`);
	//con esta variante se usa "back tick" y se puede simplificar la escritura
}

