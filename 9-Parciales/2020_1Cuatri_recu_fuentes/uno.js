
function mostrar()
{
	/*Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/


let producto;
let precio;
let cantidad;
let marca;
let fabricante;
let jabonMasCaro;
let flagJabon = 1;
let jabonCant = 0;
let jabonFab;
let acumBarbijo = 0;
let acumJabon = 0;
let acumAlcohol = 0;
let contBarbijo = 0;
let contJabon = 0;
let contAlcohol = 0;
let promedioMayor;
let mayorproducto;




for(let i=0;i<5;i++)
{
	producto = prompt("Ingrese tipo de producto barbijo/jabon/alcohol: ").toLowerCase();
	while(producto != "barbijo" && producto != "jabon" && producto != "alcohol")
	{
		producto = prompt("producto no valido. Ingrese tipo de producto barbijo/jabon/alcohol: ").toLowerCase();
	}
	precio = parseFloat(prompt("Ingrese precio del producto: "));
	while(isNaN(precio) || precio < 100 || precio > 300)
	{
		precio = parseFloat(prompt("Dato no valido. Ingrese precio del producto: "));
	}
	cantidad = parseInt(prompt("Ingrese cantidad de unidades: "));
	while(isNaN(cantidad) || cantidad <= 0 || cantidad > 1000)
	{
		cantidad = parseInt(prompt("Dato no valido. Ingrese cantidad de unidades: "));
	}
	marca = prompt("Ingrese marca del producto: ");
	fabricante = prompt("Ingrese fabricante del producto: ");

	if(producto == "jabon")
	{
		if(flagJabon || jabonMasCaro < precio)
		{
			jabonMasCaro = precio;
			jabonCant = cantidad;
			jabonFab = fabricante;
			flag = 0;
		}
	}

	if(producto == "jabon")
	{
		acumJabon += cantidad;
		contJabon++;
	}
	else if(producto == "barbijo")
	{
		acumBarbijo += cantidad;
		contBarbijo++;
	}
	else
	{
		acumAlcohol += cantidad;
		contAlcohol++;
	}

	

}

if(acumAlcohol > acumBarbijo && acumAlcohol > acumJabon)
{
	mayorproducto = "Alcohol";
	promedioMayor = acumAlcohol/contAlcohol;
}
else if(acumBarbijo >= acumAlcohol && acumBarbijo > acumJabon)
{
	mayorproducto = "barbijo";
	promedioMayor = acumBarbijo/contBarbijo;
}
else
{
	mayorproducto = "jabon";
	promedioMayor = acumJabon/contJabon;
}

if(acumJabon != 0)
{
	document.write("a- Del jabon mas caro la cantidad comprada es " + jabonCant + " y el fabricante es " + jabonFab + "<br>");
}
else
{
	document.write("a- No se compraron jabones <br>");
}
document.write("b- El tipo de producto con más unidades en total de la compra es " + mayorproducto + " y el promedio por compra es " + promedioMayor + "<br>");
document.write("c- En total se compraron " + acumBarbijo + " barbijos <br>");


}
