// crea un array llamado vowels, identifica de que manera podemos recorrer los elementos del array al reves
//crea la funcion llamada reverse, invoca a la funcion y muestra la solucion en consola
var vowels=['a','e','i','o','u'];
var numbers=['one,'two','three'];
var reverse= function (array){
	var newArray=[];
	var size=arry.length;
	var lastPosition=size-1;
	for(var i=lastPosition;i>=0;i--){
		newArray.push(array[i]);
			}
			return newArray;
}
console.log(reverse(vowels));
console.log(vowels);

/*var lastPosition=4;
var size=vowels.length;
for(var i=0;i<vowels.length;i++){//para recorrer la variable vowels
	console.log(vowels[i]);
	// si se quieren recorrer los elementos al reves seria for(var=i;lastPosition;i>=0;i--){}

}/*
