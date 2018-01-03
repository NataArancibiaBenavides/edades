/*
document.getElementById('nombredelid');
document.getElementsByClassName('nombredelaclase')[0];
document.getElemetsByTagName('etiqueta')[0];
document.querySelector('.elemeto');en este siempre se pone # o . encuentra la primera coincidencia que encuentre
document.querySelectorAll('.elemento');devuelve todos los elementos que tengan esa clase
*/

var contenedor=document.getElementById('container');/*accedio al id y se guardo en una variable*/
var paragraph=document.createElement('p');
var txt=document.createTextNode('Hola soy un nodo de texto');

var paragraph2=document.createElement('p');
var txt2=document.createTextNode('Hola soy un nodo de texto 2');

var paragraph3=document.createElement('p');
var txt3=document.createTextNode('Hola soy un nodo de texto 3');

var paragraph4=document.createElement('p');
var txt4=document.createTextNode('Hola soy un nodo de texto 4');
//padre.appendChild(hijo);
paragraph.appendChild(txt);
paragraph2.appendChild(txt2);
paragraph3.appendChild(txt3);
paragraph4.appendChild(txt4);

contenedor.appendChild(paragraph);
contenedor.appendChild(paragraph2);
contenedor.appendChild(paragraph3);
contenedor.insertBefore(paragraph4,paragraph2);//insertBefore tiene dos parametros el nodo nuevo y el(nodo anterior);

/*elemento.addEventListener('click',function(){
})
*/

paragraph2.addEventListener('click', function()
	{paragraph2.classList.toggle('rojo');/*funciona como un interruptor
	verifica si no tiene la clase entonces se le agrega, si verifica que la tiene
	entonces se la quita*/

})

paragraph.classList.add('azul');//este deja fija la caracteristica

paragraph3.addEventListener('click', function(){
	contenedor.removeChild(paragraph3);
})