function mostrar()
{
	/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m")
	 y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/

	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let respuesta;
	let flag = 1;
	let mayorTemperatura;
	let personaTemp;
	let viudosMayores = 0;
	let contadorNoCasados = 0;
	let contadorMayFiebre = 0;
	let contadorhombsol = 0;
	let acumEdad = 0;

	
	
	do
	{
		nombre = prompt("Ingrese su nombre y apellido: ");
		edad = parseInt(prompt("Ingrese su edad: "));
		while(isNaN(edad) || edad < 0)
		{
			edad = parseInt(prompt("Error. Ingrese su edad: "));
		}
		sexo = prompt("ingrese sexo: f o m").toLowerCase();
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Eror. ingrese sexo: f o m");
		}
		estadoCivil = prompt("Ingrese su estado civil: soltero, casado o viudo").toLowerCase();
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Error. Ingrese su estado civil: soltero, casado o viudo");
		}
		temperatura = parseFloat(prompt("Ingrese temperatura corporal: "));
		while(isNaN(temperatura))
		{
			temperatura = parseFloat(prompt("Valor invalido. Ingrese temperatura corporal: "));
		}
		while(flag || mayorTemperatura < temperatura)
		{
			mayorTemperatura = temperatura;
			personaTemp = nombre;
			flag = 0;
		}
		if (edad >= 18 && estadoCivil == "viudo") 
		{
		viudosMayores++;	
		}
		if(sexo == "m" && estadoCivil != "casado")
		{		
			contadorNoCasados++;
		}
		if(edad > 60 && temperatura > 38)
		{
			contadorMayFiebre++;
		}
		if( sexo == "m" && estadoCivil == "soltero")
		{
			acumEdad += edad;
			contadorhombsol++;
			promedioHomb = acumEdad/contadorhombsol;
		}

	respuesta = prompt("¿Desea ingresar otra persona?:", "si");

	}while(respuesta == "si")

document.write("a- La persona con mayor temperatura se llama: " + personaTemp + "<br>");
document.write("b- La cantidad de hombres mayores que estan viudos es: " + viudosMayores + "<br>");
document.write("c- La cantidad de hombres que hay solteros o viudos es: " + contadorNoCasados + "<br>");
document.write("d- La cantidad de personas de la tercera edad con mas de 38° es: " + contadorMayFiebre + "<br>");
document.write("e- El promedio de edad de los hombres solteros es: " + promedioHomb + "<br>");

}
