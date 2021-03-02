function mostrar()
{
  /*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, 
  hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/
  let producto;
  let cantidad;
  let precio;
  let acumcal = 0;
  let acumcemento = 0;
  let acumarena = 0;
  let sigue;
  let acumCompra = 0;
  let flag = 1;
  let tipoCaro;
  let acumbolsas = 0;

  do
  {
    producto = prompt("Ingrese producto que desea comprar: ").toLowerCase();
    while(producto != "arena" && producto != "cal" && producto != "cemento" )
    {
      producto = prompt("producto no valido, ingrese producto que desea comprar: ").toLowerCase();
    }
    cantidad = parseInt(prompt("Ingrese cantidad a comprar: "));
    while(isNaN(cantidad) || cantidad < 0)
    {
      cantidad = parseInt(prompt("Error. Ingrese cantidad a comprar: "));
    }
    precio = parseFloat(prompt("Ingrese precio por bolsa"));
    while(isNaN(precio) || precio < 0 )
    {
      precio = parseFloat(prompt("Error. Ingrese precio por bolsa"));
    }

    
    if(producto == "arena")
    {
      acumarena += cantidad;
    }
    else if(producto == "cal")
    {
      acumcal += cantidad;
    }
    else
    {
      acumcemento += cantidad;
    }
    
    if(flag || precio > tipoCaro)
    {
      tipoCaro = producto;
      flag = 0;
      
    }
    totalproducto = cantidad * precio;
    acumCompra += totalproducto;
    acumbolsas += cantidad;

    sigue = prompt("Desea agregar algo mas a la compra?: ", "si");
    
  }while(sigue == "si");
  


  
  document.write("a- El importe total bruto es: $" + acumCompra + "<br>");
  
  if(acumbolsas > 10 && acumbolsas <=30)
  {
    importe15 = acumCompra * 0.85;
    document.write("b- El importe total a pagar con descuento es: $" + importe15 + "<br>");
  }
  else if(acumbolsas >30)
  {
    importe25 = acumCompra * 0.75;
    document.write("b- El importe total a pagar con descuento es: $" + importe25 + "<br>");
  }


  if(acumarena > acumcal && acumarena > acumcemento)
  {
    document.write("d- El tipo de producto con mas bolsas pedidas es la arena. <br>");
  }
  else if(acumcal >= acumarena && acumcal > acumcemento)
  {
    document.write("d- El tipo de producto con mas bolsas pedidas es la cal. <br>");
  }
  else
  {
    document.write("d- El tipo de producto con mas bolsas pedidas es el cemento. <br>");
  }
  document.write("f- El tipo de producto mas caro es la " + tipoCaro);
}
