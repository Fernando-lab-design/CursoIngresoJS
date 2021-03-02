/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let num1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	let suma = num1 + num2;

	alert("la suma es " + suma);	
}

function restar()
{
	let num1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	let resta = num1 - num2;

	alert("la resta es " + resta);
	
}

function multiplicar()
{ 
	let num1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	let producto = num1 * num2;

	alert("El producto es " + producto);
}

function dividir()
{
	let num1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	let division = num1 / num2;

	alert("El cociente es " + division);
}

