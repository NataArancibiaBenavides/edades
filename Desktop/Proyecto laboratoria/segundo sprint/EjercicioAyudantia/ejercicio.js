// Primera Funcción
function esPar(num){
var result;
if(num %2===0){
	result= true;

}else{
	result=false;
}
return result;
}
// para comprobar se pone esPar(9)--> da false
// esPar(8) --> da verdadero
// Segunda Funcción
function delCaracter(str,char){
var newString= str.split(char).join("");// split escoge un caracter y lo elimina y join con las "" junta la palabra.
return newString;
}
// para llamar a la funcion se escibe el nombre de la funcion 
// delCaracter("natalia","t") el resultado será naalia sin la t

function reverso(str){
var reversoStr=str.split("").reverse().join("");// se paso a split para dejarlo como arreglo para poder hacer el metodo reverse y el join ("") para unir los caracteres.
return reversoStr;
}
// para ver 
//funcion principal
function juegoPalabra(num,str,char){
var isEven=esPar(num);
var newChar=delCaracter(str,char);
var newReverso=reverso(str);
var result;
if( isEven===true ){
	result=newChar;
}else{
	result=newReverso;
}
return result;
}// juegoPalabra (2,"natalia","a") como es par el num es 2 quitara las a dejara ntli
// juegoPalabra (1,"natalia","a") como es impart el num 1 respondera el nombre alrevez