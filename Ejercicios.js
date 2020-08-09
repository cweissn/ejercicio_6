

//preoblema 2.1//
//Realice un diagrama de flujo y pseudocódigo que representen el algoritmo para obtener el área de un triángulo.


//solución:
/*
let base = +prompt("ingrese la base");
let altura = +prompt("ingrese la altura");
areaTriangulo =  (base * altura)/2;
console.log(`la base = ${base} + ingrese la altura= ${altura} + resultado ${areaTriangulo}`);
*/


//problema 2.2//
/*Una empresa importadora desea determinar cuántos dólares puede
adquirir con equis cantidad de dinero mexicano. Realice un diagrama
de flujo y pseudocódigo que representen el algoritmo para tal fin*/

//solución:
/*
let cantDineromx = +prompt("ingrese dinero mexicano");
let tipoCambiodol = +prompt("ingrese tipo de cambio");
CantidadDolares =  (cantDineromx / tipoCambiodol);
console.log(`dinero mexicano = ${cantDineromx} + tipo cambio= ${tipoCambiodol} + resultado ${CantidadDolares}`);
*/


//problema 2.3//
/*Una empresa que contrata personal requiere determinar la edad de
las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron. Realice el diagrama
de flujo y pseudocódigo que representen el algoritmo para solucionar
este problema.*/

//solución:
/*let annoNacimiento = +prompt("ingrese año de nacimiento");
let anoActual = +prompt("ingrese el año actual");
EdadPostulante =  (anoActual - annoNacimiento);

console.log(`Año nacimiento postulante = ${annoNacimiento} + año actual= ${anoActual} + resultado ${EdadPostulante}`);
*/


//preoblema 2.4//
/*Un estacionamiento requiere determinar el cobro que debe aplicar a
las personas que lo utilizan. Considere que el cobro es con base en las
horas que lo disponen y que las fracciones de hora se toman como
completas y realice un diagrama de flujo y pseudocódigo que representen el algoritmo que permita determinar el cobro.*/

//solución:
/*let cantidadHoras = +prompt("ingrese Cantidad de horas");
let cantidadminutos = +prompt("ingrese Cantidad de minutos");
let costoporHora = +prompt("ingrese el costo por Hora");
if (cantidadminutos>0){
    cantidadminutos=1}
    else { 
    cantidadminutos=0};

totalHoras =  (cantidadHoras + cantidadminutos);
totalCosto = totalHoras * costoporHora;

console.log(`ingrese Cantidad de horas = ${cantidadHoras} + ingrese Cantidad de minutos= ${cantidadminutos} + costo por hora ${costoporHora} +  resultado ${totalCosto}`);*/


//preoblema 2.5/
/*Pinturas “La brocha gorda” requiere determinar cuánto cobrar por
trabajos de pintura. Considere que se cobra por m2 y realice un diagrama de flujo y pseudocódigo que representen el algoritmo que le
permita ir generando presupuestos para cada cliente..*/

//solución:
/*let cantidametro2 = +prompt("ingrese Cantidad de metros cuadrados");
let costoporMetro2 = +prompt("ingrese el costo por M2");

totalCosto = costoporMetro2 * cantidametro2;

console.log(`ingrese Cantidad de metros cuadrados = ${cantidametro2} + ingrese costo por M2= ${costoporMetro2} +  resultado ${totalCosto}`);
*/


//preoblema 2.6/
/*Se requiere determinar la hipotenusa de un triángulo rectángulo.
¿Cómo sería el diagrama de flujo y el pseudocódigo que representen
el algoritmo para obtenerla? Recuerde que por Pitágoras se tiene
que: C2 = A2 + B2*/

//solución:
/*let valorA = +prompt("ingrese valor de A");
let valorB = +prompt("ingrese el valor B");

valorC = Math.sqrt((valorA*valorA) + (valorB*valorB));

console.log(`ingrese valor de A = ${valorA} + ingrese el valor B= ${valorB} +  resultado de la hipotenusa ${valorC}`);*/


//preoblema 2.7/
/*La compañía de autobuses “La curva loca” requiere determinar el costo que tendrá el boleto de un viaje sencillo, esto basado en los kilómetros por
 recorrer y en el costo por kilómetro. Realice un diagrama de
flujo y pseudocódigo que representen el algoritmo para tal fin.*/

//solución:
/*let cantKilometros = +prompt("ingrese la cantidad de kilometros");
let CostoKilometro = +prompt("ingrese el costo por kilometro");

Costoboleto =  cantKilometros * CostoKilometro;

console.log(`ingrese la cantidad de kilometros = ${cantKilometros} + ingrese el costo por kilometro= ${CostoKilometro} +  resultado de la hipotenusa ${Costoboleto}`);
*/


//preoblema 2.8/
/*Se requiere determinar el tiempo que tarda una persona en llegar de
una ciudad a otra en bicicleta, considerando que lleva una velocidad
constante. Realice un diagrama de flujo y pseudocódigo que representen el algoritmo para tal fin*/

//solución:
/*let kilometrosxHora = +prompt("Ingrese la velocidad en kilometros por hora");
let Distanciaentreciudad = +prompt("distancia entre ciudad en Kilometros");

Tiempototal =  Distanciaentreciudad / kilometrosxHora;

console.log(`ingrese la velocidad en kilometros por hora = ${kilometrosxHora} + ingrese distancia entre ciudad en Kilometros= ${Distanciaentreciudad} +  resultado ${Tiempototal}`);
*/


//preoblema 2.9/
/*Se requiere determinar el costo que tendrá realizar una llamada telefónica con base en el tiempo que dura la llamada y en el costo por
minuto. Realice un diagrama de flujo y pseudocódigo que representen el algoritmo para tal fin*/

//solución:
/*let tiempollamada = +prompt("Ingrese tiempo de la llamada");
let costoMinuto = +prompt("Ingrese el costo por Mínuto");

Costototal =  tiempollamada * costoMinuto;

console.log(`ingrese tiempo de la llamada = ${tiempollamada} + ingrese el costo por Mínuto= ${costoMinuto} +  resultado ${Costototal}`); */



//preoblema 2.10/
/*La CONAGUA requiere determinar el pago que debe realizar una
persona por el total de metros cúbicos que consume de agua. Realice un diagrama de flujo y pseudocódigo que representen el 
algoritmo que permita determinar ese pago.*/

//solución:
/*let CantidadM3 = +prompt("Ingrese Cantidad Metros3");
let costoM3 = +prompt("Ingrese  costo por Metro3");

Costototal =  CantidadM3 * costoM3;

console.log(`ingrese Cantidad Metros3 = ${CantidadM3} + ingrese costo por Metro3= ${costoM3} +  resultado ${Costototal}`); */


//preoblema 2.11/
/*La compañía de luz y sombras (CLS) requiere determinar el pago
que debe realizar una persona por el consumo de energía eléctrica,
la cual se mide en kilowatts (KW). Realice un diagrama de flujo y
pseudocódigo que representen el algoritmo que permita determinar ese pago..*/

//solución:
/*let CantidadKw = +prompt("Ingrese cantidad de consumo KW");
let costoKw = +prompt("Ingrese costo de enerigia por KW");

Costototal =  CantidadKw * costoKw;

console.log(`ingrese cantidad de consumo KW = ${CantidadKw} + ingrese costo de enerigia por KW= ${costoKw} +  resultado ${Costototal}`); */


//preoblema 2.12/
/*Realice un diagrama de flujo y pseudocódigo que representen el
algoritmo para determinar cuánto pagará finalmente una persona
por un artículo equis, considerando que tiene un descuento de 20%,
y debe pagar 15% de IVA (debe mostrar el precio con descuento y el
precio final).*/

//solución:
/*let CostoArticulo = +prompt("Ingrese costo del articulo");
 

Costopretotal =  (CostoArticulo - (CostoArticulo *  0.20) );
Costototal = Costopretotal + (Costopretotal*0.15);

console.log(`ingrese costo del artuculo = ${CostoArticulo}  +  resultado ${Costototal}`); 
*/

//preoblema 2.13/
/*Realice un diagrama de flujo y pseudocódigo que representen el algoritmo para determinar cuánto dinero ahorra una persona en un
año si considera que cada semana ahorra 15% de su sueldo (considere cuatro semanas por mes y que no cambia el sueldo)..*/

//solución:

/*
let montoSueldo = +prompt("Ingrese el monto del sueldo por semana");
ahorro =  (((montoSueldo*0.15)*4)*12);
console.log(`ingrese  el monto del sueldo por semana = ${montoSueldo}  +  resultado ${ahorro}`); 
*/


//preoblema 2.14/
/*Una empresa desea determinar el monto de un cheque que debe
proporcionar a uno de sus empleados que tendrá que ir por equis
número de días a la ciudad de Monterrey; los gastos que cubre la
empresa son: hotel, comida y 100.00 pesos diarios para otros gastos. El monto debe estar desglosado para cada concepto. Realice un
diagrama de flujo y pseudocódigo que representen el algoritmo
que determine el monto del cheque*/

//solución:

/*
let cantidadDias = +prompt("Ingrese cantidad de Días");
let costoHotal = +prompt("Ingrese costo del hotal");
let costoComidal = +prompt("Ingrese costo de comida");
 
chequeEmpresa =   (costoHotal+costoComidal+100)*cantidadDias;

console.log(`costo asumido por la empresa por día = ${chequeEmpresa} +cantidad de días ${cantidadDias} +  resultado ${chequeEmpresa}`); 
*/


//preoblema 2.15/ 

//preoblema 2.16/ Solicita Diagrama 

//preoblema 2.17/ Solicita Diagrama

//preoblema 2.18/ Solicita Diagrama


//preoblema 2.19/
/*Realice el diagrama de flujo y pseudocódigo que representen el algoritmo para encontrar el área de un cuadrado.*/

//solución:

/*
let ladodelcuadrado = +prompt("Ingrese el lado del cuadrado");
 
areaCuadrado =   ladodelcuadrado * ladodelcuadrado;

console.log(`Ingrese el lado del cuadrado = ${ladodelcuadrado}   +  resultado ${areaCuadrado}`); 
*/


//preoblema 2.20/
/*Realice el diagrama de flujo y pseudocódigo que representen el algoritmo para determinar el promedio que obtendrá un alumno considerando que realiza tres exámenes, 
de los cuales el primero y el
segundo tienen una ponderación de 25%, mientras que el tercero
de 50%.*/

//solución:

/*
let examen1 = +prompt("Ingrese nota del examen 1");
let examen2 = +prompt("Ingrese nota del examen 2");
let examen3 = +prompt("Ingrese nota del examen 3");
 
notaexamen1 =  examen1 * 1;
notaexamen2 =  examen2 * 1;
notaexamen3 =  examen3 * 2 ;

notafinal =   (notaexamen1 + notaexamen2 + notaexamen3) / 4;

console.log(`Examen 1 = ${examen1} + Examen 2 ${examen2}  + Examen 3 ${examen3} +  resultado ${notafinal}`); 
*/


//preoblema 2.21/
/*Realice un diagrama de flujo y pseudocódigo que representen el algoritmo para determinar aproximadamente cuántos meses, semanas, días y horas ha vivido una persona*/

//solución:
/*
let edad = +prompt("Ingrese la edad");
 
meses =  edad * 12;
semanas =  meses * 4.3;
horas =  semanas * 168;


console.log(` edad = ${edad} + Meses = ${meses} + semanas ${semanas} + horas ${horas}`); 
*/

//preoblema 2.22/

/*Se requiere un algoritmo para determinar el costo que tendrá realizar una llamada telefónica con base en el tiempo que dura la llamada y en el costo por minuto. 
Represente la solución mediante el
diagrama de flujo y pseudocódigo.*/

//solución:

/*let tiempollamada = +prompt("Ingrese tiempo de la llamada");
let costoMinuto = +prompt("Ingrese el costo por Mínuto");

Costototal =  tiempollamada * costoMinuto;

console.log(`ingrese tiempo de la llamada = ${tiempollamada} + ingrese el costo por Mínuto= ${costoMinuto} +  resultado ${Costototal}`); 

*/


//preoblema 2.23/

/*El hotel “Cama Arena” requiere determinar lo que le debe cobrar a
un huésped por su estancia en una de sus habitaciones. Realice un
diagrama de flujo y pseudocódigo que representen el algoritmo para
determinar ese cobro..*/

//solución:

let cantidadDias = +prompt("Ingrese cantidad de días");
let costoporDia = +prompt("Ingrese costo por días");

Costototal =  cantidadDias * costoporDia;

console.log(`ingrese cantidad de días = ${cantidadDias} + ingrese el costo por día= ${costoporDia} +  resultado ${Costototal}`); 

