/*
document.getElementById('nombredelid');
document.getElementsByClassName('nombredelaclase')[0];
document.getElemetsByTagName('etiqueta')[0];
document.querySelector('.elemeto');en este siempre se pone # o . encuentra la primera coincidencia que encuentre
document.querySelectorAll('.elemento');devuelve todos los elementos que tengan esa clase
*/

var contenedor=document.getElementById('container');/*accedio al id y se guardo en una variable*/
var paragraph=document.createElemente('p');
var txt=document.createTexNode('Hola soy un nodo de texto');

//padre.appendChild(hijo);
paragraph.appendChild(txt);
contenedor.appendChild(paragraph);





