/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados()
{
    let ingresado = parseFloat(document.getElementById("txtIdTemperatura").value);
    
    resultado = ingresado / 32;

    alert(ingresado + " Fahrenheit son " + resultado + " centigrados");

}

function CentigradosFahrenheit () 
{
    let ingresado = parseFloat(document.getElementById("txtIdTemperatura").value);
    
    resultado = ingresado * 32;

    alert(ingresado + " centigrados son " + resultado + " Fahrenheit");
}
