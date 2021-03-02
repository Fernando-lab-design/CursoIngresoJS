/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y
si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y
si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,
si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del
impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     let costo = 35;
     let cantidad = parseInt(document.getElementById("txtIdCantidad").value);
     let compra = costo * cantidad;
     let precioFinal;
     let Marca = document.getElementById("Marca").value;
     let IIBB;

     if(cantidad >= 6)
     {
        precioFinal = compra * 0.5;    
        
     }
     else
     {
         switch (cantidad) 
         {
             case 5:
                if (Marca == "ArgentinaLuz") 
                {
                    precioFinal = compra * 0.6;                         
                }
                else
                {
                precioFinal = compra * 0.7;
                }
            break;
            case 4:
                if (Marca == "ArgentinaLuz" || "FelipeLamparas")
                {                                
                precioFinal = compra * 0.75;
                }
                else
                {
                    precioFinal = compra * 0.8;
                }
            break;
            case 3:
                if(Marca == "ArgentinaLuz")
                {
                precioFinal = compra * 0.85;
                }                              
                if(Marca == "FelipeLamparas")
                {
                precioFinal = compra * 0.9;
                }
                else
                {
                precioFinal = compra * 0.95;
                }
            break;
            default:
                precioFinal = compra;

         }
     }        
    
        if (precioFinal >120) 
        {
            IIBB = precioFinal * 0.1;
            
            document.getElementById("txtIdprecioDescuento").value = precioFinal + IIBB;

            alert("Usted pago $" + IIBB + " de IIBB" );
              
        }
        else
        {
            document.getElementById("txtIdprecioDescuento").value = precioFinal;

        }
}

