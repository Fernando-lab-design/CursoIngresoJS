function mostrar()
{
  let persona1 = prompt("indique su nombre");
  let persona2 = prompt("indique el nombre de su pareja");
  let peso1 = parseInt(prompt("indique su peso"));
  let peso2 = parseInt(prompt("indique el peso de su pareja"));
  let suma = peso1 + peso2;
  let promedio = suma / 2;
    
  alert(`ustedes se llaman ${persona1} y ${persona2} pesan ${peso1} y ${peso2}, su peso sumado es ${suma} y el promedio de peso es ${promedio}`);


}
