function mostrar()
{
  let producto;
  let cantidad;
  let precio;
  let acumcal = 0;
  let acumcemento = 0;
  let acumarena = 0;
  let acumCompra = 0;
  let acumbolsas = 0;
  let sigue;
  let flag = 1;
  let tipoCaro;
  let maxPrecio;
  let totalproducto;
  let importe15;
  let importe25;

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
    
    if(flag || precio > maxPrecio)
    {
      maxprecio = precio;
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
