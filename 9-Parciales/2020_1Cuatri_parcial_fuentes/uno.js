
function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let promedio;
	let acumuladorJabon = 0;
	let acumuladorBarbijo = 0;
	let acumuladorAlcohol = 0;
	let contadorAlcohol = 0;
	let contadorBarbijo = 0;
	let contadorJabon = 0;
	let precioMin;
	let maxCompra;
	let flagAlcohol = 1;
	let cantidadMin;
	let fabricanteMin;

	for(let i = 4;i<5;i++)
	{
		tipo = prompt("Ingrese tipo de producto: ");
		while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol")
		{
			tipo = prompt("no es un tipo valido, ingrese barbijo, jabon o alcohol: ");
		}
		precio = parseInt(prompt("Ingrese precio: "));
		while(precio < 100 || precio > 300 || isNaN(precio))
		{
			precio = parseInt(prompt("No es un precio valido, ingrese entre 100 y 300: "));
		}
		cantidad = parseInt(prompt("Ingrese cantidad: "));
		while(cantidad < 0 || cantidad > 1000 || isNaN(cantidad))
		{
			cantidad = parseInt(prompt("No es valido, ingrese cantidad: "));
		}
		marca = prompt("Ingrese Marca de producto: ");
		fabricante = prompt("Ingrese fabricante: ");

		if(tipo == "alcohol")
		{
			if(flagAlcohol || precio < precioMin)
			{
				precioMin = precio;
				fabricanteMin = fabricante;
				cantidadMin = cantidad;
				flagAlcohol = 0;
			}
			
			acumuladorAlcohol += cantidad;
			contadorAlcohol++	
		}
		if(tipo == "barbijo")
		{
			acumuladorBarbijo += cantidad;
			contadorBarbijo++
		}
		if(tipo == "jabon")
		{
			acumuladorJabon += cantidad;
			contadorJabon++;
			alert(acumuladorJabon);
		}
		
		
	}
	if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorBarbijo)
	{
		promedio = acumuladorAlcohol/contadorAlcohol;
		maxCompra = "alcohol";
	}
	else if(acumuladorBarbijo >= acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon)
	{
		promedio = acumuladorBarbijo/contadorBarbijo;
		maxCompra = "barbijo";
	}
	else
	{
		promedio = acumuladorJabon/contadorJabon;
		maxCompra = "jabon";
	}
	if(flagAlcohol)
	{
		document.write("a- No se compraron alcoholes. <br>");
	}
	else
	{
		document.write("a- El alcohol mas barato es " + precioMin + ", se compro " + cantidadMin + " del fabricante " + fabricanteMin + "<br>");
	}
	document.write("b- el tipo con mas unidades es " + maxCompra + " y el promedio es " + promedio + "<br>");
	document.write("c- se compraron " + acumuladorJabon + " jabones <br>");
	
}
