//EJERCICIO 1
//Crea una función range que tome dos argumentos: 
//start (principio) y end (fin) y que devuelva un array que contenga los números desde el start hasta el end (incluyéndolo)

function range(start,end){
	var newArray=[];
	for(var i=start;i<=end;i++);{
		newArray.push(i);
			}
			return newArray; 
}
console.log(range(1,10));

//EJERCICIO 2 * con los array siempre hay que usar for
//escribe una función sum que tome una array de números y devuelva la suma de estos números.
//Confirma que al ejecutar console.log(sum(range(1,10))) se imprime el resultado 55. 
function sum (array){
var result=0;
for(var i=0;i<array,length;i++){
	result +=array[i];
}
return result;
}
// 2. Scorekeeper
//Imagina que estás jugando un juego con algunas amigas y quieres ir registrando el puntaje de cada una. 
//Crea un object llamado scores donde los keys o propiedades son los nombres de tus amigas, y los valores serán los puntajes (todos empiezan con 0).

var score={
	ana:0,
	ale:0;
	maria:0,// esta afuera de la funcion el tablero 
};

function addPoints(name,points){//aca uno en name agrega excribiendo el nombre de quien uno quiera saber el puntaje y los puntajes de esa persona
	score[name]+=points;
}
console.log(add.Points('Maria',350'));

function printAllPoints(){
	var
}


}


}
