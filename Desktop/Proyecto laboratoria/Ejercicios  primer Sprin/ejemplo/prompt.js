function principal2(option){
	do{
		var respuesta = prompt("Indique el número de lo que desea hacer: 1)Saludar - 2)Despedirse");
		if(respuesta != ""){
			if(respuesta == "1") {
				saludar();
			} else if (respuesta == "2") {
				despedir();
			} else {
				alert("Ingrese una opción válida");
			}
		}
	} while (respuesta == "" || (respuesta != "1" && respuesta != "2"));
}

function saludar(){
	alert("Hola");
}

function despedir(){
	alert("Chao");
}

principal2();