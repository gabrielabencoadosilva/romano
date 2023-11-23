function tocaSom (seletorElemento){

    const elemento = document.querySelector(seletorElemento);

if(elemento && elemento.localName ==='audio'){
    elemento.play();
}
    else { 
        //alert('Elemento ou seletor não encontrado'); 
    console.log('Elemento ou seletor não encontrado');
    }
}


const ListaDeTeclas = document.querySelectorAll('.tecla');

//para
for(let contador = 0;contador < ListaDeTeclas.Length; contador++) {
    
    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

   tecla.onclick = function(){
        tocaSom(idAudio);
  }
  tecla.onkeydown = function (evento){
   
    if (evento.code === 'Space' || evento.code ==='Enter');{
tecla.classList.add('ativa');
 }
}

tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
}

}

