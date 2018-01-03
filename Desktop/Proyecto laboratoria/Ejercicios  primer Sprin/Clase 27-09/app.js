// Ejercicio 1
var numbers=[1,2,3,4,5];
function multiply(arr){
    var result=[];//version nueva de arreglo vacio esta se usa
//var result=new array(); la forma antigua de quedar un arreglo vacio.
for (var i =0;i< numbers.length;i++){
	result.push(numbers[i]*5);//para agregar
	//numbers[0]*5--> 1*5
	//numbers[1]*5--> 2*5
} return result;
}
//numbers2=[5,10,15,20,25] 

//Ejercicio 2
var arr=[1,2,3,4,5,6,7,8,9,10];
function filterEven(arreglo){
	var result=[];
	for (var i=0;i< arr.length;i++){
		if (arr[i]%2==0){//se realiza rediduo para obtener numeros pares
			result.push(arr[i]);// se pone i xq es el indice que va recorriendo
		}
	}
	return result; // se hace fuera del for para que se detenga la funcion.
}

// Tercer ejercicio
var cats=['chica','negra','rubio','jaspe','luci'];
cats.pop()// elimina el ultimo elemento de array es  decir luci
cats// al escribir cats se visualiza lo que se realizo
cats.push('minino')// se agrega un elemento nuevo pero agrega la longitud es decir sera 5
cats// 
cats indexof('rubio')//me duvuelve a la posicion que estoy buscando 
// cuarto ejercicio
var cats={};// objeto vacio
cats['name']='chica';// se agrega chica dara resultado chica
cats//
cats['age']='4'; // se agrega edad , esta forma de agregar se parece a push 

// hay dos formas de agregar objeros que seria corchetes y comillas 
// otra forma de agregar propiedades es 
console.log(object.keys(cats))







