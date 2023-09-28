var som = document.getElementById("som");

const botao = document.getElementById ("btn") 
botao.onmouseover = function(){

    som.pause();
    som.currentTime = 0;
    som.play();
    
}
