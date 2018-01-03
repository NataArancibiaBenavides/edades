/*Dado un string, cree un function que la reverse.
Nota: no se puede usar metodos de javascript(reverse,join,split etc)*/
function reverso(texto){
	var chain="";
	for( var i=texto.length; i>=0;i--) {// se pone el parametro texto y length
		chain+=texto.charAt(i);// concatenar
	}
	return chain;
}
reverso("natalia");

// la otra opcion con metodo
function reverso(text){
	var chain=text.split('').reverse().join("");

return chain;
}
reverso("natalia")

// Segundo ejercicio 

/*Dado el arreglo arr=[3,1,2,4] verificar si esta ordenado de mayor a menor , Mayor a menor true
y si esta desodenado false*/

function ordenar(arr){
	for(var i=0;i<arr.length;i++){
		if(arr[i]< arr[i+1]){
		
		return false;

			}
	
	}
	return true;
	
}

/*Crear un arreglo llamado productos este arreglo debe contener objeros de variados
tipos y cada  objeto debe tener las propiedades nombre y tipo y recorrer el arreglo y pushear
nuevo arreglo*/
var producto=[
{

nombre:'polera',
tipo:'ropa'

},
{
	nombre:'refrigerador',
	tipo:'electrodomesticos'

},
{
	nombre:'hp',
	tipo:'computador'
},
{
	nombre:'smarttv',
	tipo:'electronica'
},
{
	nombre:'asus',
	tipo:'computador'

},];
function arrObj(arr){
	var computadores=[];
	for(var i=0;i < arr.length;i++){
		if( arr[i].tipo==='computador'){
			computadores.push([i]);

		}
  }
  return computadores;
}
console.log(arrObj(producto));

	
		



