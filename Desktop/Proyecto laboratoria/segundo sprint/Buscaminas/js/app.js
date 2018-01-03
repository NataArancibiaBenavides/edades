var tableBombIt= [
                  ' ',
                  '*',
                  ' ',
                  '/n',
                  ' ',
                  ' ',
                  '*',
                  '2',
                  '/n',
                  '/n',
                  '1',
                  '*',
                  ' ',
                  ' ',
                  '/n',
                  ' ',
                  '3',
                  '*',
                  ' ',
                 ]

var containerBombIt=document-getElementById(' container-bomb-it');
var bombIt=document.getElementById('bomb-it');

var drawGameZone=function(array){
  for (i = 0; i < tableBombIt.length;i++){
  	var cell=document.createElement('div');
  	var enter=document.createElement('br');

  	if(array[i] == '1' || array[i] =='2'){
  		cell.className='number';
  	}else if(array[i]==' '){
  		cell.className='emptySpace';
  	}else if (array[i] == '*') {
  	}else{
  	 continue;	
  	}

  	bombIt.appendChild(cell);
  }
}
