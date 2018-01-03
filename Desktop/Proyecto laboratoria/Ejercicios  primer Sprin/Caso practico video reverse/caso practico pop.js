var vowels=['a','e','i']//['i','e','a']
// metodo pop -->  retorna el ultimo elemento del array 
// el array original modifica el tamaño ya que elimina el ultimo elemento es decir quitaria a 
console.log(vowels.pop());
console.log(vowels);
console.log(vowels.pop());// al escribir esto nuevamente quita el siguiente elemento es decir e.
console.log(vowels);

// metodo SPLICE
// puede funcionar con tres parametros dependiendo de lo que se quiera hacer se puede 
// usar dos parametros

console.log(vowels.splice(0,1)) ;
console.log(vowels);


