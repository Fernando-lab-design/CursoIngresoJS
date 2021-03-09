function mostrar()
{
  /*Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion,
   hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro*/

let tipo;
let cantidad;
let precio;
let acumBolsas = 0;
let totalCompra = 0;
let totalDesc;
let mayorTipo;
let acumArena = 0;
let acumCal = 0;
let acumCemento = 0;
let masCaroTipo;
let masCaroprod;
let sigue;
let flagCaro = 1;

do
{
  tipo = prompt("Ingrese producto cal/cemento/arena: ").toLowerCase();
  while(tipo != "cal" && tipo != "cemento" && tipo != "arena")
  {
    tipo = prompt("No valido. Ingrese producto cal/cemento/arena: ").toLowerCase();
  }
  cantidad = parseInt(prompt("Ingrese cantidad de bolsas: "));
  while(isNaN(cantidad) || cantidad <= 0)
  {
    cantidad = parseInt(prompt("Dato invalido. Ingrese cantidad de bolsas: "));
  }
  precio = parseFloat(prompt("Ingrese precio por bolsa"));
  while(isNaN(precio) || precio <= 0)
  {
    precio = parseFloat(prompt("Dato invalido. Ingrese precio por bolsa"));
  }
  acumBolsas += cantidad;
  totalprod = precio * cantidad;
  totalCompra += totalprod;
  
  if (flagCaro || MasCaroTipo > precio)
  {
    masCaroTipo = precio;
    masCaroprod = tipo;

  }
  if(tipo == "arena")
  {
    acumArena += cantidad;
  }
  else if(tipo == "cal")
  {
    acumCal += cantidad;
  }
  else
  {
  acumCemento += cantidad;
  }

  sigue = prompt("Desea agregar otro producto?: ", "si");
}while( sigue == "si");


if(acumArena > acumCal && acumArena > acumCemento)
{
  mayorTipo = "arena";
}
else if(acumCal >= acumArena && acumCal > acumCemento)
{
  mayorTipo = "cal";
}
else
{
  mayorTipo = "cemento";
}

document.write("a- El importe total bruto es " + totalCompra + "<br>");

if(acumBolsas > 10 && acumBolsas <= 30)
{
  totalDesc = totalCompra * .85;
  document.write("b- El total con descuento por cantidad de bolsas es " + totalDesc + "<br>");
  
}
else if(acumBolsas > 30)
{
  totalDesc = totalCompra * .75;
  document.write("b- El total con descuento por cantidad de bolsas es " + totalDesc + "<br>");
}

document.write("c- El tipo de producto con mas bolsas en total es " + mayorTipo + "<br>");
document.write("d- El tipo de producto mas caro es " + masCaroprod + "<br>");



}
