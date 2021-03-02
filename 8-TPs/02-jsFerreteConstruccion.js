/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() 
{
    let largo = parseFloat(document.getElementById("txtIdLargo").value);
    let ancho = parseFloat(document.getElementById("txtIdAncho").value);
    let perimetro = largo * 2 + ancho * 2;
    let alambre = perimetro * 3;

    alert(alambre);

}
function Circulo() 
{
    let radio = parseFloat(document.getElementById("txtIdRadio").value);
    let circunferencia = radio * 2 * Math.PI;
    let alambre = circunferencia.toFixed(2) * 3;

    alert(alambre);
    
    
    //parseFloat es funcion para decimales

}

function Materiales() 
{
    let largo = parseInt(document.getElementById("txtIdLargo").value);
    let ancho = parseInt(document.getElementById("txtIdAncho").value);
    
    let area = largo * ancho;
    
    let totalcemento = area * 2;
    let totalcal = area * 3;
    
    totalcal = totalcal.toFixed(0);
    totalcemento = totalcemento.toFixed(0);
    
    alert(`Es necesario ${totalcemento} bolsas de cemento y ${totalcal} bolsas de cal`);

    


}